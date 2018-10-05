import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import { ContentUtils } from 'braft-utils'

BraftEditor.use([
  {
    type: 'inline-style',
    name: 'underdot',
    control: {
      text: '着重'
    },
    style: {
      textEmphasis: 'circle',
      textEmphasisPosition: 'under',
      WebkitTextEmphasis: 'circle',
      WebkitTextEmphasisPosition: 'under'
    },
    importer: (nodeName, node) => nodeName === 'span' && [].find.call(node.style, (styleName) => styleName.indexOf('text-emphasis') !== -1)
  }, {
    type: 'inline-style',
    name: 'red',
    control: {
      text: '加红'
    },
    style: {
      color: 'red'
    },
    importer: (nodeName, node) => nodeName === 'span' && node.style.color === 'red'
  }, {
    type: 'entity',
    name: 'keybord-item',
    component: (props) => <span className="keyboard-item">{props.children}</span>,
    importer: (_, node) => {
      if (node.classList && node.classList.contains('keyboard-item')) {
        return {}
      }
    },
    exporter: (_, originalText) => {
      return <span className="keyboard-item">{originalText}</span>
    }
  }
])

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState('<p>Press <span class="keyboard-item">Ctrl</span> + <span class="keyboard-item">V</span> to paste copied contents.</p>')
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
            extendControls={[
              {
                key: 'preview',
                type: 'button',
                text: '输出HTML',
                onClick: this.logHTML
              }
            ]}
            onChange={this.handleChange}
            value={editorState}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))