import './style.scss'
import React from 'react'
import ResponsiveHelper from 'helpers/responsive'

export default class DropDown extends React.Component {

  responsiveResolveId = null
  dropDownHandlerElement = null
  dropDownContentElement = null
  state = {
    active: false,
    offset: 0
  }

  componentDidMount () {

    if (document) {
      document.body.addEventListener('click', this.registerClickEvent)
      this.responsiveResolveId = ResponsiveHelper.resolve(this.fixDropDownPosition)
    }

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

    if (document) {
      document.body.removeEventListener('click', this.registerClickEvent)
      ResponsiveHelper.unresolve(this.responsiveResolveId)
    }

  }

  render () {

    let { active, offset } = this.state
    let { caption, htmlCaption, title, disabled, showArrow, arrowActive, className, children, theme } = this.props

    disabled && (active = false)
    theme === 'light' && (className = ' light-theme ' + className)

    return (
      <div className={'bf-dropdown ' + (active ? 'active ' : '') + (disabled ? 'disabled ' : '') + className}>
        {htmlCaption ? (
          <button
            type='button'
            className='dropdown-handler'
            data-title={title}
            onClick={this.toggle}
            dangerouslySetInnerHTML={htmlCaption ? {__html: htmlCaption} : null}
            ref={(instance) => this.dropDownHandlerElement = instance}
          ></button>
        ) : (
          <button
            type='button'
            className='dropdown-handler'
            data-title={title}
            onClick={this.toggle}
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
          <div className='dropdown-content-inner'>
            {children}
          </div>
        </div>
      </div>
    )

  }

  fixDropDownPosition = () => {

    const viewRect = this.props.getContainerNode().getBoundingClientRect()
    const handlerRect = this.dropDownHandlerElement.getBoundingClientRect()
    const contentRect = this.dropDownContentElement.getBoundingClientRect()

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

    if (offset !== this.state.offset) {
      this.setState({ offset })
    }

  }

  registerClickEvent = (event) => {

    const { autoHide } = this.props
    const { active } = this.state

    if (this.dropDownContentElement.contains(event.target) || this.dropDownHandlerElement.contains(event.target)) {
      return false
    }

    autoHide && active && this.hide()

  }

  toggle = () => {
    this.setState({ active: !this.state.active })
  }

  show = () => {
    this.setState({ active: true })
  }

  hide = () => {
    this.setState({ active: false })
  }

}