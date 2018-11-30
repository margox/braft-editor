import './style.scss'
import React, { createRef } from 'react'
import ResponsiveHelper from 'helpers/responsive'
import { BaseUtils } from 'braft-utils'

export default class DropDown extends React.Component {
  alive = false
  responsiveResolveId = null
  dropDownHandlerElement = createRef()
  dropDownContentElement = createRef()
  componentId =
    this.props.componentId || 'BRAFT-DROPDOWN-' + BaseUtils.UniqueIndex()
  state = {
    active: false,
    offset: 0,
  }

  componentDidMount() {
    this.alive = true

    document.body.addEventListener('click', (event) => {
      this.registerClickEvent(event)
    })

    this.responsiveResolveId = ResponsiveHelper.resolve(() => {
      this.fixDropDownPosition()
    })
  }

  componentWillReceiveProps(next) {
    if (!this.props.disabled && next.disabled) {
      this.hide()
    }
  }

  componentDidUpdate(prevState) {
    if (!prevState.active && this.state.active) {
      this.fixDropDownPosition()
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', (event) => {
      this.registerClickEvent(event)
    })

    this.alive = false
    ResponsiveHelper.unresolve(this.responsiveResolveId)
  }

  render() {
    let { active, offset } = this.state
    let {
      caption,
      htmlCaption,
      title,
      disabled,
      showArrow,
      arrowActive,
      className,
      children,
      theme,
    } = this.props

    disabled && (active = false)
    theme === 'light' && (className = ' light-theme ' + className)

    return (
      <div
        id={this.componentId}
        className={
          'bf-dropdown ' +
          (active ? 'active ' : '') +
          (disabled ? 'disabled ' : '') +
          className
        }
      >
        {htmlCaption ? (
          <button
            type="button"
            className="dropdown-handler"
            data-title={title}
            data-braft-component-id={this.componentId}
            dangerouslySetInnerHTML={
              htmlCaption ? { __html: htmlCaption } : null
            }
            ref={this.dropDownHandlerElement}
          />
        ) : (
          <button
            type="button"
            className="dropdown-handler"
            data-title={title}
            data-braft-component-id={this.componentId}
            ref={this.dropDownHandlerElement}
          >
            <span>{caption}</span>
            {showArrow !== false ? <i className="bfi-drop-down" /> : null}
          </button>
        )}
        <div
          className="dropdown-content"
          style={{ marginLeft: offset }}
          ref={this.dropDownContentElement}
        >
          <i
            style={{ marginLeft: offset * -1 }}
            className={'dropdown-arrow' + (arrowActive ? ' active' : '')}
          />
          <div className="dropdown-content-inner">{children}</div>
        </div>
      </div>
    )
  }

  fixDropDownPosition() {
    const viewRect = this.props.containerNode.getBoundingClientRect()
    const handlerRect = this.dropDownHandlerElement.current.getBoundingClientRect()
    const contentRect = this.dropDownContentElement.current.getBoundingClientRect()

    let offset = 0
    let right =
      handlerRect.right - handlerRect.width / 2 + contentRect.width / 2
    let left = handlerRect.left + handlerRect.width / 2 - contentRect.width / 2

    right = viewRect.right - right
    left = left - viewRect.left

    if (right < 10) {
      offset = right - 10
    } else if (left < 10) {
      offset = left * -1 + 10
    }

    if (offset !== this.state.offset) {
      this.setState({ offset })
    }
  }

  registerClickEvent(event) {
    let { autoHide } = this.props
    let active = false

    if (event.target.dataset.braftComponentId === this.componentId) {
      active = event.target.dataset.keepActive ? true : !this.state.active
    } else if (autoHide === false) {
      active = this.state.active
    }

    this.alive && this.setState({ active })
  }

  show() {
    this.setState({
      active: true,
    })
  }

  hide() {
    this.setState({
      active: false,
    })
  }
}
