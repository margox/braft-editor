import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import { convertRawToHTML } from 'braft-convert'
import { convertToRaw } from 'draft-js'

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.editorInstance = null
  }

  handleChange = (editorState) => {
    console.log(convertRawToHTML(convertToRaw(editorState.getCurrentContent())))
  }

  render() {

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            onChange={this.handleChange}
            stripPastedStyles={false}
            media={{
              externals: {
                audio: true,
                image: true,
                embed: true
              }
            }}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))