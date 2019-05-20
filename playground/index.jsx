import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import ColorPicker from 'braft-extensions/dist/color-picker'
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon'

import 'braft-extensions/dist/emoticon.css'
import 'braft-extensions/dist/color-picker.css'

const emoticons = defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`))

BraftEditor.use([
  Emoticon({
    emoticons: emoticons
  }),
  ColorPicker({
    theme: 'dark'
  })
])

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      count: 0,
      readOnly: false,
      editorState: BraftEditor.createEditorState(123123131231231231)
    }

  }

  handleChange = (editorState) => {
    console.log('change')
    this.setState({ editorState })
  }

  logHTML = () => {
    console.log(this.state.editorState.toHTML())
  }

  render() {

    const { readOnly, editorState } = this.state

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            extendControls={[{
              key: 'log-html',
              type: 'button',
              text: 'Log HTML',
              // disabled: true,
              onClick: this.logHTML,
            }, {
              key: 'my-modal',
              type: 'modal',
              text: 'modal',
              // disabled: true,
              modal: {
                id: 'a',
                closeOnBlur: true,
                confirmable: true,
                closeOnConfirm: false,
                component: <div>123123</div>
              }
            }, {
              key: 'my-dropdown',
              type: 'dropdown',
              text: 'Hello',
              // disabled: true,
              component: <h1>Hello World!</h1>
            }]}
            headings={['header-one', 'unstyled']}
            placeholder="Hello World!"
            forceFixPlaceholder={true}
            media={{
              items: [
                {
                  id: 'embed_1',
                  type: 'VIDEO',
                  name: '优酷视频',
                  meta: {
                    poster: 'https://margox.cn/wp-content/uploads/2018/09/IMG_9508.jpg'
                  },
                  url: `<embed src='http://player.youku.com/player.php/sid/XNDAwNDIxODg4OA==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>`
                }, {
                  id: 'audio_1',
                  type: 'AUDIO',
                  name: '才华有限公司',
                  url: 'http://cloudary-1253638848.cossh.myqcloud.com/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E6%89%8D%E5%8D%8E%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8.mp3'
                }
              ]
            }}
            triggerChangeOnMount={false}
            value={editorState}
            onChange={this.handleChange}
            readOnly={readOnly}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))