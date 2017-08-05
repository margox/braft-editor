import './style.scss'
import React from 'react'
import { AtomicBlockUtils, EditorState } from 'draft-js'
import Modal from 'components/common/Modal'
import { imageToURL } from 'utils/base'

export default class ImagePicker extends React.Component {

  state = {
    visible: false,
    showDragUploader: true,
    showURLUploader: false,
    showPreview: false,
    uploading: false,
    error: false,
    inputedURL: '',
    src: '',
    width: '',
    height: ''
  }

  render () {

    const { visible, src, inputedURL, showPreview, showDragUploader, showURLUploader } = this.state

    return (
      <Modal
        title={"插入图片"}
        width={640}
        height={480}
        visible={visible}
        className="braft-image-picker-modal"
        onClose={() => this.hide()}
        onCancel={() => this.hide()}
        onConfirm={() => this.onConfirm()}
      >
        <div className="braft-image-picker">
          <div className="braft-image-uploader">
          {showPreview ? (
            <div className="braft-image-previewer">
              <img src={src} />
              <div className="braft-image-uploader-tools">
                <button onClick={() => this.resetImage()}><i className="icon-close"></i></button>
                <button ><i className="icon-align-left"></i></button>
                <button ><i className="icon-align-center"></i></button>
                <button ><i className="icon-align-right"></i></button>
              </div>
            </div>
          ) : null}
          {showDragUploader ? (
            <div className="braft-image-drag-uploader">
              <span className="braft-image-upload-tip">
                <input onChange={(e) => this.handleImagePicked(e.target.files)} type="file" accept="image/png,image/jpeg,image/gif"/>
                点击或拖动图片至此
              </span>
              <div className="braft-image-uploader-switch-type">
                <button onClick={() => this.switchUploadType('url')}>或输入图片地址</button>
              </div>
            </div>
          ) : null}
          {showURLUploader ? (
            <div className="braft-image-url-uploader">
              <div className="braft-image-url-input">
                <input onKeyDown={(e) => this.confirmInput(e.keyCode)} value={inputedURL} onChange={(e) => this.inputURL(e.target.value)} placeholder="输入图片地址并回车"/>
              </div>
              <div className="braft-image-uploader-switch-type">
                <button onClick={() => this.switchUploadType('drag')}>或选择本地图片</button>
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
    const { src, width, height } = this.state
    const entityData = { src, height, width }
    const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', entityData)
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

  resetImage () {
    this.setState({
      showPreview: false,
      src: '',
      inputedURL: ''
    })
  }

  setImageSrc (src) {
    this.setState({ src })
  }

  handleImagePicked (files) {

    let file = files[0]
    let uploadFn = this.props.uploadFn || imageToURL

    if (file.type.indexOf('image/') === -1) {
      // TODO: show error toast.
      return false
    }

    this.setState({
      uploading: true
    })

    uploadFn(file).then((src) => {
      this.setState({
        uploading: false,
        showPreview: true,
        src
      })
    })

  }

  switchUploadType (type) {
    this.setState({
      showDragUploader: type === 'drag',
      showURLUploader: type === 'url'
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