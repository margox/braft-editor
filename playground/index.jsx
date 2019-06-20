import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import ColorPicker from 'braft-extensions/dist/color-picker'
import Table from 'braft-extensions/dist/table'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon'

import 'braft-extensions/dist/emoticon.css'
import 'braft-extensions/dist/color-picker.css'
import 'braft-extensions/dist/table.css'
import 'braft-extensions/dist/code-highlighter.css'

const emoticons = defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`))

const hooks = {
  'set-image-alignment': () => {
    return 'left'
  }
}

BraftEditor.use([
  Emoticon({
    emoticons: emoticons
  }),
  // ColorPicker({
  //   theme: 'dark'
  // }),
  Table(),
  CodeHighlighter()
])

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      count: 0,
      readOnly: false,
      editorState: BraftEditor.createEditorState('<p data-foo="adasd" class="my-classname"><img src="https://www.baidu.com/img/bd_logo1.png?where=super" /><span style="color:#e25041;">asdasdasda</span>asdads</p>')
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
            colors={['#e25041']}
            headings={['header-one', 'unstyled']}
            placeholder="Hello World!"
            fixPlaceholder={true}
            allowInsertLinkText={true}
            triggerChangeOnMount={false}
            value={editorState}
            onChange={this.handleChange}
            readOnly={readOnly}
            hooks={hooks}
            imageResizable={false}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))