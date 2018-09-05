import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor, { EditorState } from '../src'
import { ContentUtils } from 'braft-utils'
// import '../dist/index.css'

class Demo extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      editorState: EditorState.createFrom()
    }
    this.editorInstance = null

  }

  componentDidMount () {

    setTimeout(() => {
      this.setState({
        editorState: EditorState.createFrom('<div class="media-wrap image-wrap"><img src="https://cdn.nlark.com/lark/0/2018/png/10/1534424612826-99094002-4037-4331-97dd-3f4772ef307b.png" /></div>')
      })
    }, 1000)

  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  insertText = (text) => {
    this.setState({
        editorState: ContentUtils.insertText(this.state.editorState, text)
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

    const controls = BraftEditor.defaultProps.controls.map(item => {
      return item === 'bold' ? {
        key: 'bold', // 使用key来指定控件类型
        title: '加粗选中文字哦', // 自定义控件title
        text: '点我加粗', // 使用自定义文案来代替默认图标(B)，此处也可传入jsx
      } : item
    })

    const extendControls = [
      {
        key: 'insert-123',
        type: 'button',
        text: 'Insert 123',
        onClick: () => {
          this.insertText('123')
        }
      }
    ]

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            hooks={this.hooks}
            controls={controls}
            extendControls={extendControls}
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