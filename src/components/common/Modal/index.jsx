/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BaseUtils } from 'braft-utils';
import mergeClassNames from '@maximusft/mergeclassnames';

import './style.scss';

export const showModal = (props) => {
  const hostNode = document.createElement('div');
  const newProps = {
    visible: true,
    closeOnConfirm: true,
    closeOnCancel: true,
    ...props,
  };

  hostNode.style.display = 'none';
  document.body.appendChild(hostNode);

  const close = () => {
    if (ReactDOM.unmountComponentAtNode(hostNode)) {
      hostNode.parentNode.removeChild(hostNode);
    }
  };

  const onConfirm = () => {
    if (newProps.onConfirm) {
      newProps.onConfirm();
    }
  };

  const onCancel = () => {
    if (newProps.onCancel) {
      newProps.onCancel();
    }
  };

  const onClose = () => {
    close();
    if (newProps.onClose) {
      newProps.onClose();
    }
  };

  const modalInstance = ReactDOM.render(
    <Modal
      {...newProps}
      onConfirm={onConfirm}
      onCancel={onCancel}
      onClose={onClose}
    />,
    hostNode,
  );
  modalInstance.destroy = close;
  modalInstance.update = modalInstance.renderComponent;

  return modalInstance;
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.active = false;
    // eslint-disable-next-line new-cap
    this.componentId = `BRAFT-MODAL-${BaseUtils.UniueIndex()}`;
  }

  componentDidMount() {
    if (this.props.visible) {
      this.active = true;
      this.renderComponent(this.props);
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(next) {
    if (this.props.visible && !next.visible) {
      this.unrenderComponent();
    } else if (this.props.visible || next.visible) {
      this.active = true;
      this.renderComponent(next);
    }
  }

  handleTransitionEnd = () => {
    if (!this.rootElement || !this.rootElement.classList) {
      return false;
    }

    if (!this.rootElement.classList.contains('active')) {
      if (ReactDOM.unmountComponentAtNode(this.rootElement)) {
        this.rootElement.parentNode.removeChild(this.rootElement);
      }
    }
    return true;
  };

  handleMouseDown = (event) => {
    const tagName = event.target.tagName.toLowerCase();

    if (tagName === 'input' || tagName === 'textarea') {
      return false;
    }

    event.preventDefault();
    return true;
  };

  handleCancel = () => {
    if (this.props.closeOnCancel) {
      this.close();
    }
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  };

  handleConfirm = () => {
    if (this.props.closeOnConfirm) {
      this.close();
    }
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  };

  handleMaskClick = () => {
    if (this.props.closeOnBlur) {
      this.close();
    }
    if (this.props.onBlue) {
      this.props.onBlue();
    }
  };

  close = () => {
    this.unrenderComponent();
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  unrenderComponent() {
    this.active = false;
    if (this.activeId) {
      window.clearImmediate(this.activeId);
    }
    if (this.rootElement && this.rootElement.classList) {
      this.rootElement.classList.remove('active');
    }
  }

  renderComponent(props) {
    if (!this.active) {
      return false;
    }

    const {
      title,
      className,
      width,
      height,
      children,
      component,
      confirmable,
      showFooter,
      showCancel,
      showConfirm,
      showClose,
      cancelText,
      confirmText,
      bottomText,
      language,
    } = props;

    const childComponent = (
      <div
        role="presentation"
        onMouseDown={this.handleMouseDown}
        className={`bf-modal ${className || ''}`}
      >
        <div
          role="presentation"
          className="bf-modal-mask"
          onClick={this.handleMaskClick}
        />
        <div
          onTransitionEnd={this.handleTransitionEnd}
          style={{ width, height }}
          className="bf-modal-content"
        >
          <div className="bf-modal-header">
            <h3 className="bf-modal-caption">{title}</h3>
            {showClose && (
              <button
                type="button"
                onClick={this.close}
                className="bf-modal-close-button"
              >
                <i className="bfi-close" />
              </button>
            )}
          </div>
          <div className="bf-modal-body">{children || component}</div>
          {showFooter ? (
            <div className="bf-modal-footer">
              <div className="bf-modal-addon-text">{bottomText}</div>
              <div className="bf-modal-buttons">
                {showCancel && (
                  <button
                    type="button"
                    onClick={this.handleCancel}
                    className="bf-modal-cancel"
                  >
                    {cancelText || language.base.cancel}
                  </button>
                )}
                {showConfirm && (
                  <button
                    type="button"
                    onClick={this.handleConfirm}
                    className={mergeClassNames(
                      'bf-modal-confirm',
                      !confirmable && 'disabled',
                    )}
                  >
                    {confirmText || language.base.confirm}
                  </button>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );

    this.rootElement = document.querySelector(`#${this.componentId}`);

    if (!this.rootElement) {
      this.rootElement = document.createElement('div');
      this.rootElement.id = this.componentId;
      this.rootElement.className = 'bf-modal-root';
      document.body.appendChild(this.rootElement);
    }

    ReactDOM.render(childComponent, this.rootElement);

    this.activeId = window.setImmediate(() => {
      this.rootElement.classList.add('active');
    });
    return true;
  }

  render() {
    return null;
  }
}

Modal.defaultProps = {
  closeOnBlur: true,
  showCancel: true,
  showClose: true,
  showConfirm: true,
  showFooter: true,
};

Modal.propTypes = {
  visible: PropTypes.any,
  closeOnCancel: PropTypes.any,
  onCancel: PropTypes.any,
  closeOnConfirm: PropTypes.any,
  onConfirm: PropTypes.any,
  closeOnBlur: PropTypes.any,
  onBlue: PropTypes.any,
  onClose: PropTypes.any,
  showCancel: PropTypes.any,
  showClose: PropTypes.any,
  showConfirm: PropTypes.any,
  showFooter: PropTypes.any,
};

export default Modal;
