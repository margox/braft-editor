import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {
    CompositeDecorator, DefaultDraftBlockRenderMap, Editor, ContentState,
    EditorState, RichUtils, convertFromRaw, convertFromHTML, convertToRaw
} from 'draft-js'
import { convertToHTML } from 'draft-convert'
import defaultOptions from 'configs/options'
import decorators from 'decorators'
import { getBlockRenderers, blockRenderMap } from 'renderers'
import blockStyles from 'styles/blockStyles'
import inlineStyles from 'styles/inlineStyles'
import ControlBar from 'components/business/ControlBar'

const editorDecorators = new CompositeDecorator(decorators)
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap)

export default class BraftEditor extends React.Component {

  constructor(props) {

    super(props)

    let initialEditorState
    let { initialContent, contentFormat } = this.props

    contentFormat = contentFormat || 'html'
    initialContent = initialContent || ''

    if (!initialContent) {
      initialEditorState = EditorState.createEmpty(editorDecorators)
    } else {

      let convertedContent
      let initialContentState

      if (contentFormat === 'html') {
        convertedContent = convertFromHTML(initialContent)
      } else if (contentFormat === 'raw') {
        convertedContent = convertFromRaw(initialContent)
      }

      initialContentState = ContentState.createFromBlockArray(convertedContent.contentBlocks, convertedContent.entityMap)
      initialEditorState = EditorState.createWithContent(initialContentState, editorDecorators)

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

      if (this.readyForSync) {

        this.readyForSync = false

        let { onChange } = this.props

        if (typeof onChange === 'function') {
          onChange(this.getFormatedContent())
        }

        setTimeout(() => {
          this.readyForSync = true
        }, 100)

      }

    })
  
  }

  getFormatedContent (format) {

    format = format || this.props.contentFormat || 'html'
    const contentState = this.getContentState()

    if (format === 'html') {
      return convertToHTML(contentState)
    } else if (format === 'raw') {
      return convertToRaw(contentState)
    }

  }

  getContentState () {
    return this.state.editorState.getCurrentContent()
  }

  getEditorState () {
    return this.state.editorState
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

    const { controls, height, media } = this.props
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
      media: mediaConfig
    }

    const blockRenderers = getBlockRenderers({
      onChange: this.onChange,
      editorState: this.state.editorState,
      getEditorState: this.getEditorState.bind(this),
      contentState: contentState
    })

    const editorProps = {
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      onChange: this.onChange,
      customStyleMap: inlineStyles,
      blockRenderMap: extendedBlockRenderMap,
      blockStyleFn: blockStyles,
      blockRendererFn: blockRenderers
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