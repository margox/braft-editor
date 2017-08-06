import './style.scss'
import React from 'react'
import { AtomicBlockUtils, EditorState } from 'draft-js'
import Modal from 'components/common/Modal'
import { imageToURL } from 'utils/base'

export default class MediaPicker extends React.Component {

  state = {
    visible: false,
    showDragUploader: true,
    showURLUploader: false,
    showPreview: false,
    draging: false,
    uploading: false,
    error: false,
    inputedURL: '',
    type: 'IMAGE',
    src: '',
    width: '',
    height: ''
  }

  render () {

    const {
      visible,
      type,
      src,
      inputedURL,
      draging,
      showPreview,
      showDragUploader,
      showURLUploader
    } = this.state

    return (
      <Modal
        title={"插入多媒体文件"}
        width={640}
        height={480}
        visible={visible}
        className="braft-media-picker-modal"
        showClose={true}
        showCancel={true}
        confirmable={src}
        onClose={() => this.hide()}
        onCancel={() => this.hide()}
        onConfirm={() => this.onConfirm()}
      >
        <div className="braft-media-picker">
          <div className="braft-media-uploader">
          {showPreview ? this.buildPreviewer() : null}
          {showDragUploader ? (
            <div
              onDragEnter={(e) => this.handleDragEnter(e)}
              onDragLeave={(e) => this.handleDragLeave(e)}
              onDrop={(e) => this.handleDrop(e)}
              className={"braft-media-drag-uploader " + (draging ? 'active' : '')}
            >
              <span className="braft-media-drag-tip">
                <input onChange={(e) => this.handleMediaPicked(e.target.files)} type="file"/>
                {draging ? '松开鼠标以上传' : '点击或拖动文件至此'}
              </span>
              <div className="braft-media-uploader-switch-mode">
                <button onClick={() => this.switchUploadMode('url')}>或输入在线地址</button>
              </div>
            </div>
          ) : null}
          {showURLUploader ? (
            <div className="braft-media-url-uploader">
              <div className="braft-media-url-input">
                <input onKeyDown={(e) => this.confirmInput(e.keyCode)} value={inputedURL} onChange={(e) => this.inputURL(e.target.value)} placeholder="输入在线地址并回车"/>
                <div data-type={type} className="braft-media-switch-type">
                  <button onClick={(e) => this.switchMediaType(e)} data-type="IMAGE">图片</button>
                  <button onClick={(e) => this.switchMediaType(e)} data-type="VIDEO">视频</button>
                  <button onClick={(e) => this.switchMediaType(e)} data-type="AUDIO">音频</button>
                  <button onClick={(e) => this.switchMediaType(e)} data-type="FILE">其他</button>
                </div>
              </div>
              <div className="braft-media-uploader-switch-mode">
                <button onClick={() => this.switchUploadMode('drag')}>或选择本地文件</button>
              </div>
            </div>
          ) : null}
          </div>
        </div>
      </Modal>
    )

  }

  onConfirm () {

    const { editorState, contentState, onChange } = this.props
    const { type, src, width, height } = this.state

    if (!src) {
      return false
    }

    const entityData = { src, height, width }
    const contentStateWithEntity = contentState.createEntity(type, 'IMMUTABLE', entityData)
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

    onChange(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '))

    this.hide()

  }

  inputURL (inputedURL) {
    this.setState({ inputedURL })
  }

  confirmInput (keyCode) {
    if (keyCode === 13) {
      this.setState({
        src: this.state.inputedURL,
        showPreview: true
      })
    }
  }

  handleDragEnter (e) {
    this.setState({
      draging: true
    })
  }

  handleDragLeave (e) {
    this.setState({
      draging: false
    })
  }

  handleDrop (e) {
    console.log(e)
    e.preventDefault()
  }

  switchMediaType (e) {
    this.setState({
      type: e.target.dataset.type
    })
  }

  resetMedia () {
    this.setState({
      showPreview: false,
      src: '',
      inputedURL: ''
    })
  }

  handleMediaPicked (files) {

    let file = files[0]
    let uploadFn = this.props.uploadFn
    let type = 'FILE'

    if (file.type.indexOf('image/') === 0) {
      uploadFn = uploadFn || imageToURL
      type = 'IMAGE'
    } else if (file.type.indexOf('video/') === 0) {
      if (!uploadFn) {
        return false
      }
      type = 'VIDEO'
    } else if (file.type.indexOf('audio/') === 0) {
      if (!uploadFn) {
        return false
      }
      type = 'AUDIO'
    } else {
      if (!uploadFn) {
        return false
      }
      type = 'FILE'
    }

    this.setState({
      uploading: true
    })

    uploadFn(file).then((src) => {
      this.setState({
        uploading: false,
        showPreview: true,
        type, src
      })
    })

  }

  buildPreviewer () {

    let previewerComponents = null
    const { type, src } = this.state

    if (type === 'IMAGE') {
      previewerComponents = <img className="braft-media-image" src={src} />
    } else if (type === 'VIDEO') {
      previewerComponents = <video className="braft-media-video" controls src={src} />
    } else if (type === 'AUDIO') {
      previewerComponents = <audio className="braft-media-audio" controls src={src} />
    } else {
      previewerComponents = <a className="braft-media-file" href={src}>{src}</a>
    }

    return (
      <div className="braft-media-previewer">
        <div className="braft-media-preview-content">{previewerComponents}</div>
        <div className="braft-media-preview-tools">
          <button onClick={() => this.resetMedia()}><i className="icon-close"></i></button>
        </div>
      </div>
    )

  }

  switchUploadMode (mode) {
    this.setState({
      showDragUploader: mode === 'drag',
      showURLUploader: mode === 'url'
    })
  }

  show () {
    this.setState({
      visible: true
    })
  }

  hide () {
    this.setState({
      visible: false
    })
  }

}