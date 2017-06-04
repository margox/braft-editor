// import assets files
import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'

// import dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState, Modifier, RichUtils } from 'draft-js'

// import components
import ControlBar from 'components/ControlBar'

export default class BraftEditor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
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

    const props = {
      onChange: ::this.onChange,
      editorState: this.state.editorState,
      controls: ['strikethrough', 'bold', 'superscript', 'subscript', 'italic', 'underline']
    }

    return (
      <div className="BraftEditor-container">
        <ControlBar {...props} />
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={::this.handleKeyCommand}
          onChange={::this.onChange}
        />
      </div>
    )
  }

}