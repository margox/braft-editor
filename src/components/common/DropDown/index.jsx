import './style.scss'
import React from 'react'
import ResponsiveHelper from 'helpers/responsive'
import { BaseUtils } from 'braft-utils'

export default class DropDown extends React.Component {

  alive = false
  responsiveResolveId = null
  dropDownHandlerElement = null
  dropDownContentElement = null
  componentId = this.props.componentId || ('BRAFT-DROPDOWN-' + BaseUtils.UniqueIndex())
  state = {
    active: false,
    offset: 0,
    maxHeight: 100
  }

  componentDidMount () {

    this.alive = true

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

    let { active, offset, maxHeight } = this.state
    let { caption, htmlCaption, title, disabled, showArrow, arrowActive, className, children } = this.props

    disabled && (active = false)

    return (
      <div
        id={this.componentId}
        className={'bf-dropdown ' + (active ? 'active ' : '') + (disabled ? 'disabled ' : '') + className}
      >
        {htmlCaption ? (
          <button
            type='button'
            className='dropdown-handler'
            data-title={title}
            data-braft-component-id={this.componentId}
            dangerouslySetInnerHTML={htmlCaption ? {__html: htmlCaption} : null}
            ref={(instance) => this.dropDownHandlerElement = instance}
          ></button>
        ) : (
          <button
            type='button'
            className='dropdown-handler'
            data-title={title}
            data-braft-component-id={this.componentId}
            ref={(instance) => this.dropDownHandlerElement = instance}
          >
            <span>{caption}</span>
            {showArrow !== false ? <i className='bfi-drop-down'></i> : null}
          </button>
        )}
        <div
          className='dropdown-content'
          style={{marginLeft: offset }}
          ref={(instance) => this.dropDownContentElement = instance}
        >
          <i
            style={{marginLeft: offset * -1}}
            className={'dropdown-arrow' + (arrowActive ? ' active' : '')}
          ></i>
          <div
            className='dropdown-content-inner'
            style={{ maxHeight }}
          >
            {children}
          </div>
        </div>
      </div>
    )

  }

  fixDropDownPosition () {

    const viewRect = this.props.containerNode.getBoundingClientRect()
    const editorContentRect = this.props.containerNode.querySelector('.bf-content').getBoundingClientRect()
    const handlerRect = this.dropDownHandlerElement.getBoundingClientRect()
    const contentRect = this.dropDownContentElement.getBoundingClientRect()

    const maxHeight = editorContentRect.height + (editorContentRect.top - (handlerRect.top + handlerRect.height)) - 30

    let offset = 0
    let right = handlerRect.right - handlerRect.width / 2 + contentRect.width / 2
    let left = handlerRect.left + handlerRect.width / 2 - contentRect.width / 2

    right = viewRect.right - right
    left = left - viewRect.left

    if (right < 10) {
      offset = right - 10
    } else if (left < 10) {
      offset = left * -1 + 10
    }

    if (offset !== this.state.offset || maxHeight !== this.state.maxHeight) {
      this.setState({ offset, maxHeight })
    }

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