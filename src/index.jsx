import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import languages from 'languages'
import { Modifier, CompositeDecorator, DefaultDraftBlockRenderMap, Editor, ContentState, EditorState, RichUtils, convertFromRaw, convertToRaw, convertFromHTML as originConvertFromHTML} from 'draft-js'
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor'
import { convertToHTML, convertFromHTML} from 'draft-convert'
import { handleNewLine } from 'draftjs-utils'
import { getToHTMLConfig, getFromHTMLConfig, mergeStyledSpans, convertCodeBlock } from 'configs/convert'
import keyBindingFn from 'configs/keybindings'
import defaultOptions from 'configs/options'
import EditorController from 'controller'
import { getBlockRendererFn, customBlockRenderMap, blockStyleFn, getCustomStyleMap, decorators } from 'renderers'
import ControlBar from 'components/business/ControlBar'
import MediaLibrary from 'helpers/MediaLibrary'
import { detectColorsFromHTML, detectColorsFromRaw } from 'helpers/colors'

// TODO
// 重写convertToHTML
// 允许直接拖放媒体到编辑器区域
// 强化图片尺寸编辑功能
// 支持mention功能
// 支持hashtag功能
// 增加取色器
// 增加insertHTML API

const editorDecorators = new CompositeDecorator(decorators)
const blockRenderMap = DefaultDraftBlockRenderMap.merge(customBlockRenderMap)

export default class BraftEditor extends EditorController {

  static defaultProps = {
    ...defaultOptions,
    onChange: null,
    onHTMLChange: null,
    onRawChange: null,
    onFocus: null,
    onBlur: null,
    onSave: null
  }

  constructor (props) {

    super(props)

    const editorState = EditorState.createEmpty(editorDecorators)
    this.editorState = editorState
    this.contentState = editorState.getCurrentContent()
    this.selectionState = editorState.getSelection()
    this.mediaLibrary = new MediaLibrary()
    this.isFocused = false

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

    if (typeof this.props.initialContent !== 'undefined' && this.props.initialContent !== null) {
      this.setContent(this.props.initialContent)
      this.contentInitialized = true
    }

    document.addEventListener('paste', this.handlePaste, false)

  }

  componentWillReceiveProps (nextProps) {

    if (typeof nextProps.initialContent !== 'undefined' && nextProps.initialContent !== null) {
      if (!this.contentInitialized) {
        this.contentInitialized = true
        this.setContent(nextProps.initialContent, nextProps.contentFormat)
      } else if (nextProps.contentId !== this.props.contentId) {
        this.setContent(nextProps.initialContent, nextProps.contentFormat)
      }
    }

  }

  componentWillUnmount () {
    document.removeEventListener('paste', this.handlePaste, false)
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
    const { fontFamilies} = this.props

    if (format === 'html') {
      return mergeStyledSpans(convertToHTML(getToHTMLConfig({contentState, fontFamilies}))(contentState))
    } else {
      return convertToRaw(contentState)
    }

  }

