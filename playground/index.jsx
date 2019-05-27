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
      editorState: BraftEditor.createEditorState('{"blocks":[{"key":"avlot","text":"1123123123123123123123123123qweqweeqwe","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":11,"length":6,"style":"BGCOLOR-AC0303"},{"offset":11,"length":6,"style":"COLOR-E215D0"},{"offset":23,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}')
    }

  }

  handleChange = (editorState) => {
    console.log('change')
    this.setState({ editorState })
  }

  logHTML = () => {
    console.log(this.state.editorState.toHTML())
  }

  logRAW = () => {
    console.log(this.state.editorState.toRAW())
  }

  render() {

    const { readOnly, editorState } = this.state

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            extendControls={[{
              key: 'log-raw',
              type: 'button',
              text: 'Log RAW',
              // disabled: true,
              onClick: this.logRAW,
            }, {
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
            fixPlaceholder={true}
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