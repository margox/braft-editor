import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { BaseUtils } from 'braft-utils'

export default class Modal extends React.Component {

  constructor (props) {

    super(props)
    this.active = false
    this.componentId = 'BRAFT-MODAL-' + BaseUtils.UniqueIndex()

  }

  static defaultProps = {
    showFooter: true,
    closeOnBlur: true
  }

  componentDidMount () {

    if (this.props.visible) {
      this.active = true
      this.renderComponent(this.props)
    }

  }

  componentWillReceiveProps (next) {

    if (this.props.visible && !next.visible) {
      this.unrenderComponent()
    } else if (this.props.visible || next.visible) {
      this.active = true
      this.renderComponent(next)
    }

  }

  render () {
    return null
  }

  handleTransitionEnd = () => {

    if (!this.rootElement || !this.rootElement.classList) {
      return false
    }

    if (!this.rootElement.classList.contains('active')) {
      ReactDOM.unmountComponentAtNode(this.rootElement) && this.rootElement.parentNode.removeChild(this.rootElement)
    }

  }

  unrenderComponent () {
    this.active = false
    this.activeId && window.clearImmediate(this.activeId)
    if (this.rootElement && this.rootElement.classList) {
      this.rootElement.classList.remove('active')
    }
  }

  renderComponent (props) {

    if (!this.active) {
      return false
    }

    let { title, className, width, height, children, component, confirmable, showFooter, showCancel, showConfirm, showClose, cancelText, confirmText, bottomText, language } = props

    typeof showCancel === 'undefined' && (showCancel = true)
    typeof showClose === 'undefined' && (showClose = true)
    typeof showConfirm === 'undefined' && (showConfirm = true)
    typeof showFooter === 'undefined' && (showFooter = true)

    const childComponent = (
      <div onMouseDown={this.handleMouseDown} className={'bf-modal ' + (className || '')}>
        <div className='bf-modal-mask' onClick={this.handleMaskClick}></div>
        <div onTransitionEnd={this.handleTransitionEnd} style={{width, height}} className='bf-modal-content'>
          <div className='bf-modal-header'>
            <h3 className='bf-modal-caption'>{title}</h3>
            {showClose && <button type='button' onClick={this.close} className='bf-modal-close-button'><i className='bfi-close'></i></button>}
          </div>
          <div className='bf-modal-body'>{children || component}</div>
          {showFooter ? (
            <div className='bf-modal-footer'>
              <div className='bf-modal-addon-text'>{bottomText}</div>
              <div className='bf-modal-buttons'>
                {showCancel && <button type='button' onClick={this.handleCancel} className='bf-modal-cancel'>{cancelText || language.base.cancel}</button>}
                {showConfirm && <button type='button' onClick={this.handleConfirm} className={'bf-modal-confirm ' + (!confirmable ? 'disabled' : '')}>{confirmText || language.base.confirm}</button>}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )

    this.rootElement = document.querySelector('#' + this.componentId)

    if (!this.rootElement) {
      this.rootElement = document.createElement('div')
      this.rootElement.id = this.componentId
      this.rootElement.className = 'bf-modal-root'
      document.body.appendChild(this.rootElement)
    }

    ReactDOM.render(childComponent, this.rootElement)

    this.activeId = window.setImmediate(() => {
      this.rootElement.classList.add('active')
    })

  }

  handleMouseDown = (event) => {

    const tagName = event.target.tagName.toLowerCase()

    if (tagName === 'input' || tagName === 'textarea') {
      return false
    }

    event.preventDefault()

  }

  handleCancel = () => {
    this.props.closeOnCancel && this.close()
    this.props.onCancel && this.props.onCancel()
  }

  handleConfirm = () => {
    this.props.closeOnConfirm && this.close()
    this.props.onConfirm && this.props.onConfirm()
  }

  handleMaskClick = () => {
    this.props.closeOnBlur && this.close()
    this.props.onBlue && this.props.onBlue()
  }

  close = () => {
    this.unrenderComponent()
    this.props.onClose && this.props.onClose()
  }

}

export const showModal = (props) => {

  const hostNode = document.createElement('div')

  hostNode.style.display = 'none'
  document.body.appendChild(hostNode)

  props = {
    visible: true,
    closeOnConfirm: true,
    closeOnCancel: true,
    ...props
  }

  const close = () => {
    ReactDOM.unmountComponentAtNode(hostNode) && hostNode.parentNode.removeChild(hostNode)
  }

  const onConfirm = () => {
    props.onConfirm && props.onConfirm()
  }

  const onCancel = () => {
    props.onCancel && props.onCancel()
  }

  const onClose = () => {
    close()
    props.onClose && props.onClose()
  }

  const modalInstance = ReactDOM.render(<Modal { ...props } onConfirm={onConfirm} onCancel={onCancel} onClose={onClose} />, hostNode)
  modalInstance.destroy = close
  modalInstance.update = modalInstance.renderComponent

  return modalInstance

}