import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      initialContent: 'hello world!',
      htmlContent: '',
    }
  }

  preview = () => {
    if (window.previewWindow) {
      window.previewWindow.close()
    }
    window.previewWindow = window.open()
    window.previewWindow.document.write(this.buildPreviewHtml())
  }

  uploadFn = (param) => {

    const xhr = new XMLHttpRequest
    const fd = new FormData()
    const mediaLibrary = window.editor.getMediaLibraryInstance()

    const successFn = (response) => {
      param.success(JSON.parse(xhr.responseText)[0])
    }

    const progressFn = (event) => {
      param.progress(event.loaded / event.total * 100)
    }

    const errorFn = (response) => {
      // 自动从媒体库移除上传失败的内容
      param.error({
        msg: 'unable to upload.'
      })
    }

    xhr.upload.addEventListener("progress", progressFn, false)
    xhr.addEventListener("load", successFn, false)
    xhr.addEventListener("error", errorFn, false)
    xhr.addEventListener("abort", errorFn, false)

    fd.append('file', param.file)
    xhr.open('POST', 'http://localhost:9090', true)
    xhr.send(fd)

  }

  validateFn = (file) => {
    return file.size <= 1024 * 100
  }

  buildPreviewHtml () {

    const htmlContent = window.editor.getHTMLContent()

    return `
      <!Doctype html>
      <html>
        <head>
          <title>内容预览</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
          </style>
        </head>
        <body>
            <div class="container">${htmlContent}</div>
        </body>
      </html>
    `

  }

  render() {

    const extendControls = [
      {
        type: 'split',
      }, {
        type: 'button',
        text: '预览',
        className: 'preview-button',
        onClick: this.preview
      }, {
        type: 'dropdown',
        width: 80,
        text: <span>下拉菜单</span>,
        component: <h1 style={{width: 200, color: '#ffffff', padding: 10, margin: 0}}>Hello World!</h1>
      }, {
        type: 'modal',
        text: '弹出框',
        className: 'modal-button',
        modal: {
          title: '这是一个弹出框',
          showClose: true,
          showCancel: true,
          showConfirm: true,
          confirmable: true,
          onConfirm: () => console.log(1),
          onCancel: () => console.log(2),
          onClose: () => console.log(3),
          children: (
            <div style={{width: 480, height: 320, padding: 30}}>
              <span>Hello World！</span>
            </div>
          )
        }
      }
    ]

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            height={400}
            viewWrapper={'#demo'}
            placeholder={"Hello World!"}
            ref={(instance) => window.editor = instance} 
            language="zh"
            media={{
              // uploadFn: this.uploadFn,
              // validateFn: this.validateFn
              externalMedias: {
                image: false
              }
            }}
            imageControls={{
              floatLeft: false,
              floatRight: false
            }}
            contentFormat="html"
            initialContent={this.state.initialContent}
            extendControls={extendControls}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))