import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'

const sampleContent = {
  "entityMap":{
    "0":{
      "type":"IMAGE",
      "mutability":"IMMUTABLE",
      "data":{
        "url":"http://image.uisdc.com/wp-content/uploads/2017/07/0-W81JP9zOSFNIBElV.jpg",
        "name":"music_player_ui.png",
        "type":"IMAGE",
        "float":"left"
      }
    },
    "1":{
      "type":"LINK",
      "mutability":"MUTABLE",
      "data":{
        "href":"adasdasd",
        "target":"_blank"
      }
    },
    "2":{
      "type":"IMAGE",
      "mutability":"IMMUTABLE",
      "data":{
        "url":"http://image.uisdc.com/wp-content/uploads/2017/07/0-W81JP9zOSFNIBElV.jpg",
        "name":"music.png",
        "type":"IMAGE",
        "float":"left"
      }
    }
  },
  "blocks":[
    {
      "key":"oica",
      "text":"",
      "type":"unstyled",
      "depth":0,
      "inlineStyleRanges":[],
      "entityRanges":[],
      "data":{

      }
    },{
      "key":"3e8f5",
      "text":" ",
      "type":"atomic",
      "depth":0,
      "inlineStyleRanges":[],
      "entityRanges":[
        {
          "offset":0,
          "length":1,
          "key":0
        }
      ],
      "data":{

      }
    },
    {
      "key":"6ruji",
      "text":"",
      "type":"unstyled",
      "depth":0,
      "inlineStyleRanges":[],
      "entityRanges":[],
      "data":{

      }
    },
    {
      "key":"94uiq",
      "text":"Hello world!",
      "type":"unstyled",
      "depth":0,
      "inlineStyleRanges":
      [
        {
          "offset":0,
          "length":12,
          "style":"BOLD"
        }
      ],
      "entityRanges":[
        {
          "offset":0,
          "length":12,
          "key":1
        }
      ],
      "data":{

      }
    },
    {
      "key":"22o82",
      "text":"",
      "type":"unstyled",
      "depth":0,
      "inlineStyleRanges":[],
      "entityRanges":[],
      "data":{

      }
    },
    {
      "key":"damgf",
      "text":" ",
      "type":"atomic",
      "depth":0,
      "inlineStyleRanges":[],
      "entityRanges":[
        {
          "offset":0,
          "length":1,
          "key":2
        }
      ],
      "data":{

      }
    },
    {
      "key":"82laq",
      "text":"",
      "type":"unstyled",
      "depth":0,
      "inlineStyleRanges":[],
      "entityRanges":[],
      "data":{

      }
    }
  ]
}

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  preview () {
    if (window.previewWindow) {
      window.previewWindow.close()
    }
    window.previewWindow = window.open()
    window.previewWindow.document.write(this.buildPreviewHtml())
  }

  buildPreviewHtml () {

    const content = this.editor.getHTMLContent()

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
            <div class="container">${content}</div>
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
          initialContent={this.state.content}
          language="en"
          onChange={this.handleChange}
          colors={[
            '#000', '#f00', '#0f0', '#00f'
          ]}
          fontSizes={[12, 14, 16, 18]}
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

  handleChange  = (content) => {
    // console.log(this.editor.getHTMLContent())
  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))