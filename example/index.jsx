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
  }

  hooks = {
    'change-block-type': console.log,
    'insert-emoji': (fontSize) => {
      return '123'
    },
    'insert-medias': console.log,
    'exec-editor-command': console.log,
    'toggle-link': () => {
      return {
        href: 'http://www.baidu.com',
        target: '_blank'
      }
    }
  }

  render() {

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            hooks={this.hooks}
            onChange={this.handleChange}
            value={this.state.editorState}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))