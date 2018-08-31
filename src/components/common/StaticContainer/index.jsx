import React from 'react'

export default class extends React.Component {

  shouldComponentUpdate () {
    return false
  }

  render () {
    return <div>{this.props.children}</div>
  }

}