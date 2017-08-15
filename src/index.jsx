import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import languages from 'languages'
import { CompositeDecorator, DefaultDraftBlockRenderMap, Editor, ContentState, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert'
import { getToHTMLConfig, getFromHTMLConfig } from 'configs/convert'
import defaultOptions from 'configs/options'
import { getBlockRendererFn, blockRenderMap, blockStyleFn, getCustomStyleMap, decorators } from 'renderers'
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
      editorState: initialEditorState,
      editorProps: {}
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

  setEditorProp (key, name) {
    let editorProps = {
      ...this.state.editorProps,
      [key]: name
    }
    this.setState({ editorProps })
  }

  forceRender () {

    const editorState = this.state.editorState
    const contentState = editorState.getCurrentContent()
    const newEditorState = EditorState.createWithContent(contentState, editorDecorators)

    this.setState({editorState: newEditorState})

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

    let { controls, height, media, addonControls, language } = this.props
    let contentState = this.state.editorState.getCurrentContent()
    let mediaConfig = { ...defaultOptions.media, ...media }

    language = languages[language] || languages['en']

    if (!mediaConfig.uploadFn) {
      mediaConfig.video = false
      mediaConfig.audio = false
    }

    const controlBarProps = {
      onChange: this.onChange,
      editorState: this.state.editorState,
      contentState: contentState,
      controls: controls || defaultOptions.controls,
      language: language,
      media: mediaConfig,
      addonControls: addonControls || []
    }

    const blockRendererFn = getBlockRendererFn({
      onChange: this.onChange,
      editorState: this.state.editorState,
      getEditorState: this.getEditorState.bind(this),
      contentState: contentState,
      language: language,
      forceRender: this.forceRender.bind(this),
      setEditorProp: this.setEditorProp.bind(this)
    })

    const editorProps = {
      ref: instance => this.draftInstance = instance,
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      onChange: this.onChange,
      customStyleMap: getCustomStyleMap(),
      blockRenderMap: extendedBlockRenderMap,
      blockStyleFn: blockStyleFn,
      blockRendererFn: blockRendererFn,
      ...this.state.editorProps
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