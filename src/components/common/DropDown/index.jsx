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
    const { caption, showDropDownArrow, arrowActive, className, children } = this.props

    return (
      <div id={this.componentId} className={"Braft-dropdown " + (active ? "active " : "") + className}>
        <button data-braft-component-id={this.componentId} className="dropdown-handler">
          <span>{caption}</span>
          {showDropDownArrow !== false && <i className="icon-drop-down"></i>}
        </button>
        <div className={"dropdown-content" + (arrowActive ? ' arrow-active' : '')}>{children}</div>
      </div>
    )

  }

  registerEvent (event) {

    let { hideOnBlur } = this.props
    let active = false
    if (event.target.dataset.braftComponentId === this.componentId) {
      active = !this.state.active
    } else if (hideOnBlur === false) {
      active = this.state.active
    }
    this.setState({ active })

  }

  show () {
    this.setState({
      active: true
    })
  }

  hide () {
    this.setState({
      active: false
    })
  }


}