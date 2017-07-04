import './style.scss'
import React from 'react'
import { UniqueIndex } from 'utils/base'

export default class DropDown extends React.Component {

  constructor (props) {

    super(props)
    this.state = {
      active: false
    }
    this.componentId = 'BRAFT-DROPDOWN-' + UniqueIndex()

  }

  componentDidMount () {
    document.body.addEventListener('click', this.registerEvent.bind(this), false)
  }

  componentWillUnmount () {
    document.body.removeEventListener('click', this.registerEvent.bind(this), false)
  }

  render () {

    const { active } = this.state
    const { className, children } = this.props

    return (
      <div id={this.componentId} className={"Braft-dropdown " + (active ? "active " : "") + className}>
        <div className="dropdown-items">{children}</div>
        <button data-braft-component-id={this.componentId} className="dropdown-handler">
          <i className="icon-drop-down"></i>
        </button>
      </div>
    )

  }

  registerEvent (event) {

    let active = false
    if (event.target.dataset.braftComponentId === this.componentId) {
      active = !this.state.active
    }
    this.setState({ active })

  }

}