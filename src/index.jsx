import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState, Modifier, RichUtils } from 'draft-js'
import { convertFromHTML, convertToHTML } from 'draft-convert'
import defaultConfigs from 'configs/default'
import styleMap from 'maps/styles'
import ControlBar from 'components/business/ControlBar'

export default class BraftEditor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.onChange = this.onChange.bind(this)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
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

    const { controls } = this.props
    const controlBarProps = {
      onChange: this.onChange,
      editorState: this.state.editorState,
      controls: controls || defaultConfigs.controls
    }
    const editorProps = {
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      onChange: this.onChange,
      customStyleMap: styleMap
    }

    return (
      <div className="BraftEditor-container">
        <ControlBar {...controlBarProps}/>
        <Editor {...editorProps}/>
      </div>
    )
  }

}