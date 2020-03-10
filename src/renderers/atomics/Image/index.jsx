/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ContentUtils } from 'braft-utils';

import { imageControlItems } from 'configs/controls';
import Switch from 'components/common/Switch';

import './style.scss';

class Image extends React.Component {
  state = {
    toolbarVisible: false,
    toolbarOffset: 0,
    linkEditorVisible: false,
    sizeEditorVisible: false,
    tempLink: null,
    tempWidth: null,
    tempHeight: null,
  };

  imageElement = React.createRef();

  mediaEmbederInstance = React.createRef();

  toolbarElement = React.createRef();

  initialLeft;

  initialTop;

  initialWidth;

  initialHeight;

  reSizeType;

  zoom;

  changeSize = (e) => {
    const type = this.reSizeType;
    if (!this.initialLeft) {
      this.initialLeft = e.screenX;
      this.initialTop = e.screenY;
    }
    if (type === 'rightbottom') {
      this.initialHeight += e.screenY - this.initialTop;
      this.initialWidth += e.screenX - this.initialLeft;
    }
    if (type === 'leftbottom') {
      this.initialHeight += e.screenY - this.initialTop;
      this.initialWidth += -e.screenX + this.initialLeft;
    }

    this.initialLeft = e.screenX;
    this.initialTop = e.screenY;
  };

  moveImage = (e) => {
    this.changeSize(e);
    this.setState({
      tempWidth: Math.abs(this.initialWidth),
      tempHeight: Math.abs(this.initialHeight),
    });
  };

  upImage = () => {
    const { imageEqualRatio } = this.props;
    if (imageEqualRatio) {
      this.confirmImageSizeEqualRatio();
    } else {
      this.confirmImageSize();
    }
    document.removeEventListener('mousemove', this.moveImage);
    document.removeEventListener('mouseup', this.upImage);
  };

  repareChangeSize = (type) => (e) => {
    this.reSizeType = type;
    const imageRect = this.imageElement.getBoundingClientRect();
    this.initialTop = 0;
    this.initialLeft = 0;
    this.initialWidth = imageRect.width;
    this.initialHeight = imageRect.height;
    this.zoom = imageRect.width / imageRect.height;
    e.preventDefault();
    document.addEventListener('mousemove', this.moveImage);
    document.addEventListener('mouseup', this.upImage);
  };

  lockEditor() {
    this.props.editor.lockOrUnlockEditor(true);
  }

  unlockEditor() {
    this.props.editor.lockOrUnlockEditor(false);
  }

  calcToolbarOffset() {
    const { getContainerNode, containerNode } = this.props;
    const container = getContainerNode ? getContainerNode() : containerNode;

    if (!container) {
      return 0;
    }

    const viewRect = container
      .querySelector('.bf-content')
      .getBoundingClientRect();
    const toolbarRect = this.toolbarElement.getBoundingClientRect();
    const imageRect = this.imageElement.getBoundingClientRect();

    const right =
      viewRect.right -
      (imageRect.right - imageRect.width / 2 + toolbarRect.width / 2);
    const left =
      imageRect.left +
      imageRect.width / 2 -
      toolbarRect.width / 2 -
      viewRect.left;

    if (right < 10) {
      return right - 10;
    } else if (left < 10) {
      return left * -1 + 10;
    } else {
      return 0;
    }
  }

  preventDragEvent = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  handleDragStart = () => {
    if (
      this.props.editor.editorProps.readOnly ||
      this.props.editor.editorProps.disabled
    ) {
      return false;
    }

    window.__BRAFT_DRAGING__IMAGE__ = {
      block: this.props.block,
      mediaData: {
        type: 'IMAGE',
        ...this.props.mediaData,
      },
    };

    this.setState(
      {
        toolbarVisible: false,
      },
      () => {
        this.unlockEditor();
      },
    );

    return true;
  };

  handleDragEnd = () => {
    window.__BRAFT_DRAGING__IMAGE__ = null;
    return false;
  };

