import './style.scss'
import React from 'react'
import { showModal } from 'components/common/Modal'

export default class Video extends React.Component {

  state = {
    toolbarVisible: false,
    playerVisible: false
  }

  componentWillUnmount () {
    this.playerModal && this.playerModal.destroy()
  }

  render () {

    const { toolbarVisible, playerVisible } = this.state
    const { mediaData, language } = this.props
    const { url, width, height, name } = mediaData

    return (
      <div
        className="braft-media-video-holder"
        onMouseOver={this.showToolbar}
        onMouseLeave={this.hideToolbar}
      >
        <i className="braft-icon-film"></i>
        <h5>{name}</h5>
        <h6>{url}</h6>
        {toolbarVisible ? (
          <div
            ref={instance => this.toolbarElement = instance}
            className="braft-embed-video-toolbar"
          >
            <a onClick={this.showPlayer}>&#xe037;</a>
            <a onClick={this.removevideo}>&#xe9ac;</a>
          </div>
        ) : null}
      </div>
    )

  }

  showPlayer = () => {

    this.playerModal = showModal({
      title: this.props.language.videoPlayer.title,
      width: 480,
      confirmable: true,
      language: this.props.language,
      showCancel: false,
      onClose: this.handlePlayerClose,
      children: <video className="braft-embed-video-player" src={this.props.mediaData.url} controls/>
    })

  }

  removevideo = () => {
    this.props.editor.removeBlock(this.props.block)
  }

  showToolbar = () => {
    this.setState({
      toolbarVisible: true
    })
  }

  hideToolbar = () => {
    this.setState({
      toolbarVisible: false
    })
  }

  handlePlayerClose = () => {
    this.props.editor && this.props.editor.focus()
  }

}