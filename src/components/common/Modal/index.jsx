import './style.scss'
import React from 'react'

export default class Modal extends React.Component {

  state = {
    visible: false
  }

  componentDidMount () {

    if (this.props.visible) {
      this.setState({
        visible: true
      })
    }

  }

  componentWillReceiveProps (next) {

    if (this.props.visible !== next.visible) {
      this.setState({
        visible: next.visible
      })
    }

  }

  render () {

    const { visible } = this.state
    const { className, width, height, children } = this.props

    return (
      <div className={"braft-modal " + className + (visible ? ' active' : '')}>
        <div className="braft-modal-mask"></div>
        <div style={{width, height}} className="braft-modal-content">{children}</div>
      </div>
    )

  }

}
