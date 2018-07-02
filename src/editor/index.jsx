import 'draft-js/dist/Draft.css'
import 'assets/scss/_base.scss'
import 'braft-finder/dist/index.css'
import React from 'react'
import languages from 'languages'
import BraftFinder from 'braft-finder'
import { BaseUtils, ColorUtils, ContentUtils } from 'braft-utils'
import { CompositeDecorator, DefaultDraftBlockRenderMap, Editor, ContentState, EditorState, RichUtils } from 'draft-js'
import { handleNewLine } from 'draftjs-utils'
import keyBindingFn from 'configs/keybindings'
import defaultProps from 'configs/props'
import { getBlockRendererFn, customBlockRenderMap, blockStyleFn, getCustomStyleMap, decorators } from 'renderers'
import ControlBar from 'components/business/ControlBar'

const editorDecorators = new CompositeDecorator(decorators)
const blockRenderMap = DefaultDraftBlockRenderMap.merge(customBlockRenderMap)

export default class BraftEditor extends React.Component {

  static defaultProps = defaultProps

  constructor (props) {

    super(props)

    this.isFocused = false
    this.editorIndex = BaseUtils.UniqueIndex()
    this.braftFinder = BraftFinder()
    this.state = {
      containerNode: null,
      tempColors: [],
      editorState: EditorState.createEmpty(editorDecorators),
      draftProps: {}
    }

  }

  onChange = (editorState) => {
    this.setState({ editorState }, () => {
      this.props.onChange && this.props.onChange(editorState)
    })
  }

  getDraftInstance = () => {
    return this.draftInstance
  }

  getFinderInstance = () => {
    return this.braftFinder
  }

  getValue = () => {
    return this.state.editorState
  }

  setValue = (editorState) => {
    return this.onChange(editorState)
  }

  forceRender = () => {
    return this.setValue(EditorState.createWithContent(this.state.editorState.getCurrentContent(), editorDecorators))
  }

