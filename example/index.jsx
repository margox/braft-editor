import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import CustomAtomic from './CustomAtomic';

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contentId: 0,
      contentFormat: 'html',
      initialContent: ``,
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
      param.success({
        url: JSON.parse(xhr.responseText)[0].url,
        meta: {
          controls: true,
          loop: true,
          autoPlay: false,
          poster: 'https://www.baidu.com/img/bd_logo1.png?where=super'
        }
      })
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

    console.log(htmlContent)

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

  insertHTMLContent = () => {
    //this.editorInstance.insertHTML('<p><img src="https://cdn.dribbble.com/users/1224447/screenshots/4576582/800x600_1x.png" /></p><p>12312312312<a href="123123123">baidu.com</a></p><p>asdasdas<u><span style="text-decoration:line-through;"><strong>da<em><span style="font-size:32px;color:#fdda00;background-color:#07a9fe;">s</span>d</em>ad</strong>asdas</span></u>d</p>')
    this.editorInstance.insertHTML('<p><span style="color:#ff0000;">Hello World!</span></p>')
  }

  render() {

    const extendControls = [
      {
        type: 'split',
      }, {
        type: 'button',
        className: 'preview-button',
        text: <span>测试</span>,
        onClick:()=>{
          this.editorInstance.setContent('<p>asd<span style="font-size:14px;color:#8e44ad;background-color:#f32784;line-height:1.2;letter-spacing:6px;font-family:&quot;Courier New&quot;, Courier, monospace;">asdasdasdasdasd</span></span></span>asd</p>','html')
        }
      },{
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
          onCreate: modal => this.myModal = modal,
          children: (
            <div style={{width: 480, height: 320, padding: 30}}>
              <span>Hello World!</span>
            </div>
          )
        }
      }, {
        type: 'button',
        text: <span>添加自定义组件</span>,
        onClick: () => {
          this.editorInstance.insertMedias([{
            type: 'HELLO',
            name: 'BalBla',
          }]);
        }
      }
    ]

    const extendAtomics = [
      {
        mediaType: 'HELLO', 
        component: CustomAtomic
      },
    ]

    const mediaProps = {
      onRemove: console.log,
      removeConfirmFn: (param) => {
        if (confirm('确认删除所选项目么?')) {
          param.confirm()
        }
      }
    }

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            initialContent={this.state.initialContent}
            onHTMLChange={htmlContent => this.setState({ htmlContent })}
            contentFormat='html'
            ref={instance => this.editorInstance = instance}
            extendControls={extendControls}
            extendAtomics={extendAtomics}
          />
        </div>
        <div><a href="javascript:void(0);" onClick={this.insertHTMLContent}>插入HTML片段</a></div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))