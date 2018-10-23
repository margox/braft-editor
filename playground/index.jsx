import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import { ContentUtils } from 'braft-utils'
import ColorPicker from 'braft-extensions/dist/color-picker'
import 'braft-extensions/dist/color-picker.css'

BraftEditor.use(ColorPicker())

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState('<pre><code>if (previousBlockType !== &#x27;code-block&#x27;) {</code><code>  return {</code><code>    start: &#x27;&lt;pre&gt;&lt;code&gt;&#x27;,</code><code>    end: &#x27;&lt;/code&gt;&lt;/pre&gt;&#x27;</code><code>  };</code><code>}</code></pre>')
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
          <BraftEditor extendControls={[{
            key: 'log-html',
            type: 'button',
            text: 'Log HTML',
            onClick: this.logHTML
          }]} value={this.state.editorState} onChange={this.handleChange} />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))