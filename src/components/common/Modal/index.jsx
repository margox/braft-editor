import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { UniqueIndex } from 'utils/base'

export default class Modal extends React.Component {

  componentId = 'BRAFT-MODAL-' + UniqueIndex()
  state = {
    visible: false
  }

  componentDidMount () {

    if (this.props.visible) {
      this.setState({
        visible: true
      }, () => {
        this.renderComponent(this.props)
      })
    }

  }

  componentWillReceiveProps (next) {

    if (this.props.visible && !next.visible) {
      this.unrenderComponent()
    } else if (this.props.visible || next.visible) {
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
    this.rootElement.classList.remove('active')
  }

  renderComponent (props) {

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
            {showClose && <button onClick={this.close} className="braft-modal-close-button"><i className="icon-close"></i></button>}
          </div>
          <div className="braft-modal-body">{children}</div>
          <div className="braft-modal-footer">
            <div className="braft-modal-addon-text">{bottomText}</div>
            <div className="braft-modal-buttons">
              {showCancel && <button onClick={this.handleCancel} className="braft-modal-cancel">{cancelText || language.base.cancel}</button>}
              {showConfirm && <button onClick={this.handleConfirm} className={"braft-modal-confirm " + (!confirmable ? 'disabled' : '')}>{confirmText || language.base.confirm}</button>}
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

    window.setImmediate(() => {
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

  ReactDOM.render(<Modal {...props} {...extProps}/>, host)

  return { close }

}