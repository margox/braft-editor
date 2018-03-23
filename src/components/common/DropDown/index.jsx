import './style.scss'
import React from 'react'
import ResponsiveHelper from 'helpers/responsive'
import { UniqueIndex } from 'utils/base'

export default class DropDown extends React.Component {

  alive = false
  responsiveResolveId = null
  dropDownHandlerElement = null
  dropDownContentElement = null
  componentId = this.props.componentId || ('BRAFT-DROPDOWN-' + UniqueIndex())
  state = {
    active: false,
    offset: 0
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

  componentDidUpdate (prevState) {

    if (!prevState.active && this.state.active) {
      this.fixDropDownPosition()
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
    let { caption, htmlCaption, hoverTitle, disabled, showDropDownArrow, arrowActive, className, children, editorHeight } = this.props

    disabled && (active = false)

    const dropDownContentInnerStyle = !isNaN(editorHeight) && editorHeight > 0 ? {
      maxHeight: editorHeight - 30 + 'px'
    } : {}

    return (
      <div
        id={this.componentId}
        className={"Braft-dropdown " + (active ? "active " : "") + (disabled ? "disabled " : "") + className}
      >
        {htmlCaption ? (
          <button
            type="button"
            className="dropdown-handler"
            title={hoverTitle}
            data-braft-component-id={this.componentId}
            dangerouslySetInnerHTML={htmlCaption ? {__html: htmlCaption} : null}
            ref={(instance) => this.dropDownHandlerElement = instance}
          ></button>
        ) : (
          <button
            type="button"
            className="dropdown-handler"
            title={hoverTitle}
            data-braft-component-id={this.componentId}
            ref={(instance) => this.dropDownHandlerElement = instance}
          >
            <span>{caption}</span>
            {showDropDownArrow !== false ? <i className="braft-icon-drop-down"></i> : null}
          </button>
        )}
        <div
          className="dropdown-content"
          style={{marginLeft: offset + 'px'}}
          ref={(instance) => this.dropDownContentElement = instance}
        >
          <i
            style={{marginLeft: offset * -1}}
            className={'dropdown-arrow' + (arrowActive ? ' active' : '')}
          ></i>
          <div
            className="dropdown-content-inner"
            style={dropDownContentInnerStyle}
          >
            {children}
          </div>
        </div>
      </div>
    )

  }

  fixDropDownPosition () {

    let offset = 0
    let viewRect = null

    if (this.props.viewWrapper) {
      viewRect = document.querySelector(this.props.viewWrapper).getBoundingClientRect()
    } else {
      viewRect = document.body.getBoundingClientRect()
    }

    let handlerRect = this.dropDownHandlerElement.getBoundingClientRect()
    let contentRect = this.dropDownContentElement.getBoundingClientRect()
    let right = handlerRect.right - handlerRect.width / 2 + contentRect.width / 2
    let left = handlerRect.left + handlerRect.width / 2 - contentRect.width / 2

    right = viewRect.right - right
    left = left - viewRect.left

    if (right < 10) {
      offset = right - 10
    } else if (left < 10) {
      offset = left * -1 + 10
    }

    offset !== this.state.offset && this.setState({ offset })

  }

  registerClickEvent (event) {

    let { autoHide } = this.props
    let active = false

    if (event.target.dataset.braftComponentId === this.componentId) {
      active = event.target.dataset.keepActive ? true : !this.state.active
    } else if (autoHide === false) {
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