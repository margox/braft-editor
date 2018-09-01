import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
// import '../dist/index.css'

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

  uploadFn = (param) => {

    const xhr = new XMLHttpRequest
    const fd = new FormData()

    const successFn = (response) => {
      param.success({
        url: JSON.parse(xhr.responseText)[0].url,
        meta: {
          controls: true,
          loop: true,
          autoPlay: false,
        }
      })
    }

    const progressFn = (event) => {
      param.progress(event.loaded / event.total * 100)
    }

    const errorFn = (response) => {
      param.error({
        msg: "unable to upload."
      })
    }

    xhr.upload.addEventListener("progress", progressFn, false)
    xhr.addEventListener("load", successFn, false)
    xhr.addEventListener("error", errorFn, false)
    xhr.addEventListener("abort", errorFn, false)

    fd.append("file", param.file)
    xhr.open("POST", "http://localhost:9090", true)
    xhr.send(fd)

  }

  hooks = {
    'change-block-type': console.log,
    'insert-emoji': (fontSize) => {
      return '123'
    },
    'insert-medias': console.log,
    'exec-editor-command': console.log,
    'select-medias': console.log,
    'remove-medias': (medias) => {
      return [medias[0]]
    },
    'deselect-medias': console.log,
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
            media={{
              // uploadFn: this.uploadFn
            }}
            onChange={this.handleChange}
            value={this.state.editorState}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))