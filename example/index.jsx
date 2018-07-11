import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.editorInstance = null
  }

  render() {

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            onChange={console.log}
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