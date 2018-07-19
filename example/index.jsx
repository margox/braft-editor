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

    const controls = BraftEditor.defaultProps.controls.map(item => {
      if (item === 'media') {
        return {
          key: 'media',
          text: <b style={{color: '#f90'}}>IMG</b>,
        }
      } else {
        return item
      }
    })

    const imageControls = [
      ...BraftEditor.defaultProps.imageControls,
      {
        text: <b>SB</b>,
        onClick: console.log
      }
    ]

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            onChange={this.handleChange}
            stripPastedStyles={false}
            controls={controls}
            imageControls={imageControls}
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