  isEmpty = () => {
    return this.getHTMLContent() === '<p></p>'
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
    let { contentFormat, colors, fontFamilies} = this.props

    contentFormat = format || contentFormat || 'raw'

    if (contentFormat === 'html') {
      content = content || ''
      newState.tempColors = [...this.state.tempColors, ...detectColorsFromHTML(content)].filter(item => this.props.colors.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
      convertedContent = convertFromHTML(getFromHTMLConfig({ fontFamilies }))(convertCodeBlock(content))
    } else if (contentFormat === 'raw') {
      if (!content || !content.blocks) {
        return false
      }
      newState.tempColors = [...this.state.tempColors, ...detectColorsFromRaw(content)].filter(item => this.props.colors.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
      convertedContent = convertFromRaw(content)
    }

    newState.editorState = EditorState.createWithContent(convertedContent, editorDecorators)

    this.editorState = newState.editorState
    this.contentState = newState.editorState.getCurrentContent()
    this.selectionState = newState.editorState.getSelection()

    this.setState(newState)

    return this

  }

  setEditorProp = (key, name) => {
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
    const tabIndents = this.props.tabIndents

    if (currentBlockType === 'code-block') {
      this.insertText(' '.repeat(tabIndents), false)
      event.preventDefault()
      return false
    }

    this.props.onTab && this.props.onTab(event)

  }

  onFocus = () => {
    this.isFocused = true
    this.props.onFocus && this.props.onFocus()
  }

  onBlur = () => {
    this.isFocused = false
    this.props.onBlur && this.props.onBlur()
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

  handlePaste = (event) => {

    if (this.isFocused && this.props.media && this.props.media.allowPasteImage) {
      this.mediaLibrary.resolvePastedData(event, image => {
        this.insertMedias([image])
      })
    }

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

    const { fontFamilies } = this.props
    const blockMap = convertFromHTML(getFromHTMLConfig({ fontFamilies }))(convertCodeBlock(html || text)).blockMap
    const nextContentState = Modifier.replaceWithFragment(this.contentState, this.selectionState, blockMap)

    this.setState({
      tempColors: [...this.state.tempColors, ...detectColorsFromHTML(html)].filter(item => this.props.colors.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
    }, () => {
      this.onChange(EditorState.push(this.editorState, nextContentState, 'insert-fragment'))
    })

    return true

  }

  addTempColors = (colors, callback) => {

    this.setState({
      tempColors: [...this.state.tempColors, ...colors].filter(item => this.props.colors.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
    }, callback)

  }

  render() {

    let {
      controls, excludeControls, extendControls, disabled, height, media, language, colors,
      fontSizes, fontFamilies, emojis, viewWrapper, placeholder, imageControls, lineHeights, letterSpacings, indents, textAlignOptions, allowSetTextBackgroundColor
    } = this.props

    controls = controls.filter(item => excludeControls.indexOf(item) === -1)

    const { tempColors } = this.state
    language = languages[language] || languages[defaultOptions.language]

    const externalMedias = media && media.externalMedias ? {
      ...defaultOptions.media.externalMedias,
      ...media.externalMedias
    } : defaultOptions.media.externalMedias

    media = { ...defaultOptions.media, ...media, externalMedias }

    imageControls = imageControls ? {
      ...defaultOptions.imageControls,
      ...imageControls
    } : defaultOptions.imageControls

    this.colorList = [...colors, ...tempColors]
    this.fontSizeList = fontSizes
    this.fontFamilyList = fontFamilies
    this.lineHeightList = lineHeights
    this.letterSpacingList = letterSpacings
    this.indentList = indents

    if (!media.uploadFn) {
      media.video = false
      media.audio = false
    }

    const controlBarProps = {
      editor: this,
      editorHeight: height,
      media, controls, language, viewWrapper, extendControls, colors, tempColors, fontSizes, fontFamilies,
      emojis, lineHeights, letterSpacings, indents, textAlignOptions, allowSetTextBackgroundColor
    }

    const blockRendererFn = getBlockRendererFn({
      editor: this, imageControls,
      language, viewWrapper
    })

    const customStyleMap = getCustomStyleMap({
      colors: [...colors, ...tempColors],
      fontSizes, fontFamilies, lineHeights, letterSpacings, indents
    })
    const editorProps = {
      ref: instance => { this.draftInstance = instance },
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      handleReturn: this.handleReturn,
      handlePastedText: this.handlePastedText,
      onChange: this.onChange,
      onTab: this.onTab,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      readOnly: disabled,
      customStyleMap, blockStyleFn, keyBindingFn,
      blockRendererFn, blockRenderMap, placeholder,
      ...this.state.editorProps
    }

    return (
      <div className={"BraftEditor-container " + (disabled ? 'disabled' : '')}>
        <ControlBar {...controlBarProps} />
        <div className="BraftEditor-content" style={height ? { height } : {}}>
          <Editor {...editorProps} />
        </div>
      </div>
    )

  }
}