import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import { ContentUtils } from 'braft-utils'
// import '../dist/index.css'

const mediaItems = [
  {
    id: 1,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2018/09/IMG_9508.jpg'
  }, {
    id: 2,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
  }, {
    id: 3,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4984-480x267.jpg'
  }, {
    id: 4,
    type: 'AUDIO',
    url: 'https://margox.cn/wp-content/uploads/2016/10/Jesper-Kyd-Venice-Rooftops.mp3'
  }, {
    id: 5,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2016/02/DSC_6961-980x654.jpg'
  }
]

class Demo extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      editorState: BraftEditor.createEditorState('<p><span style="color:#0098aa;">123123123</span></p>')
    }
    this.editorInstance = null

  }

  handleChange = (editorState) => {
    console.log(editorState)
    this.setState({ editorState })
  }

  insertText = (text) => {
    this.setState({
      editorState: BraftEditor.createEditorState('<p><span style="color:#ff98ae;">aaaaa</span></p>')//ContentUtils.insertText(this.state.editorState, text)
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
        key: 'custom-button',
        type: 'button',
        text: '按钮',
        onClick: () => {
          this.insertText('123')
        }
      }, {
        key: 'custom-dropdown',
        type: 'dropdown',
        text: '下拉组件',
        component: <div style={{color: '#fff', padding: 10}}>你好啊！</div>
      }, {
        key: 'custom-modal',
        type: 'modal',
        text: '模态框',
        modal: {
          id: 'my-moda-1',
          title: '你好啊',
          component: (
            <div style={{width: 400, padding: '0 10px'}}>
              <img src="https://margox.cn/wp-content/uploads/2018/09/IMG_9508.jpg" style={{width: '100%', height: 'auto'}}/>
            </div>
          )
        }
        
      }
    ]

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            media={{
              items: mediaItems
            }}
            hooks={this.hooks}
            controls={controls}
            extendControls={extendControls}
            onChange={this.handleChange}
            value={this.state.editorState}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))