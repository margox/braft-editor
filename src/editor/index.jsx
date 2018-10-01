import 'draft-js/dist/Draft.css'
import 'assets/scss/_base.scss'
import React from 'react'
import languages from 'languages'
import BraftFinder from 'braft-finder'
import { ColorUtils, ContentUtils } from 'braft-utils'
import { CompositeDecorator, DefaultDraftBlockRenderMap, Editor } from 'draft-js'
import getKeyBindingFn from 'configs/keybindings'
import { keyCommandHandlers, returnHandlers, beforeInputHandlers, dropHandlers, droppedFilesHandlers, pastedFilesHandlers, pastedTextHandlers } from 'configs/handlers'
import defaultProps from 'configs/props'
import { getBlockRendererFn, customBlockRenderMap, getBlockStyleFn, getCustomStyleMap, getCustomStyleFn, decorators } from 'renderers'
import ControlBar from 'components/business/ControlBar'

const buildHooks= (hooks) => (hookName, defaultReturns = {}) => {
  return hooks[hookName] || (() => defaultReturns)
}

const filterColors = (colors, colors2) => {
  return colors.filter(item => colors2.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
}

const getConvertOptions = ({ fontFamilies, unitExportFn, entityExportFn, styleExportFn, blockExportFn }) => ({ fontFamilies, unitExportFn, entityExportFn, styleExportFn, blockExportFn })

export const editorDecorators = new CompositeDecorator(decorators)

export default class BraftEditor extends React.Component {

  static defaultProps = defaultProps

  constructor (props) {

    super(props)

    this.isFocused = false
    this.blockRenderMap = DefaultDraftBlockRenderMap.merge(customBlockRenderMap)

    this.isLiving = false
    this.braftFinder = null

    const defaultEditorState = ContentUtils.isEditorState(props.defaultValue || props.value) ? (props.defaultValue || props.value) : ContentUtils.createEmptyEditorState(editorDecorators)
    defaultEditorState.setConvertOptions(getConvertOptions(props))

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

    const { value: editorState } = this.props

    if (ContentUtils.isEditorState(editorState)) {

      const tempColors = ColorUtils.detectColorsFromDraftState(editorState.toRAW(true))
      editorState.setConvertOptions(getConvertOptions(this.props))

      this.setState({
        tempColors: filterColors([...this.state.tempColors, ...tempColors], this.props.colors),
        editorState: editorState
      })

    }

    this.isLiving = true

  }

  componentDidUpdate (_, prevState) {

    if (prevState.editorState !== this.state.editorState) {
      this.state.editorState.setConvertOptions(getConvertOptions(this.props))
    }

  }

  componentWillReceiveProps (nextProps) {

    const { value: editorState, media } = nextProps

    if (media && media.items && this.braftFinder) {
      this.braftFinder.setItems(media.items)
    }

    if (ContentUtils.isEditorState(editorState)) {

      if (editorState !== this.state.editorState) {

        const tempColors = ColorUtils.detectColorsFromDraftState(editorState.toRAW(true))
        editorState.setConvertOptions(getConvertOptions(nextProps))

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

  onChange = (editorState, callback) => {
    this.setState({ editorState }, () => {
      this.props.onChange && this.props.onChange(editorState)
      callback && callback(editorState)
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

  setValue = (editorState, callback) => {
    return this.onChange(editorState, callback)
  }

  forceRender = () => {
    return this.setValue(ContentUtils.createEditorState(this.state.editorState.getCurrentContent(), editorDecorators))
  }

  onTab = (event) => {

    if (keyCommandHandlers('tab', this.state.editorState, this) === 'handled') {
      event.preventDefault()
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

  handleKeyCommand = (command, editorState) => keyCommandHandlers(command, editorState, this)

  handleReturn = (event, editorState) => returnHandlers(event, editorState, this)

  handleBeforeInput = (chars, editorState) => beforeInputHandlers(chars, editorState, this)

  handleDrop = (selectionState, dataTransfer) => dropHandlers(selectionState, dataTransfer, this)

  handleDroppedFiles = (selectionState, files) => droppedFilesHandlers(selectionState, files, this)

  handlePastedFiles = (files) => pastedFilesHandlers(files, this)

  handlePastedText = (text, html, editorState) => pastedTextHandlers(text, html, editorState, this)

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
    this.setValue(ContentUtils.clear(this.state.editorState), (editorState) => {
      this.setValue(ContentUtils.toggleSelectionIndent(editorState, 0))
    })
  }

  render () {

    let {
      controls, excludeControls, extendControls, disabled, media, language, customLanguageFn, colors, hooks,
      unitExportFn, fontSizes, fontFamilies, emojis, placeholder, imageControls, lineHeights, letterSpacings, textAligns, textBackgroundColor,
      extendAtomics, className, style, controlBarClassName, controlBarStyle, contentClassName, contentStyle, stripPastedStyles, componentBelowControlBar
    } = this.props

    hooks = buildHooks(hooks)
    controls = controls.filter(item => excludeControls.indexOf(item) === -1)
    language = languages[language] || languages[defaultProps.language]
    language = customLanguageFn ? customLanguageFn(language, languages) : customLanguageFn

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
      emojis, lineHeights, letterSpacings, textAligns, textBackgroundColor
    }

    const blockRendererFn = getBlockRendererFn({
      editor: this, hooks,
      editorState: this.state.editorState,
      containerNode: this.state.containerNode,
      imageControls, language, extendAtomics
    }, this.props.blockRendererFn)
    const blockRenderMap = this.props.blockRenderMap ? this.blockRenderMap.merge(this.props.blockRenderMap) : this.blockRenderMap
    const blockStyleFn = getBlockStyleFn(this.props.blockStyleFn)
    const customStyleMap = getCustomStyleMap(this.props.customStyleMap)
    const customStyleFn = getCustomStyleFn({ fontFamilies, unitExportFn, customStyleFn: this.props.customStyleFn })

    const keyBindingFn = getKeyBindingFn(this.props.keyBindingFn)

    const draftProps = {
      ref: instance => { this.draftInstance = instance },
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      handleReturn: this.handleReturn,
      handleBeforeInput: this.handleBeforeInput,
      handleDrop: this.handleDrop,
      handleDroppedFiles: this.handleDroppedFiles,
      handlePastedText: this.handlePastedText,
      handlePastedFiles: this.handlePastedFiles,
      onChange: this.onChange,
      onTab: this.onTab,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      readOnly: disabled,
      blockRenderMap, blockRendererFn, blockStyleFn,
      customStyleMap, customStyleFn,
      keyBindingFn, placeholder, stripPastedStyles,
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