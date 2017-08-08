import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { CompositeDecorator, DefaultDraftBlockRenderMap, Editor, EditorState, Modifier, RichUtils } from 'draft-js'
import { convertFromHTML, convertToHTML } from 'draft-convert'
import defaultOptions from 'configs/options'
import decorators from 'decorators'
import blockStyles from 'configs/blockStyles'
import blockRenderers from 'configs/blockRenderers'
import inlineStyles from 'configs/inlineStyles'
import ControlBar from 'components/business/ControlBar'
import { Map } from 'immutable'

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(Map({
  'atomic': {
    element: ''
  }
}))

export default class BraftEditor extends React.Component {

  constructor(props) {

    super(props)

    this.onChange = this.onChange.bind(this)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.state = {
      editorState: EditorState.createEmpty(new CompositeDecorator(decorators))
    }

  }

  onChange(editorState) {
    this.setState({ editorState })
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
    let mediaConfig = { ...defaultOptions.media, ...media }
    if (!mediaConfig.uploadFn) {
      mediaConfig.video = false
      mediaConfig.audio = false
    }
    const controlBarProps = {
      onChange: this.onChange,
      editorState: this.state.editorState,
      controls: controls || defaultOptions.controls,
      media: mediaConfig
    }
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