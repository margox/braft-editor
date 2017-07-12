import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { CompositeDecorator, Editor, EditorState, Modifier, RichUtils } from 'draft-js'
import { convertFromHTML, convertToHTML } from 'draft-convert'
import defaultOptions from 'configs/options'
import decorators from 'decorators'
import blockStyles from 'maps/blockStyles'
import inlineStyles from 'maps/inlineStyles'
import ControlBar from 'components/business/ControlBar'

/**
 * TODOS
 * 1. Image Uploader, before Jul 20
 * 2. Video / Audio Uploader, before Jul 25
 * 3. Emoji Picker, before Jul 21
 * 4. Image Editor, before Aug 5
 */

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

    const { controls, height } = this.props
    const controlBarProps = {
      onChange: this.onChange,
      editorState: this.state.editorState,
      controls: controls || defaultOptions.controls
    }
    const editorProps = {
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      onChange: this.onChange,
      customStyleMap: inlineStyles,
      blockStyleFn: blockStyles
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