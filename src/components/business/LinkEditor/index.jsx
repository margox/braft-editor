/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { ContentUtils } from 'braft-utils';

import Switch from 'components/common/Switch';
import DropDown from 'components/common/DropDown';
import ControlGroup from 'components/business/ControlGroup';

import './style.scss';

class LinkEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      href: '',
      target: props.defaultLinkTarget || '',
      textSelected: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { href, target } = ContentUtils.getSelectionEntityData(
      nextProps.editorState,
      'LINK',
    );
    const textSelected =
      !ContentUtils.isSelectionCollapsed(this.props.editorState) &&
      ContentUtils.getSelectionBlockType(this.props.editorState) !== 'atomic';

    let selectedText = '';

    if (textSelected) {
      selectedText = ContentUtils.getSelectionText(this.props.editorState);
    }

    this.setState({
      textSelected,
      text: selectedText,
      href: href || '',
      target:
        typeof target === 'undefined'
          ? nextProps.defaultLinkTarget || ''
          : target || '',
    });
  }

  dropDownInstance = React.createRef();

  handeKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleConfirm();
      e.preventDefault();
      return false;
    }
    return true;
  };

  handleTnputText = (e) => {
    this.setState({
      text: e.currentTarget.value,
    });
  };

  handleInputLink = (e) => {
    this.setState({
      href: e.currentTarget.value,
    });
  };

  setTarget = () => {
    this.setState((prevState) => ({
      target: prevState.target === '_blank' ? '' : '_blank',
    }));
  };

  handleCancel = () => {
    this.dropDownInstance.hide();
  };

  handleUnlink = () => {
    this.dropDownInstance.hide();
    this.props.editor.setValue(
      ContentUtils.toggleSelectionLink(this.props.editorState, false),
    );
  };

  handleConfirm = () => {
    let { href, target } = this.state;
    const { text, textSelected } = this.state;
    const hookReturns = this.props.hooks('toggle-link', { href, target })({
      href,
      target,
    });

    this.dropDownInstance.hide();
    this.props.editor.requestFocus();

    if (hookReturns === false) {
      return false;
    }

    if (hookReturns) {
      if (typeof hookReturns.href === 'string') {
        href = hookReturns.href;
      }
      if (typeof hookReturns.target === 'string') {
        target = hookReturns.target;
      }
    }

    if (textSelected) {
      if (href) {
        this.props.editor.setValue(
          ContentUtils.toggleSelectionLink(
            this.props.editorState,
            href,
            target,
          ),
        );
      } else {
        this.props.editor.setValue(
          ContentUtils.toggleSelectionLink(this.props.editorState, false),
        );
      }
    } else {
      this.props.editor.setValue(
        ContentUtils.insertText(this.props.editorState, text || href, null, {
          type: 'LINK',
          data: { href, target },
        }),
      );
    }
    return true;
  };

  render() {
    const { allowInsertLinkText } = this.props;
    const { text, href, target, textSelected } = this.state;
    const caption = <i className="bfi-link" />;

    return (
      <ControlGroup>
        <DropDown
          key={0}
          caption={caption}
          title={this.props.language.controls.link}
          autoHide
          getContainerNode={this.props.getContainerNode}
          showArrow={false}
          ref={this.dropDownInstance}
          className="control-item dropdown link-editor-dropdown"
        >
          <div className="bf-link-editor">
            {allowInsertLinkText ? (
              <div className="input-group">
                <input
                  type="text"
                  value={text}
                  spellCheck={false}
                  disabled={textSelected}
                  placeholder={
                    this.props.language.linkEditor.textInputPlaceHolder
                  }
                  onKeyDown={this.handeKeyDown}
                  onChange={this.handleTnputText}
                />
              </div>
            ) : null}
            <div className="input-group">
              <input
                type="text"
                value={href}
                spellCheck={false}
                placeholder={
                  this.props.language.linkEditor.linkInputPlaceHolder
                }
                onKeyDown={this.handeKeyDown}
                onChange={this.handleInputLink}
              />
            </div>
            <div className="switch-group">
              <Switch active={target === '_blank'} onClick={this.setTarget} />
              <label>{this.props.language.linkEditor.openInNewWindow}</label>
            </div>
            <div className="buttons">
              <a
                onClick={this.handleUnlink}
                role="presentation"
                className="primary button-remove-link pull-left"
              >
                <i className="bfi-close" />
                <span>{this.props.language.linkEditor.removeLink}</span>
              </a>
              <button
                type="button"
                onClick={this.handleConfirm}
                className="primary pull-right"
              >
                {this.props.language.base.confirm}
              </button>
              <button
                type="button"
                onClick={this.handleCancel}
                className="default pull-right"
              >
                {this.props.language.base.cancel}
              </button>
            </div>
          </div>
        </DropDown>
        <button
          key={1}
          type="button"
          data-title={this.props.language.controls.unlink}
          className="control-item button"
          onClick={this.handleUnlink}
          disabled={!textSelected || !href}
        >
          <i className="bfi-link-off" />
        </button>
      </ControlGroup>
    );
  }
}

LinkEditor.propTypes = {
  defaultLinkTarget: PropTypes.any,
  language: PropTypes.any,
  getContainerNode: PropTypes.any,
  editorState: PropTypes.any,
  editor: PropTypes.any,
  allowInsertLinkText: PropTypes.any,
  hooks: PropTypes.any,
};

export default LinkEditor;
