import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import CodeHighlighter from './extensions/code-highlight'

BraftEditor.use([
  CodeHighlighter({
    showLineNumber: true
  }),
  {
    // includeEditors: ['demo-editor-1'],
    excludeEditors: ['demo-editor-1'],
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
    type: 'entity',
    name: 'keybord-item',
    control: {
      text: '按键'
    },
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
      editorState: BraftEditor.createEditorState('<p><a href="a">asdadasd</a></p><pre data-lang="html"><code>&lt;a href=&quot;javascript:void(0);&quot;&gt;Hello World!&lt;/a&gt;</code></pre><p></p>', {
        editorId: 'demo-editor'
      }),
      excludeControls: ['media']
    }

  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  logHTML = () => {
    this.setState({
      excludeControls: []
    })
    console.log(this.state.editorState.toHTML())
  }

  render() {

    const { editorState, excludeControls } = this.state

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            id="demo-editor"
            defaultLinkTarget="_blank"
            excludeControls={excludeControls}
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