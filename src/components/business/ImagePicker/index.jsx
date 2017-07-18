import './style.scss'
import React from 'react'
import Modal from 'components/common/Modal'

export default class ImagePicker extends React.Component {

  state = {
    visible: false,
    images: [],
    selected: []
  }

  componentDidMount () {

  }

  render () {

    const { visible } = this.state

    return (
      <Modal
        title="选取图像"
        width={640}
        height={480}
        visible={visible}
        onClose={() => this.hide()}
        onConfirm={() => this.onChange()}
      >
        <div className="braft-image-picker">
          <div className="braft-image-uploader">
            <div className="braft-image-upload-tip">
              <i className="icon-image"></i>
              <span>拖动文件至此或点击来上传图像.</span>
            </div>
          </div>
        </div>
      </Modal>
    )

  }

  onChange () {
    const { images, selected } = this.state
    this.props.onChange && this.props.onChange(images, selected)
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