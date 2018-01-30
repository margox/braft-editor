import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import languages from 'languages'
import { Modifier, CompositeDecorator, DefaultDraftBlockRenderMap, Editor, ContentState, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert'
import { handleNewLine } from 'draftjs-utils'
import { getToHTMLConfig, getFromHTMLConfig } from 'configs/convert'
import keyBindingFn from 'configs/keybindings'
import defaultOptions from 'configs/options'
import EditorController from 'controller'
import { getBlockRendererFn, customBlockRenderMap, blockStyleFn, getCustomStyleMap, decorators } from 'renderers'
import ControlBar from 'components/business/ControlBar'
import MediaLibrary from 'helpers/MediaLibrary'
import { detectColorsFromHTML } from 'helpers/colors'

// TODO
// 允许直接拖放媒体到编辑器区域
// 允许直接粘贴图片到编辑器

const editorDecorators = new CompositeDecorator(decorators)
const blockRenderMap = DefaultDraftBlockRenderMap.merge(customBlockRenderMap)

export default class BraftEditor extends EditorController {

  constructor(props) {

    super(props)

    const editorState = EditorState.createEmpty(editorDecorators)
    this.editorState = editorState
    this.contentState = editorState.getCurrentContent()
    this.selectionState = editorState.getSelection()
    this.mediaLibrary = new MediaLibrary()

    this.state = {
      tempColors: [],
      editorState: editorState,
      editorProps: {}
    }

    let browser = null
    if (window.chrome) {
      browser = 'chrome'
    } else if (window.safari) {
      browser = 'safari'
    } else if (navigator.userAgent.indexOf('Firefox') > 0) {
      browser = 'firefox'
    }

    if (!document.body.classList.contains('browser-' + browser)) {
      document.body.classList.add('browser-' + browser)
    }

  }

  componentDidMount () {

    if (this.props.initialContent) {
      this.setContent(this.props.initialContent)
      this.contentInitialized = true
    }

  }

  componentWillReceiveProps (next) {

    if (!this.contentInitialized && !this.props.initialContent && next.initialContent) {
      this.setContent(next.initialContent)
    }

  }

  render() {

    let {
      controls, extendControls, height, media, language, colors,
      fontSizes, fontFamilies, emojis, viewWrapper, placeholder, imageControls
    } = this.props

    const { tempColors } = this.state

    controls = controls || defaultOptions.controls
    extendControls = extendControls || defaultOptions.extendControls
    language = languages[language] || languages[defaultOptions.language]
    colors = colors || defaultOptions.colors
    fontSizes = fontSizes || defaultOptions.fontSizes
    fontFamilies = fontFamilies || defaultOptions.fontFamilies
    emojis = emojis || defaultOptions.emojis
    height = height || defaultOptions.height

    const externalMedias = media && media.externalMedias ? {
      ...defaultOptions.media.externalMedias,
      ...media.externalMedias
    } : defaultOptions.media.externalMedias

    media = { ...defaultOptions.media, ...media, externalMedias }

    imageControls = imageControls ? {
      ...defaultOptions.imageControls,
      ...imageControls
    } : defaultOptions.imageControls

    this.colorList = [ ...colors, ...tempColors ]
    this.fontSizeList = fontSizes
    this.fontFamilyList = fontFamilies

    if (!media.uploadFn) {
      media.video = false
      media.audio = false
    }

    const controlBarProps = {
      editor: this,
      media, controls, language, viewWrapper, extendControls,
      colors, tempColors, fontSizes, fontFamilies, emojis
    }

    const blockRendererFn = getBlockRendererFn({
      editor: this, imageControls,
      language, viewWrapper
    })

    const customStyleMap = getCustomStyleMap({
      colors: [ ...colors, ...tempColors ],
      fontSizes, fontFamilies
    })

    const editorProps = {
      ref: instance => {this.draftInstance = instance},
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      handleReturn: this.handleReturn,
      handlePastedText: this.handlePastedText,
      onChange: this.onChange,
      onTab: this.onTab,
      customStyleMap, blockStyleFn, keyBindingFn,
      blockRendererFn, blockRenderMap, placeholder,
      ...this.state.editorProps
    }

    return (
      <div className="BraftEditor-container">
        <ControlBar {...controlBarProps}/>
        <div className="BraftEditor-content" style={{height}}>
          <Editor { ...editorProps }/>
        </div>
      </div>
    )

  }

  onChange = (editorState) => {

    this.editorState = editorState
    this.contentState = editorState.getCurrentContent()
    this.selectionState = editorState.getSelection()
    this.setState({ editorState }, () => {
      clearTimeout(this.syncTimer)
      this.syncTimer = setTimeout(() => {
        const { onChange, onRawChange, onHTMLChange } = this.props
        onChange && onChange(this.getContent())
        onHTMLChange && onHTMLChange(this.getHTMLContent())
        onRawChange && onRawChange(this.getRawContent())
      }, 300)
    })

  }

  getHTMLContent = () => {
    return this.getContent('html')
  }

  getRawContent = () => {
    return this.getContent('raw')
  }

  getContent = (format) => {

    format = format || this.props.contentFormat || 'raw'
    const contentState = this.contentState
    let { fontFamilies } = this.props
    fontFamilies = fontFamilies || defaultOptions.fontFamilies

    return format === 'html' ? convertToHTML(getToHTMLConfig({
      contentState, fontFamilies
    }))(contentState) : convertToRaw(contentState)

  }

  getContentState = () => {
    return this.contentState
  }

  getEditorState = () => {
    return this.editorState
  }

  getDraftInstance = () => {
    return this.draftInstance
  }

  getMediaLibraryInstance = () => {
    return this.mediaLibrary
  }

  setContent = (content, format) => {

    let convertedContent
    let newState = {}
    let { contentFormat, colors } = this.props
    const presetColors = colors || defaultOptions.colors

    contentFormat = format || contentFormat || 'raw'

    if (contentFormat === 'html') {
      newState.tempColors = [ ...this.state.tempColors, ...detectColorsFromHTML(content) ].filter(item => presetColors.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
      convertedContent = convertFromHTML(getFromHTMLConfig())(content)
    } else if (contentFormat === 'raw') {
      convertedContent = convertFromRaw(content)
    }

    newState.editorState = EditorState.createWithContent(convertedContent, editorDecorators)

    this.editorState = newState.editorState
    this.contentState = newState.editorState.getCurrentContent()
    this.selectionState = newState.editorState.getSelection()

    this.setState(newState)

    return this

  }

  setEditorProp = (key, name)  =>{
    this.setState({
      editorProps: {
        ...this.state.editorProps,
        [key]: name
      }
    })
    return this
  }

  forceRender = () => {
    this.setState({
      editorState: EditorState.createWithContent(this.contentState, editorDecorators)
    })
    return this
  }

  handleKeyCommand = (command) => {

    if (command === 'braft-save') {
      this.props.onSave && this.props.onSave()
      return 'handled'
    }

    const nextEditorState = RichUtils.handleKeyCommand(this.editorState, command)

    if (nextEditorState) {
      this.onChange(nextEditorState)
      return 'handled'
    }

    return 'not-handled'

  }

  onTab = (event) => {

    const currentBlock = this.getSelectionBlock()
    const currentBlockType = currentBlock.getType()
    const tabIndents = this.props.tabIndents || defaultOptions.tabIndents

    if (currentBlockType === 'code-block') {
      this.insertText(' '.repeat(tabIndents), false)
      event.preventDefault()
      return false
    }

  }

  handleReturn = (event) => {

    const currentBlock = this.getSelectionBlock()
    const currentBlockType = currentBlock.getType()

    if (currentBlockType === 'unordered-list-item' || currentBlockType === 'ordered-list-item') {
      if (currentBlock.getLength() === 0) {
        this.toggleSelectionBlockType('unstyled')
        return true
      }
      return false
    } else if (currentBlockType === 'code-block') {
      if (
        event.which === 13 && (
        event.getModifierState('Shift') ||
        event.getModifierState('Alt') ||
        event.getModifierState('Control')
      )) {
        this.toggleSelectionBlockType('unstyled')
        return true
      }
      return false
    } else {
      const nextEditorState = handleNewLine(this.state.editorState, event)
      if (nextEditorState) {
        this.onChange(nextEditorState)
        return true
      }
      return false
    }

    return false

  }

  handlePastedText = (text, html) => {

    if (!html) {
      return false
    }

    const pasteMode = this.tmpPasteMode || this.props.pasteMode || 'normal'

    if (pasteMode === 'text') {
      this.tmpPasteMode = 'normal'
      const tmpTextHolder = document.createElement('div')
      tmpTextHolder.innerHTML = html
      return this.handlePastedText(text, tmpTextHolder.textContent || tmpTextHolder.innerText || '')
    } else {
      this.tmpPasteMode = null
    }

    const { tempColors } = this.state
    const blockMap = convertFromHTML(getFromHTMLConfig())(html || text).blockMap
    const nextContentState = Modifier.replaceWithFragment(this.contentState, this.selectionState, blockMap)
    const presetColors = this.props.colors || defaultOptions.colors

    this.setState({
      tempColors: [ ...tempColors, ...detectColorsFromHTML(html) ].filter(item => presetColors.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
    }, () => {
      this.onChange(EditorState.push(this.editorState, nextContentState, 'insert-fragment'))
    })

    return true

  }

}