  executeCommand = (command) => {
    if (typeof command === 'string') {
      const [method, param] = command.split('|');
      if (this[method]) {
        this[method](param);
      }
    } else if (typeof command === 'function') {
      command(
        this.props.block,
        this.props.mediaData,
        this.props.editor.getValue(),
      );
    }
  };

  removeImage = () => {
    this.props.editor.setValue(
      ContentUtils.removeBlock(this.props.editor.getValue(), this.props.block),
    );
    this.unlockEditor();
  };

  toggleLinkEditor = () => {
    this.setState((prevState) => ({
      linkEditorVisible: !prevState.linkEditorVisible,
      sizeEditorVisible: false,
    }));
  };

  toggleSizeEditor = () => {
    this.setState((prevState) => ({
      linkEditorVisible: false,
      sizeEditorVisible: !prevState.sizeEditorVisible,
    }));
  };

  handleLinkInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.confirmImageLink();
    }
  };

  setImageLink = (e) => {
    this.setState({ tempLink: e.currentTarget.value });
  };

  setImageLinkTarget(linkTarget) {
    let newLinkTarget;
    const hookReturns = this.props.hooks(
      'set-image-link-target',
      linkTarget,
    )(linkTarget);

    if (hookReturns === false) {
      return false;
    }

    if (typeof hookReturns === 'string') {
      newLinkTarget = hookReturns;
    }

    newLinkTarget = newLinkTarget === '_blank' ? '' : '_blank';
    this.props.editor.setValue(
      ContentUtils.setMediaData(
        this.props.editor.getValue(),
        this.props.entityKey,
        { newLinkTarget },
      ),
    );
    window.setImmediate(this.props.editor.forceRender);
    return true;
  }

  confirmImageLink = () => {
    let { tempLink: link } = this.state;
    const hookReturns = this.props.hooks('set-image-link', link)(link);

    if (hookReturns === false) {
      return false;
    }

    if (typeof hookReturns === 'string') {
      link = hookReturns;
    }

    if (link !== null) {
      this.props.editor.setValue(
        ContentUtils.setMediaData(
          this.props.editor.getValue(),
          this.props.entityKey,
          { link },
        ),
      );
      window.setImmediate(this.props.editor.forceRender);
    }
    return true;
  };

  handleSizeInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.confirmImageSize();
    }
  };

  setImageWidth = ({ currentTarget }) => {
    let { value } = currentTarget;

    if (value && !isNaN(value)) {
      value += 'px';
    }

    this.setState({
      tempWidth: value,
    });
  };

  setImageHeight = ({ currentTarget }) => {
    let { value } = currentTarget;

    if (value && !isNaN(value)) {
      value += 'px';
    }

    this.setState({
      tempHeight: value,
    });
  };

  confirmImageSize = () => {
    const { tempWidth: width, tempHeight: height } = this.state;
    let newImageSize = {};

    if (width !== null) {
      newImageSize.width = width;
    }
    if (height !== null) {
      newImageSize.height = height;
    }

    const hookReturns = this.props.hooks(
      'set-image-size',
      newImageSize,
    )(newImageSize);

    if (hookReturns === false) {
      return false;
    }

    if (hookReturns && (hookReturns.width || hookReturns.height)) {
      newImageSize = hookReturns;
    }

    this.props.editor.setValue(
      ContentUtils.setMediaData(
        this.props.editor.getValue(),
        this.props.entityKey,
        newImageSize,
      ),
    );
    window.setImmediate(this.props.editor.forceRender);
    return true;
  };

  confirmImageSizeEqualRatio = () => {
    const { tempWidth: width, tempHeight: height } = this.state;
    let equalWidth;
    let equalHeight;
    let newImageSize = {};
    // 宽度过大 图片等比缩放
    if (width / height > this.zoom) {
      equalWidth = Math.floor(height * this.zoom);
      this.setState({
        tempWidth: equalWidth,
      });
      equalHeight = height;
    } else if (width / height < this.zoom) {
      equalHeight = Math.floor(width / this.zoom);
      this.setState({
        tempHeight: equalHeight,
      });
      equalWidth = width;
    }
    if (equalWidth !== null) {
      newImageSize.width = equalWidth;
    }
    if (equalHeight !== null) {
      newImageSize.height = equalHeight;
    }

    const hookReturns = this.props.hooks(
      'set-image-size',
      newImageSize,
    )(newImageSize);

    if (hookReturns === false) {
      return false;
    }

    if (hookReturns && (hookReturns.width || hookReturns.height)) {
      newImageSize = hookReturns;
    }

    this.props.editor.setValue(
      ContentUtils.setMediaData(
        this.props.editor.getValue(),
        this.props.entityKey,
        newImageSize,
      ),
    );
    window.setImmediate(this.props.editor.forceRender);
    return true;
  };

  setImageFloat = (float) => {
    let newFloat = float;
    const hookReturns = this.props.hooks('set-image-float', newFloat)(newFloat);

    if (hookReturns === false) {
      return false;
    }

    if (typeof hookReturns === 'string') {
      newFloat = hookReturns;
    }

    this.props.editor.setValue(
      ContentUtils.setMediaPosition(
        this.props.editor.getValue(),
        this.props.block,
        { newFloat },
      ),
    );
    this.unlockEditor();
    return true;
  };

  setImageAlignment = (alignment) => {
    let newAlignment = alignment;
    const hookReturns = this.props.hooks(
      'set-image-alignment',
      newAlignment,
    )(newAlignment);

    if (hookReturns === false) {
      return false;
    }

    if (typeof hookReturns === 'string') {
      newAlignment = hookReturns;
    }

    this.props.editor.setValue(
      ContentUtils.setMediaPosition(
        this.props.editor.getValue(),
        this.props.block,
        { newAlignment },
      ),
    );
    this.unlockEditor();
    return true;
  };

  showToolbar = (event) => {
    if (
      this.props.editor.editorProps.readOnly ||
      this.props.editor.editorProps.disabled
    ) {
      return false;
    }

    event.preventDefault();

    if (!this.state.toolbarVisible) {
      this.setState(
        {
          toolbarVisible: true,
        },
        () => {
          this.lockEditor();
          this.setState({ toolbarOffset: this.calcToolbarOffset() });
        },
      );
    }
    return true;
  };

  hideToolbar = (event) => {
    event.preventDefault();

    this.setState(
      {
        toolbarVisible: false,
      },
      () => {
        this.unlockEditor();
        // this.props.editor.requestFocus()
      },
    );
  };

  render() {
    const { mediaData, language, imageControls, imageResizable } = this.props;
    const {
      toolbarVisible,
      toolbarOffset,
      linkEditorVisible,
      sizeEditorVisible,
      tempWidth,
      tempHeight,
    } = this.state;
    const blockData = this.props.block.getData();

    const float = blockData.get('float');
    let alignment = blockData.get('alignment');
    const { url, link, linkTarget, width, height, meta } = mediaData;
    const imageStyles = {};
    let clearFix = false;

    if (float) {
      alignment = null;
    } else if (alignment === 'left') {
      imageStyles.float = 'left';
      clearFix = true;
    } else if (alignment === 'right') {
      imageStyles.float = 'right';
      clearFix = true;
    } else if (alignment === 'center') {
      imageStyles.textAlign = 'center';
    } else {
      imageStyles.float = 'left';
      clearFix = true;
    }

    const renderedControlItems = imageControls.map((item) => {
      if (typeof item === 'string' && imageControlItems[item]) {
        return (
          <a
            className={item === 'link' && link ? 'active' : ''}
            role="presentation"
            key={uuidv4()}
            onClick={() => this.executeCommand(imageControlItems[item].command)}
          >
            {imageControlItems[item].text}
          </a>
        );
      } else if (item && (item.render || item.text)) {
        return item.render ? (
          item.render(mediaData, this.props.block)
        ) : (
          <a
            key={uuidv4()}
            role="presentation"
            onClick={() => item.onClick && this.executeCommand(item.onClick)}
          >
            {item.text}
          </a>
        );
      } else {
        return null;
      }
    });

    return (
      <div className="bf-media">
        <div
          style={imageStyles}
          draggable
          onMouseEnter={this.showToolbar}
          onMouseMove={this.showToolbar}
          onMouseLeave={this.hideToolbar}
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
          ref={this.mediaEmbederInstance}
          className="bf-image"
        >
          {toolbarVisible ? (
            <div
              style={{ marginLeft: toolbarOffset }}
              ref={this.toolbarElement}
              data-float={float}
              data-align={alignment}
              className="bf-media-toolbar"
            >
              {linkEditorVisible ? (
                <div className="bf-image-link-editor">
                  <div className="editor-input-group">
                    <input
                      type="text"
                      placeholder={
                        language.linkEditor.inputWithEnterPlaceHolder
                      }
                      onKeyDown={this.handleLinkInputKeyDown}
                      onChange={this.setImageLink}
                      defaultValue={link}
                    />
                    <button type="button" onClick={this.confirmImageLink}>
                      {language.base.confirm}
                    </button>
                  </div>
                  <div className="switch-group">
                    <Switch
                      active={linkTarget === '_blank'}
                      onClick={() => this.setImageLinkTarget(linkTarget)}
                    />
                    <label>{language.linkEditor.openInNewWindow}</label>
                  </div>
                </div>
              ) : null}
              {sizeEditorVisible ? (
                <div className="bf-image-size-editor">
                  <div className="editor-input-group">
                    <input
                      type="text"
                      placeholder={language.base.width}
                      onKeyDown={this.handleSizeInputKeyDown}
                      onChange={this.setImageWidth}
                      defaultValue={width}
                    />
                    <input
                      type="text"
                      placeholder={language.base.height}
                      onKeyDown={this.handleSizeInputKeyDown}
                      onChange={this.setImageHeight}
                      defaultValue={height}
                    />
                    <button type="button" onClick={this.confirmImageSize}>
                      {language.base.confirm}
                    </button>
                  </div>
                </div>
              ) : null}
              {renderedControlItems}
              <i
                style={{ marginLeft: toolbarOffset * -1 }}
                className="bf-media-toolbar-arrow"
              />
            </div>
          ) : null}
          <div
            style={{
              position: 'relative',
              width: `${width}px`,
              height: `${height}px`,
              display: 'inline-block',
            }}
          >
            <img
              ref={this.imageElement}
              src={url}
              alt="Alt"
              width={width}
              height={height}
              {...meta}
            />
            {toolbarVisible && imageResizable ? (
              <div
                role="presentation"
                className="bf-csize-icon right-bottom"
                onMouseDown={this.repareChangeSize('rightbottom')}
              />
            ) : null}
            {toolbarVisible && imageResizable ? (
              <div
                role="presentation"
                className="bf-csize-icon left-bottom"
                onMouseDown={this.repareChangeSize('leftbottom')}
              />
            ) : null}
            <div
              className={`bf-pre-csize ${this.reSizeType}`}
              style={{ width: `${tempWidth}px`, height: `${tempHeight}px` }}
            />
          </div>
        </div>
        {clearFix && (
          <div
            className="clearfix"
            style={{ clear: 'both', height: 0, lineHeight: 0, float: 'none' }}
          />
        )}
      </div>
    );
  }
}

Image.propTypes = {
  hooks: PropTypes.any,
  entityKey: PropTypes.any,
  block: PropTypes.any,
  mediaData: PropTypes.any,
  imageEqualRatio: PropTypes.any,
  editor: PropTypes.any,
  getContainerNode: PropTypes.any,
  containerNode: PropTypes.any,
  language: PropTypes.any,
  imageControls: PropTypes.any,
  imageResizable: PropTypes.any,
};

export default Image;
