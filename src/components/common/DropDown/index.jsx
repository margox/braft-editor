import './style.scss'
import React from 'react'
import ResponsiveHelper from 'helpers/responsive'
import { UniqueIndex } from 'utils/base'

export default class DropDown extends React.Component {

  constructor (props) {

    super(props)

    this.alive = false
    this.responsiveResolveId = null
    this.dropDownHandlerElement = null
    this.dropDownContentElement = null
    this.componentId = props.componentId || ('BRAFT-DROPDOWN-' + UniqueIndex())
    this.state = {
      active: false,
      offset: 0
    }

  }

  componentDidMount () {

    this.alive = true
    this.fixDropDownPosition()

    document.body.addEventListener('click', (event) => {
      this.registerClickEvent(event)
    })

    this.responsiveResolveId = ResponsiveHelper.resolve(() => {
      this.fixDropDownPosition()
    })

  }

  componentWillReceiveProps (next) {

    if (!this.props.disabled && next.disabled) {
      this.hide()
    }

  }

  componentWillUnmount () {

    document.body.removeEventListener('click', (event) => {
      this.registerClickEvent(event)
    })

    this.alive = false
    ResponsiveHelper.unresolve(this.responsiveResolveId)

  }

  render () {

    let { active, offset } = this.state
    let { caption, disabled, showDropDownArrow, arrowActive, className, children } = this.props

    disabled && (active = false)

    return (
      <div
        id={this.componentId}
        className={"Braft-dropdown " + (active ? "active " : " ") + (disabled ? "disabled " : " ") + className}
      >
        <button
          className="dropdown-handler"
          data-braft-component-id={this.componentId}
          ref={(instance) => this.dropDownHandlerElement = instance}
        >
          <span>{caption}</span>
          {showDropDownArrow !== false && <i className="icon-drop-down"></i>}
        </button>
        <div
          className="dropdown-content"
          style={{marginLeft: offset + 'px'}}
          ref={(instance) => this.dropDownContentElement = instance}
        >
          <i
            style={{marginLeft: offset * -1}}
            className={'dropdown-arrow' + (arrowActive ? ' active' : '')}
          ></i>
          {children}
        </div>
      </div>
    )

  }

  fixDropDownPosition () {

    let offset = 0
    let viewWidth = document.body.getBoundingClientRect().width
    let handlerRect = this.dropDownHandlerElement.getBoundingClientRect()
    let contentRect = this.dropDownContentElement.getBoundingClientRect()
    let right = handlerRect.right - handlerRect.width / 2 + contentRect.width / 2
    let left = handlerRect.left + handlerRect.width / 2 - contentRect.width / 2

    right = viewWidth - right

    if (right < 10) {
      offset = right - 10
    } else if (left < 10) {
      offset = left * -1 + 10
    }

    offset !== this.state.offset && this.setState({ offset })

  }

  registerClickEvent (event) {

    let { hideOnBlur } = this.props
    let active = false

    if (event.target.dataset.braftComponentId === this.componentId) {
      active = event.target.dataset.keepActive ? true : !this.state.active
    } else if (hideOnBlur === false) {
      active = this.state.active
    }

    this.alive && this.setState({ active })

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