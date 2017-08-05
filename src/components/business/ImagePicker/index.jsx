import './style.scss'
import React from 'react'
import Modal from 'components/common/Modal'

export default class ImagePicker extends React.Component {

  state = {
    visible: false,
    showDragUploader: true,
    showURLUploader: false,
    src: '',
    width: '',
    height: ''
  }

  componentDidMount () {

  }

  render () {

    const { visible, src, showDragUploader, showURLUploader } = this.state

    return (
      <Modal
        title={"选取图像"}
        width={640}
        height={480}
        visible={visible}
        onClose={() => this.hide()}
        onConfirm={() => this.onConfirm()}
      >
        <div className="braft-image-picker">
          <div className="braft-image-uploader">
          {showDragUploader ? (
            <div className="braft-image-drag-uploader">
              <span className="braft-image-upload-tip">点击或拖动图片至此</span>
              <div className="braft-image-uploader-switch-type">
                <button onClick={() => this.switchUploadType('url')}>输入图片地址</button>
              </div>
            </div>
          ) : null}
          {showURLUploader ? (
            <div className="braft-image-url-uploader">
              <div className="braft-image-url-input">
                <input value={src} onChange={(e) => this.setImageURL(e.target.value)} placeholder="输入图片地址并回车"/>
              </div>
              <div className="braft-image-uploader-switch-type">
                <button onClick={() => this.switchUploadType('drag')}>选择本地图片</button>
              </div>
            </div>
          ) : null}
          </div>
        </div>
      </Modal>
    )

  }

  onConfirm () {

    const { editorState, onChange } = this.state
    const { src, width, height } = this.state
    const entityData = { src, height, width }
    const entityKey = editorState
      .getCurrentContent()
      .createEntity('IMAGE', 'MUTABLE', entityData)
      .getLastCreatedEntityKey()
    const newEditorState = AtomicBlockUtils.insertAtomicBlock( editorState, entityKey, ' ')

    onChange(newEditorState)

  }

  setImageURL (imageURL) {
    this.setState({ imageURL })
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