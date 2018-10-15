import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'

const blockExportFn = (contentState, block) => {

  const previousBlock = contentState.getBlockBefore(block.key)

  if (block.type === 'unstyled' && previousBlock && previousBlock.getType() === 'atomic') {
    return {
      start: '',
      end: '',
    }
  }

}

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: undefined,//BraftEditor.createEditorState(null)
    }

  }

  handleChange = (editorState) => {
    console.log(editorState)
    this.setState({ editorState })
  }

  logHTML = () => {
    this.setState({
      editorState: BraftEditor.createEditorState('<p>Hello <b>World</b></p>')
    })
  }

  render() {

    const { editorState } = this.state
    const extendControls = [
      {
        key: 'log-html',
        type: 'button',
        text: '输出HTML',
        onClick: this.logHTML
      }
    ]

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor defaultValue={this.state.editorState} onChange={this.handleChange} extendControls={extendControls}/>
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))