import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import { ContentUtils } from 'braft-utils'

const uploadFn = (param) => {

  param.success({
    url: URL.createObjectURL(param.file),
    width: 100,
    height: 100
  })

}

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

  updateCount = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })
  }

  render() {

    const { editorState } = this.state

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            extendControls={[{
              key: 'log-html',
              type: 'modal',
              text: this.state.count,
              // onClick: this.logHTML,
              modal: {
                id: 'test-modal',
                title: this.state.count,
                children: (
                  <div style={{width: 300, height: 150}} onClick={this.updateCount}>{this.state.count}</div>
                )
              }
            }]}
            media={{ uploadFn }}
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))