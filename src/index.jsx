import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { CompositeDecorator, DefaultDraftBlockRenderMap, Editor, ContentState, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert'
import { getToHTMLConfig, getFromHTMLConfig } from 'configs/convert'
import defaultOptions from 'configs/options'
import { getBlockRendererFn, blockRenderMap, blockStyleFn, customStyleMap, decorators } from 'renderers'
import ControlBar from 'components/business/ControlBar'

const editorDecorators = new CompositeDecorator(decorators)
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap)

export default class BraftEditor extends React.Component {

  constructor(props) {

    super(props)

    let initialEditorState
    let { initialContent, contentFormat } = this.props

    contentFormat = contentFormat || 'raw'
    initialContent = initialContent || ''

    if (!initialContent) {
      initialEditorState = EditorState.createEmpty(editorDecorators)
    } else {

      let convertedContent

      if (contentFormat === 'html') {
        convertedContent = convertFromHTML(initialContent)
      } else if (contentFormat === 'raw') {
        convertedContent = convertFromRaw(initialContent)
      }

      initialEditorState = EditorState.createWithContent(convertedContent, editorDecorators)

    }

    this.onChange = this.onChange.bind(this)
    this.readyForSync = true
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.state = {
      editorState: initialEditorState
    }

  }

  onChange(editorState) {

    this.setState({ editorState }, () => {
      clearTimeout(this.syncTimer)
      this.syncTimer = setTimeout(() => {
        let { onChange } = this.props
        typeof onChange === 'function' && onChange(this.getContent())
      }, 300)
    })

  }

  getHTMLContent () {
    return this.getContent('html')
  }

  getRawContent () {
    return this.getContent('raw')
  }

  getContent (format) {
    format = format || this.props.contentFormat || 'raw'
    const contentState = this.getContentState()
    return format === 'html' ? convertToHTML(getToHTMLConfig(contentState))(contentState) : convertToRaw(this.getContentState())
  }

  getContentState () {
    return this.getEditorState().getCurrentContent()
  }

  getEditorState () {
    return this.state.editorState
  }

  getDraftInstance () {
    return this.draftInstance
  }

  handleKeyCommand(command) {

    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (newState) {
      this.onChange(newState)
      return 'handled'
    }

    return 'not-handled'

  }

  render() {

    const { controls, height, media, addonControls } = this.props
    let contentState = this.state.editorState.getCurrentContent()
    let mediaConfig = { ...defaultOptions.media, ...media }

    if (!mediaConfig.uploadFn) {
      mediaConfig.video = false
      mediaConfig.audio = false
    }

    const controlBarProps = {
      onChange: this.onChange,
      editorState: this.state.editorState,
      contentState: contentState,
      controls: controls || defaultOptions.controls,
      media: mediaConfig,
      addonControls: addonControls || []
    }

    const blockRendererFn = getBlockRendererFn({
      onChange: this.onChange,
      editorState: this.state.editorState,
      getEditorState: this.getEditorState.bind(this),
      contentState: contentState
    })

    const editorProps = {
      ref: instance => this.draftInstance = instance,
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      onChange: this.onChange,
      customStyleMap: customStyleMap,
      blockRenderMap: extendedBlockRenderMap,
      blockStyleFn: blockStyleFn,
      blockRendererFn: blockRendererFn
    }

    return (
      <div className="BraftEditor-container">
        <ControlBar {...controlBarProps}/>
        <div
          className="BraftEditor-content"
          style = {{height: height|| defaultOptions.height}}
        >
          <Editor {...editorProps}/>
        </div>
      </div>
    )
  }

}