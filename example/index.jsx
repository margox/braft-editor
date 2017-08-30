import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'

const htmlContent = ''

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { htmlContent }
  }

  preview () {
    if (window.previewWindow) {
      window.previewWindow.close()
    }
    window.previewWindow = window.open()
    window.previewWindow.document.write(this.buildPreviewHtml())
  }

  uploadFn = (param) => {

    const xhr = new XMLHttpRequest
    const fd = new FormData()
    const mediaLibrary = this.editor.getMediaLibraryInstance()

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

  setContent = () => {
    this.editor.setContent('<h1>Hell<span style="color:#f32784;">o World!</span></h1>', 'html')
  }

  clearContent = () => {
    this.editor.setContent('', 'html')
  }

  render() {

    return (
      <div className="demo" id="demo">
        <BraftEditor
          height={600}
          viewWrapper={'#demo'}
          placeholder={"Hello World!"}
          ref={(instance) => this.editor = instance}
          initialContent={this.state.htmlContent}
          language="zh"
          onHTMLChange={this.handleHTMLChange}
          media={{
            uploadFn: this.uploadFn
          }}
          addonControls={[
            {
              type: 'split',
            },
            {
              type: 'button',
              text: '预览',
              className: 'preview-button',
              onClick: this.preview.bind(this)
            }
          ]}
        />
      </div>
    )

  }

  handleHTMLChange = (htmlContent) => {
    // console.log(htmlContent)
    this.setState({ htmlContent })
  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))