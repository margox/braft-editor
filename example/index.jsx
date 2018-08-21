import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor, { EditorState } from '../src'

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createFrom(`<p>Hello, <b>World!</b></p>`)
    }
    this.editorInstance = null
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            onChange={this.handleChange}
            defaultValue={EditorState.createFrom(`<p>Hello, <b>World!</b></p>`)}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))