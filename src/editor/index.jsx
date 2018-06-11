import 'draft-js/dist/Draft.css'
import 'assets/scss/_base.scss'
import React from 'react'
import languages from 'languages'
import { Modifier, CompositeDecorator, DefaultDraftBlockRenderMap, Editor, ContentState, EditorState, RichUtils, convertFromRaw, convertToRaw, convertFromHTML as originConvertFromHTML} from 'draft-js'
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor'
import { convertToHTML, convertFromHTML} from 'draft-convert'
import { handleNewLine } from 'draftjs-utils'
import { getToHTMLConfig, getFromHTMLConfig } from 'configs/convert'
import keyBindingFn from 'configs/keybindings'
import defaultOptions from 'configs/options'
import { UniqueIndex } from 'utils/base'
import EditorController from 'controller'
import { getBlockRendererFn, customBlockRenderMap, blockStyleFn, getCustomStyleMap, decorators } from 'renderers'
import ControlBar from 'components/business/ControlBar'
import { detectColorsFromHTML, detectColorsFromRaw } from 'helpers/colors'

import ContentController from 'mixins/ContentController'
import MediaLibrary from 'mixins/MediaLibrary'

const editorDecorators = new CompositeDecorator(decorators)
const blockRenderMap = DefaultDraftBlockRenderMap.merge(customBlockRenderMap)

export default @MediaLibrary @ContentController class BraftEditor extends EditorController {

  static defaultProps = {
    ...defaultOptions,
    onChange: null,
    onFocus: null,
    onBlur: null,
    onSave: null
  }

  constructor (props) {

    super(props)

    const editorState = EditorState.createEmpty(editorDecorators)

    this.isFocused = false
    this.instanceIndex = UniqueIndex()

    this.state = {
      tempColors: [],
      editorState: editorState,
      contentState: editorState.getCurrentContent(),
      selectionState: editorState.getSelection(),
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

  onChange = (editorState) => {

    this.setState({
      editorState: editorState,
      contentState: editorState.getCurrentContent(),
      selectionState: editorState.getSelection()
    }, () => {
      this.props.onChange && this.props.onChange(editorState)
    })

  }

  isEmpty = () => {
    return this.getHTMLContent() === '<p></p>'
  }

  getDraftInstance = () => {
    return this.draftInstance
  }

  getMediaLibraryInstance = () => {
    return this.mediaLibrary
  }

  convertHTML = (htmlString) => {
    const { fontFamilies } = this.props
    return convertFromHTML(getFromHTMLConfig({ fontFamilies }))(htmlString)
  }

  getValue = () => {
    return this.state.editorState
  }

  setValue = (editorState) => {
    return this.onChange(editorState)
  }

  setEditorProps = (editorProps) => {

    this.setState({
      editorProps: {
        ...this.state.editorProps,
        ...editorProps
      }
    })

    return this

  }

  forceRender = () => {
    return this.setValue(EditorState.createWithContent(this.contentState, editorDecorators))
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

  handleKeyCommand = (command) => {

    if (command === 'braft-save') {
      this.props.onSave && this.props.onSave()
      return 'handled'
    }

    const nextEditorState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (nextEditorState) {
      this.onChange(nextEditorState)
      return 'handled'
    }

    return 'not-handled'

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

      if (this.props.forceNewLine) {
        event.which = 13
        event.getModifierState = () => true
      }

      const nextEditorState = handleNewLine(this.state.editorState, event)

      if (nextEditorState) {
        this.onChange(nextEditorState)
        return true
      }

      return false

    }

    return false

  }

  handleDrop = (selectionState, dataTransfer, isInternal) => {

    if (window.__BRAFT_DRAGING__IMAGE__) {

      this.removeBlock(window.__BRAFT_DRAGING__IMAGE__.block, selectionState)
      this.insertMedias([window.__BRAFT_DRAGING__IMAGE__.mediaData])

      window.__BRAFT_DRAGING__IMAGE__ = null
      this.setEditorProp('readOnly', false)
      return 'handled'

    } else if (!dataTransfer || !dataTransfer.getText()) {
      return 'handled'
    }

    return 'not-handled'

  }

  handleDroppedFiles = (selectionState, files) => {

    if (files[0] && files[0].type.indexOf('image') > -1 && this.props.media && this.props.media.allowPasteImage !== false) {
      this.mediaLibrary.uploadImage(files[0], image => this.insertMedias([image]))
      return 'handled'
    }

    return 'not-handled'

  }

  handlePastedFiles = (files) => {

    if (files[0] && files[0].type.indexOf('image') > -1 && this.props.media && this.props.media.allowPasteImage !== false) {
      this.mediaLibrary.uploadImage(files[0], image => this.insertMedias([image]))
      return 'handled'
    }

    return 'not-handled'

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
    const blockMap = convertFromHTML(getFromHTMLConfig({ fontFamilies }))(html || text).blockMap
    const nextContentState = Modifier.replaceWithFragment(this.contentState, this.selectionState, blockMap)

    this.setState({
      tempColors: [...this.state.tempColors, ...detectColorsFromHTML(html)].filter(item => this.props.colors.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
    }, () => {
      this.setValue(EditorState.push(this.state.editorState, nextContentState, 'insert-fragment'))
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
      fontSizes, fontFamilies, emojis, viewWrapper, placeholder, imageControls, lineHeights, letterSpacings, indents, textAlignOptions, allowSetTextBackgroundColor,
      extendAtomics
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

    viewWrapper = viewWrapper || `.BraftEditor-instance-${this.instanceIndex}`

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
      ref: instance => this.controlBarInstance = instance,
      media, controls, language, viewWrapper, extendControls, colors, tempColors, fontSizes, fontFamilies,
      emojis, lineHeights, letterSpacings, indents, textAlignOptions, allowSetTextBackgroundColor
    }

    const blockRendererFn = getBlockRendererFn({
      editor: this, imageControls,
      language, viewWrapper,
      extendAtomics
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
      handleDrop: this.handleDrop,
      handleDroppedFiles: this.handleDroppedFiles,
      handlePastedText: this.handlePastedText,
      handlePastedFiles: this.handlePastedFiles,
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
      <div className={`BraftEditor-container BraftEditor-instance-${this.instanceIndex} ${(disabled ? 'disabled' : '')}`}>
        <ControlBar {...controlBarProps} />
        <div className="BraftEditor-content" style={height ? { height } : {}}>
          <Editor {...editorProps} />
        </div>
      </div>
    )

  }

}