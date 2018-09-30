import 'draft-js/dist/Draft.css'
import 'assets/scss/_base.scss'
import React from 'react'
import languages from 'languages'
import BraftFinder from 'braft-finder'
import { ColorUtils, ContentUtils } from 'braft-utils'
import { CompositeDecorator, DefaultDraftBlockRenderMap, Editor } from 'draft-js'
import getKeyBindingFn from 'configs/keybindings'
import defaultProps from 'configs/props'
import { getBlockRendererFn, customBlockRenderMap, getBlockStyleFn, getCustomStyleMap, getCustomStyleFn, decorators } from 'renderers'
import ControlBar from 'components/business/ControlBar'

const buildHooks= (hooks) => (hookName, defaultReturns = {}) => {
  return hooks[hookName] || (() => defaultReturns)
}

const filterColors = (colors, colors2) => {
  return colors.filter(item => colors2.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
}

export const editorDecorators = new CompositeDecorator(decorators)

export default class BraftEditor extends React.Component {

  static defaultProps = defaultProps

  constructor (props) {

    super(props)

    this.isFocused = false
    this.keyBindingFn = getKeyBindingFn(props.customKeyBindingFn)
    this.blockStyleFn = getBlockStyleFn(props.blockStyleFn)
    this.blockRenderMap = DefaultDraftBlockRenderMap.merge(customBlockRenderMap)

    if (props.blockRenderMapFn) {
      this.blockRenderMap = props.blockRenderMapFn(this.blockRenderMap)
    }

    this.isLiving = false
    this.braftFinder = null

    const defaultEditorState = ContentUtils.isEditorState(props.defaultValue || props.value) ? (props.defaultValue || props.value) : ContentUtils.createEmptyEditorState(editorDecorators)

    defaultEditorState.setConvertOptions({
      fontFamilies: this.props.fontFamilies,
      unitExportFn: this.props.unitExportFn
    })

    this.state = {
      containerNode: null,
      tempColors: [],
      editorState: defaultEditorState,
      draftProps: {}
    }

  }

  componentWillMount () {

    const { language, media, controls, extendControls } = this.props
    const { uploadFn, validateFn, items } = { ...defaultProps.media, ...media }

    if ([...controls, ...extendControls].find(item => item === 'media' || item.key === 'media')) {
      this.braftFinder = new BraftFinder({
        items: items,
        language: language,
        uploader: uploadFn,
        validator: validateFn
      })
      this.forceUpdate()
    }

  }

  componentDidMount () {

    const { value: editorState, fontFamilies, unitExportFn } = this.props

    if (ContentUtils.isEditorState(editorState)) {

      const tempColors = ColorUtils.detectColorsFromDraftState(editorState.toRAW(true))
      editorState.setConvertOptions({ fontFamilies, unitExportFn })

      this.setState({
        tempColors: filterColors([...this.state.tempColors, ...tempColors], this.props.colors),
        editorState: editorState
      })

    }

    this.isLiving = true

  }

  componentDidUpdate (_, prevState) {

    if (prevState.editorState !== this.state.editorState) {
      this.state.editorState.setConvertOptions({
        fontFamilies: this.props.fontFamilies,
        unitExportFn: this.props.unitExportFn
      })
    }

  }

  componentWillReceiveProps (nextProps) {

    const { value: editorState, media, fontFamilies, unitExportFn } = nextProps

    if (media && media.items && this.braftFinder) {
      this.braftFinder.setItems(media.items)
    }

    if (ContentUtils.isEditorState(editorState)) {

      if (editorState !== this.state.editorState) {

        const tempColors = ColorUtils.detectColorsFromDraftState(editorState.toRAW(true))
        editorState.setConvertOptions({ fontFamilies, unitExportFn })

        this.setState({
          tempColors: filterColors([...this.state.tempColors, ...tempColors], this.props.colors),
          editorState: editorState
        })

      } else {
        this.setState({ editorState })
      }

    }

  }

  componentWillUnmount () {
    this.isLiving = false
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
    return this.setValue(ContentUtils.createEditorState(this.state.editorState.getCurrentContent(), editorDecorators))
  }

  onTab = (event) => {

    if (ContentUtils.getSelectionBlockType(this.state.editorState) === 'code-block') {
      this.setValue(ContentUtils.insertText(this.state.editorState, ' '.repeat(this.props.tabIndents)))
      event.preventDefault()
      return false
    }

    this.props.onTab && this.props.onTab(event)

  }

  onFocus = () => {
    this.isFocused = true
    this.props.onFocus && this.props.onFocus(this.state.editorState)
  }

  onBlur = () => {
    this.isFocused = false
    this.props.onBlur && this.props.onBlur(this.state.editorState)
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

      const nextEditorState = ContentUtils.handleNewLine(this.state.editorState, event)

      if (nextEditorState) {
        this.setValue(nextEditorState)
        return 'handled'
      }

      return 'not-handled'

    }

  }

  handleDrop = (selectionState, dataTransfer) => {

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

  handleDroppedFiles = (_, files) => {
    return this.resolveFiles(files)
  }

  handlePastedFiles = (files) => {
    return this.resolveFiles(files)
  }

  handlePastedText = (_, htmlString) => {

    if (!htmlString || this.props.stripPastedStyles) {
      return false
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

    const { pasteImage } = { ...defaultProps.media, ...this.props.media }

    pasteImage && files.slice(0, 5).forEach((file) => {

      file && file.type.indexOf('image') > -1 && this.braftFinder.uploadImage(file, image => {
        this.isLiving && this.setValue(ContentUtils.insertMedias(this.state.editorState, [image]))
      })

    })

    if (files[0] && files[0].type.indexOf('image') > -1 && pasteImage) {
      return 'handled'
    }

    return 'not-handled'

  }

  undo = () => {
    this.setValue(ContentUtils.undo(this.state.editorState))
  }

  redo = () => {
    this.setValue(ContentUtils.redo(this.state.editorState))
  }

  removeSelectionInlineStyles = () => {
    this.setValue(ContentUtils.removeSelectionInlineStyles(this.state.editorState))
  }

  insertHorizontalLine = () => {
    this.setValue(ContentUtils.insertHorizontalLine(this.state.editorState))
  }

  clearEditorContent = () => {
    this.setValue(ContentUtils.clear(this.state.editorState))
  }

  render () {

    let {
      controls, excludeControls, extendControls, disabled, media, language, colors, hooks,
      unitExportFn, fontSizes, fontFamilies, emojis, placeholder, imageControls, lineHeights, letterSpacings, textIndents, textAligns, textBackgroundColor,
      extendAtomics, className, style, controlBarClassName, controlBarStyle, contentClassName, contentStyle, stripPastedStyles, componentBelowControlBar
    } = this.props

    hooks = buildHooks(hooks)
    controls = controls.filter(item => excludeControls.indexOf(item) === -1)
    language = languages[language] || languages[defaultProps.language]

    const externalMedias = media && media.externals ? {
      ...defaultProps.media.externals,
      ...media.externals
    } : defaultProps.media.externals

    const accepts = media && media.accepts ? {
      ...defaultProps.media.accepts,
      ...media.accepts
    } : defaultProps.media.accepts

    media = { ...defaultProps.media, ...media, externalMedias, accepts }

    if (!media.uploadFn) {
      media.video = false
      media.audio = false
    }

    const controlBarProps = {
      editor: this,
      editorState: this.state.editorState,
      braftFinder: this.braftFinder,
      ref: instance => this.controlBarInstance = instance,
      containerNode: this.state.containerNode,
      className: controlBarClassName,
      style: controlBarStyle, hooks,
      colors: [...colors, ...this.state.tempColors],
      media, controls, language, extendControls, fontSizes, fontFamilies,
      emojis, lineHeights, letterSpacings, textIndents, textAligns, textBackgroundColor
    }

    const blockRendererFn = getBlockRendererFn({
      editor: this, hooks,
      editorState: this.state.editorState,
      containerNode: this.state.containerNode,
      imageControls, language, extendAtomics
    }, this.props.blockRendererFn)

    const customStyleMap = getCustomStyleMap(this.props.customStyleMap)
    const customStyleFn = getCustomStyleFn({ fontFamilies, unitExportFn, customStyleFn: this.props.customStyleFn })

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
      blockRenderMap: this.blockRenderMap,
      blockStyleFn: this.blockStyleFn,
      keyBindingFn: this.keyBindingFn,
      customStyleMap, customStyleFn,
      blockRendererFn,
      placeholder, stripPastedStyles,
      ...this.props.draftProps,
      ...this.state.draftProps
    }

    return (
      <div ref={this.setEditorContainerNode} className={`bf-container ${className} ${(disabled ? 'disabled' : '')}`} style={style}>
        <ControlBar {...controlBarProps} />
        {componentBelowControlBar}
        <div className={`bf-content ${contentClassName}`} style={contentStyle}>
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
    this.setState({ containerNode }, this.forceRender)
  }

}