import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState, Modifier, RichUtils } from 'draft-js'
import { convertFromHTML, convertToHTML } from 'draft-convert'
import defaultOptions from 'configs/defaultOptions'
import styleMap from 'maps/styles'
import ControlBar from 'components/business/ControlBar'

/**
 * TODOS
 * 1. Link Editor, before Jul 09
 * 2. Font Size / Font Family / Text Aligns, before Jul 12
 * 3. Image Uploader, before Jul 20
 * 4. Video / Audio Uploader, before Jul 25
 * 5. Emoji Picker, before Jul 21
 * 6. Image Editor, before Aug 5
 */

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
      controls: controls || defaultOptions.controls
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