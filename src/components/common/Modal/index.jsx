import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { UniqueIndex } from 'utils/base'

export default class Modal extends React.Component {

  active = false
  componentId = 'BRAFT-MODAL-' + UniqueIndex()

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

    let { title, className, width, height, children, confirmable, showCancel, showConfirm, showClose, cancelText, confirmText, bottomText, language } = props

    typeof showCancel === 'undefined' && (showCancel = true)
    typeof showClose === 'undefined' && (showClose = true)
    typeof showConfirm === 'undefined' && (showConfirm = true)

    const childComponent = (
      <div className={"braft-modal " + (className || '')}>
        <div className="braft-modal-mask"></div>
        <div onTransitionEnd={this.handleTransitionEnd} style={{width, height}} className="braft-modal-content">
          <div className="braft-modal-header">
            <h3 className="braft-modal-caption">{title}</h3>
            {showClose && <button type="button" onClick={this.close} className="braft-modal-close-button"><i className="braft-icon-close"></i></button>}
          </div>
          <div className="braft-modal-body">{children}</div>
          <div className="braft-modal-footer">
            <div className="braft-modal-addon-text">{bottomText}</div>
            <div className="braft-modal-buttons">
              {showCancel && <button type="button" onClick={this.handleCancel} className="braft-modal-cancel">{cancelText || language.base.cancel}</button>}
              {showConfirm && <button type="button" onClick={this.handleConfirm} className={"braft-modal-confirm " + (!confirmable ? 'disabled' : '')}>{confirmText || language.base.confirm}</button>}
            </div>
          </div>
        </div>
      </div>
    )

    this.rootElement = document.querySelector('#' + this.componentId)

    if (!this.rootElement) {
      this.rootElement = document.createElement('div')
      this.rootElement.id = this.componentId
      this.rootElement.className = 'braft-modal-root'
      document.body.appendChild(this.rootElement)
    }

    ReactDOM.render(childComponent, this.rootElement)

    this.activeId = window.setImmediate(() => {
      this.rootElement.classList.add('active')
    })

  }

  handleCancel = () => {
    this.props.closeOnCancel && this.close()
    this.props.onCancel && this.props.onCancel()
  }

  handleConfirm = () => {
    this.props.closeOnConfirm && this.close()
    this.props.onConfirm && this.props.onConfirm()
  }

  close = () => {
    this.unrenderComponent()
    this.props.onClose && this.props.onClose()
  }

}

export const showModal = (props) => {

  const host = document.createElement('div')
  host.style.display = 'none'
  document.body.appendChild(host)

  const close = () => {
    ReactDOM.unmountComponentAtNode(host) && host.parentNode.removeChild(host)
  }

  const onConfirm = () => {
    close()
    props.onConfirm && props.onConfirm()
  }

  const onCancel = () => {
    close()
    props.onCancel && props.onCancel()
  }

  const onClose = () => {
    close()
    props.onClose && props.onClose()
  }

  const extProps = {
    onConfirm, onCancel, onClose,
    visible: true,
    closeOnConfirm: true,
    closeOnCancel: true
  }

  const modalInstance = ReactDOM.render(<Modal { ...props } { ...extProps }/>, host)
  modalInstance.destroy = close
  modalInstance.update = modalInstance.renderComponent

  return modalInstance

}