  onTab = (event) => {

    if (ContentUtils.getSelectionBlockType(this.state.editorState) === 'code-block') {
      this.insertText(' '.repeat(this.props.tabIndents), false)
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

  requestFocus = () => {
    setTimeout(() => this.draftInstance.focus(), 0)
  }

  handleKeyCommand = (command) => {

    if (command === 'braft-save') {
      this.props.onSave && this.props.onSave()
      return 'handled'
    }

    const nextEditorState = ContentUtils.handleKeyCommand(this.state.editorState, command)

    if (nextEditorState) {
      this.setValue(nextEditorState)
      return 'handled'
    }

    return 'not-handled'

  }

  handleReturn = (event) => {

    const currentBlock = ContentUtils.getSelectionBlock(this.state.editorState)
    const currentBlockType = currentBlock.getType()

    if (currentBlockType === 'unordered-list-item' || currentBlockType === 'ordered-list-item') {

      if (currentBlock.getLength() === 0) {
        this.setValue(ContentUtils.toggleSelectionBlockType(this.state.editorState, 'unstyled'))
        return 'handled'
      }

      return 'not-handled'

    } else if (currentBlockType === 'code-block') {

      if (
        event.which === 13 && (
          event.getModifierState('Shift') ||
          event.getModifierState('Alt') ||
          event.getModifierState('Control')
        )) {
        this.setValue(ContentUtils.toggleSelectionBlockType(this.state.editorState, 'unstyled'))
        return 'handled'
      }

      return 'not-handled'

    } else {

      const nextEditorState = handleNewLine(this.state.editorState, event)

      if (nextEditorState) {
        this.setValue(nextEditorState)
        return 'handled'
      }

      return 'not-handled'

    }

    return false

  }

  handleDrop = (selectionState, dataTransfer, isInternal) => {

    if (window && window.__BRAFT_DRAGING__IMAGE__) {

      let editorState = ContentUtils.removeBlock(this.state.editorState, window.__BRAFT_DRAGING__IMAGE__.block, selectionState)
      editorState = ContentUtils.insertMedias(editorState, [window.__BRAFT_DRAGING__IMAGE__.mediaData])

      window.__BRAFT_DRAGING__IMAGE__ = null

      this.setDraftProps({ readOnly: false })
      this.setValue(editorState)

      return 'handled'

    } else if (!dataTransfer || !dataTransfer.getText()) {
      return 'handled'
    }

    return 'not-handled'

  }

  handleDroppedFiles = (selectionState, files) => {
    return this.resolveFiles(files)
  }

  handlePastedFiles = (files) => {
    return this.resolveFiles(files)
  }

  handlePastedText = (text, htmlString) => {

    if (!htmlString) {
      return false
    }

    const pasteMode = this.tmpPasteMode || this.props.pasteMode || 'normal'

    if (pasteMode === 'text') {
      this.tmpPasteMode = 'normal'
      const tmpTextHolder = document.createElement('div')
      tmpTextHolder.innerHTML = htmlString
      return this.handlePastedText(text, tmpTextHolder.textContent || tmpTextHolder.innerText || '')
    } else {
      this.tmpPasteMode = null
    }

    const tempColors = ColorUtils.detectColorsFromHTMLString(htmlString)

    this.setState({
      tempColors: [...this.state.tempColors, ...tempColors].filter(item => this.props.colors.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
    }, () => {
      this.setValue(ContentUtils.insertHTML(this.state.editorState, htmlString))
    })

    return true

  }

  resolveFiles = (files) => {

    if (files[0] && files[0].type.indexOf('image') > -1 && this.props.media && this.props.media.allowPasteImage !== false) {

      this.braftFinder.uploadImage(files[0], image => {
        this.setValue(ContentUtils.insertMedias(this.state.editorState, [image]))
      })
  
      return 'handled'

    }

    return 'not-handled'

  }

  undo = () => {
    this.setValue(EditorState.undo(this.state.editorState))
  }

  redo = () => {
    this.setValue(EditorState.redo(this.state.editorState))
  }

  render () {

    let {
      controls, excludeControls, extendControls, disabled, height, media, language, colors,
      fontSizes, fontFamilies, emojis, placeholder, imageControls, lineHeights, letterSpacings, indents, textAligns, disableTextBackgroundColor,
      extendAtomics
    } = this.props

    controls = controls.filter(item => excludeControls.indexOf(item) === -1)
    language = languages[language] || languages[defaultProps.language]

    const externalMedias = media && media.externalMedias ? {
      ...defaultProps.media.externalMedias,
      ...media.externalMedias
    } : defaultProps.media.externalMedias

    media = { ...defaultProps.media, ...media, externalMedias }

    imageControls = imageControls ? {
      ...defaultProps.imageControls,
      ...imageControls
    } : defaultProps.imageControls

    if (!media.uploadFn) {
      media.video = false
      media.audio = false
    }

    const controlBarProps = {
      editor: this,
      editorState: this.state.editorState,
      braftFinder: this.braftFinder,
      editorHeight: height,
      ref: instance => this.controlBarInstance = instance,
      containerNode: this.state.containerNode,
      colors: [...colors, ...this.state.tempColors],
      media, controls, language, extendControls, fontSizes, fontFamilies,
      emojis, lineHeights, letterSpacings, indents, textAligns, disableTextBackgroundColor
    }

    const blockRendererFn = getBlockRendererFn({
      editor: this,
      editorState: this.state.editorState,
      containerNode: this.state.containerNode,
      imageControls, language, extendAtomics
    })

    const customStyleMap = getCustomStyleMap({
      colors: [...colors, ...this.state.tempColors],
      fontSizes, fontFamilies, lineHeights, letterSpacings, indents
    })

    const draftProps = {
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
      ...this.props.draftProps,
      ...this.state.draftProps
    }

    return (
      <div ref={this.setEditorContainerNode} className={`BraftEditor-container BraftEditor-instance-${this.editorIndex} ${(disabled ? 'disabled' : '')}`}>
        <ControlBar {...controlBarProps} />
        <div className="BraftEditor-content" style={height ? { height } : {}}>
          <Editor {...draftProps} />
        </div>
      </div>
    )

  }

  setDraftProps (draftProps) {
    this.setState({
      draftProps: {
        ...this.state.draftProps,
        ...draftProps
      }
    })
  }

  setEditorContainerNode = (containerNode) => {
    this.setState({ containerNode })
  }

}