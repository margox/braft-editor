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
          <BraftEditor extendControls={extendControls} converts={{ blockExportFn }} onChange={this.handleChange} value={editorState}/>
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))