import './style.scss'
import React from 'react'

export default class Switch extends React.Component {

  render () {

    const { active, onClick, className } = this.props

    return (
      <div
        onClick={() => onClick()}
        className={"switch-button " + className + (active ? ' active' : '')}
      >
        <span></span>
      </div>
    )

  }

}
