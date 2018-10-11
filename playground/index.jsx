import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import EnhancedColorPicker from './extensions/enhanced-color-picker'

BraftEditor.use(EnhancedColorPicker({
  theme: 'light'
}))

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

  render() {

    const { editorState } = this.state

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor onChange={this.handleChange} value={editorState}/>
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))