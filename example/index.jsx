import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'

const htmlContent = '<p style="text-align:center;"><span style="color:#f32784;">百度一下你就惨了</span></p><p></p><p></p><div class="media-wrap image-wrap" style="text-align:center;"><a style="display:inline-block;" href="http://www.baidu.com/" target="_blank"><img src="https://margox.cn/wp-content/uploads/2017/05/IMG_4985-480x285.jpg" width="auto" height="auto"/></a></div><p></p>'

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
            .container img{
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

    return (
      <div className="demo">
        <BraftEditor
          height={600}
          ref={(instance) => this.editor = instance}
          initialContent={this.state.htmlContent}
          language="zh"
          contentFormat="html"
          onHTMLChange={this.handleHTMLChange}
          addonControls={[
            {
              type: 'split-line',
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
    console.log(htmlContent)
    this.setState({ htmlContent })
  }

  handleRawChange = (raw) => {
    console.log(raw)
  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))