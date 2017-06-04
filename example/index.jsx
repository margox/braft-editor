import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '<h1>Hello Braft!</h1>'
    }
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="demo">
        <BraftEditor/>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))