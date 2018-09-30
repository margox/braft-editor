import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import { ContentUtils } from 'braft-utils'

const customStyleMap = {
  'UNDERDOT': {
    textDecoration: 'underline'
  }
}

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState()
    }

  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  toggleUnderDot = () => {
    this.setState({
      editorState: ContentUtils.toggleSelectionInlineStyle(this.state.editorState, 'UNDERDOT')
    })
  }

  uploadFn = (param) => {

    const xhr = new XMLHttpRequest
    const fd = new FormData()

    const successFn = () => {
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

    const errorFn = () => {
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

  render() {

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            extendControls={[
              {
                key: 'underdot',
                type: 'button',
                text: '着重号',
                onClick: this.toggleUnderDot
              }
            ]}
            customStyleMap={customStyleMap}
            onChange={this.handleChange}
            value={this.state.editorState}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))