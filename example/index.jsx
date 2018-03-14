import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
 
class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contentId: 0,
      initialContent: '<p><span style="color:#0099ff;">Hello World!</span></p><hr/><p></p>',
      htmlContent: ''
    }
    this.editorInstance = null
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
    const mediaLibrary = this.editorInstance.getMediaLibraryInstance()

    const successFn = (response) => {
      param.success(JSON.parse(xhr.responseText)[0])
    }

    const progressFn = (event) => {
      param.progress(event.loaded / event.total * 100)
    }

    const errorFn = (response) => {
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

    const { htmlContent } = this.state

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

  setContent1 = () => {
    this.setState({
      contentId: 1,
      initialContent: '<h1>Hello World!</h1>'
    })
  }

  setContent2 = () => {
    this.setState({
      contentId: 2,
      initialContent: '<p>Hello World!</p><hr/><p>Hello Braft!</p>'
    })
  }

  render() {

    const extendControls = [
      {
        type: 'split',
      }, {
        type: 'button',
        className: 'preview-button',
        text: <span>预览</span>,
        onClick: this.preview
      }, {
        type: 'button',
        className: 'preview-button',
        text: <span>增加颜色</span>,
        onClick: () => {
          this.editorInstance.addTempColors(['#0099ae', '#0049ae', '#4099ae', '#00c9fe'])
        }
      }, {
        type: 'dropdown',
        width: 80,
        disabled: false,
        arrowActive: false,
        text: <span>下拉框</span>,
        html: '<span style="color:#0f0;">下拉框</span>',
        autoHide: false,
        ref: instance => window.customDropDown = instance,
        component: <h1 style={{width: 200, color: '#ffffff', padding: 10, margin: 0}}>Hello World!</h1>
      }, {
        type: 'modal',
        html: '<span style="color:#f00;">弹出框</span>',
        text: '弹出框',
        className: 'modal-button',
        modal: {
          id: 'test-modal',
          title: '这是一个弹出框',
          showClose: true,
          showCancel: true,
          showConfirm: true,
          confirmable: true,
          children: (
            <div style={{width: 480, height: 320, padding: 30}}>
              <span>Hello World!</span>
            </div>
          )
        }
      }
    ]

    const mediaProps = {
      // uploadFn: this.uploadFn,
      onChange: console.log,
      onRemove: console.log
    }

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            viewWrapper={'#demo'}
            placeholder={"Hello World!"}
            ref={instance => this.editorInstance = instance} 
            language="zh-hant"
            contentFormat='html'
            contentId={this.state.contentId}
            initialContent={this.state.initialContent}
            onChange={console.log}
            onHTMLChange={console.log}
            extendControls={extendControls}
            media={mediaProps}
            height={0}
            allowSetTextBackgroundColor={true}
          />
        </div>
        <div><a href="javascript:void(0);" onClick={this.setContent1}>设置内容1</a>&emsp;&emsp;<a href="javascript:void(0);" onClick={this.setContent2}>设置内容2</a></div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))