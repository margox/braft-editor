import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: undefined,//BraftEditor.createEditorState(null)
    }

  }

  handleChange = (editorState) => {
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
      (props) => ({
        key: 'log-html',
        type: 'button',
        text: 'Log HTML',
        onClick: () => {
          console.log(props.editorState.toHTML())
        }
      })
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