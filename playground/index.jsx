import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import { ContentUtils } from 'braft-utils'
import CodeHightlighter from 'braft-extensions/dist/code-highlighter'

BraftEditor.use(CodeHightlighter())

const editorState = BraftEditor.createEditorState('<pre data-lang="javascript" class="lang-javascript"><code class="lang-javascript">function foo() {<br/>  console.log(123)<br/>}</code></pre>')
console.log(editorState.toHTML())

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      count: 0,
      editorState: BraftEditor.createEditorState(null)
    }

  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  logHTML = () => {
    console.log(this.state.editorState.toHTML())
  }

  render() {

    const { editorState } = this.state

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            extendControls={[{
              key: 'log-html',
              type: 'button',
              text: 'Log HTML',
              onClick: this.logHTML,
            }, {
              key: 'my-modal',
              type: 'modal',
              text: 'modal',
              modal: {
                id: 'a',
                // closeOnBlur: false,
                component: <div>123123</div>
              }
            }]}
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))