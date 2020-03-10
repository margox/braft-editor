/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from '@maximusft/mergeclassnames';

import ResponsiveHelper from 'helpers/responsive';

import './style.scss';

class DropDown extends React.Component {
  state = {
    active: false,
    offset: 0,
  };

  componentDidMount() {
    if (document) {
      document.body.addEventListener('click', this.registerClickEvent);
      this.responsiveResolveId = ResponsiveHelper.resolve(
        this.fixDropDownPosition,
      );
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(next) {
    if (!this.props.disabled && next.disabled) {
      this.hide();
    }
  }

  componentDidUpdate(prevState) {
    if (!prevState.active && this.state.active) {
      this.fixDropDownPosition();
    }
  }

  componentWillUnmount() {
    if (document) {
      document.body.removeEventListener('click', this.registerClickEvent);
      ResponsiveHelper.unresolve(this.responsiveResolveId);
    }
  }

  responsiveResolveId = React.createRef();

  dropDownHandlerElement = React.createRef();

  dropDownContentElement = React.createRef();

  fixDropDownPosition = () => {
    const viewRect = this.props.getContainerNode().getBoundingClientRect();
    const handlerRect = this.dropDownHandlerElement.getBoundingClientRect();
    const contentRect = this.dropDownContentElement.getBoundingClientRect();

    let offset = 0;
    let right =
      handlerRect.right - handlerRect.width / 2 + contentRect.width / 2;
    let left = handlerRect.left + handlerRect.width / 2 - contentRect.width / 2;

    right = viewRect.right - right;
    left -= viewRect.left;

    if (right < 10) {
      offset = right - 10;
    } else if (left < 10) {
      offset = left * -1 + 10;
    }

    if (offset !== this.state.offset) {
      this.setState({ offset });
    }
  };

  registerClickEvent = (event) => {
    const { autoHide } = this.props;
    const { active } = this.state;

    if (
      this.dropDownContentElement.contains(event.target) ||
      this.dropDownHandlerElement.contains(event.target)
    ) {
      return false;
    }

    if (autoHide && active) {
      this.hide();
    }
    return true;
  };

  toggle = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };

  show = () => {
    this.setState({ active: true });
  };

  hide = () => {
    this.setState({ active: false });
  };

  render() {
    const { active, offset } = this.state;
    const {
      caption,
      htmlCaption,
      title,
      disabled,
      showArrow,
      arrowActive,
      className,
      children,
    } = this.props;

    return (
      <div
        className={mergeClassNames(
          'bf-dropdown',
          !disabled && active && 'active',
          disabled && 'disabled',
          className,
        )}
      >
        {htmlCaption ? (
          <button
            type="button"
            className="dropdown-handler"
            data-title={title}
            aria-label="Button"
            onClick={this.toggle}
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
            onClick={this.toggle}
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
            className={mergeClassNames(
              'dropdown-arrow',
              arrowActive && 'active',
            )}
          />
          <div className="dropdown-content-inner">{children}</div>
        </div>
      </div>
    );
  }
}

DropDown.propTypes = {
  autoHide: PropTypes.any,
  onChange: PropTypes.any,
  getContainerNode: PropTypes.any,
  caption: PropTypes.any,
  htmlCaption: PropTypes.any,
  title: PropTypes.any,
  disabled: PropTypes.any,
  showArrow: PropTypes.any,
  arrowActive: PropTypes.any,
  className: PropTypes.any,
  children: PropTypes.any,
  theme: PropTypes.any,
};

export default DropDown;
