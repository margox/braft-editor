import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor, { EditorState } from '../src'

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editorState: null
    }
    this.editorInstance = null
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
    console.log(editorState.getHTML())
  }

  render() {

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            onChange={this.handleChange}
            value={this.state.editorState}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))