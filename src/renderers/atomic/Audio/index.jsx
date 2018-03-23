import './style.scss'
import React from 'react'
import { showModal } from 'components/common/Modal'

export default class Audio extends React.Component {

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
        className="braft-media-audio-holder"
        onMouseOver={this.showToolbar}
        onMouseLeave={this.hideToolbar}
      >
        <i className="braft-icon-music"></i>
        <h5>{name}</h5>
        <h6>{url}</h6>
        {toolbarVisible ? (
          <div
            ref={instance => this.toolbarElement = instance}
            className="braft-embed-audio-toolbar"
          >
            <a onClick={this.showPlayer}>&#xe037;</a>
            <a onClick={this.removeAudio}>&#xe9ac;</a>
          </div>
        ) : null}
      </div>
    )

  }

  showPlayer = () => {

    this.playerModal = showModal({
      title: this.props.language.audioPlayer.title,
      width: 480,
      confirmable: true,
      language: this.props.language,
      showCancel: false,
      onClose: this.handlePlayerClose,
      onConfirm: this.handlePlayerClose,
      children: <audio className="braft-embed-audio-player" src={this.props.mediaData.url} controls/>
    })

  }

  removeAudio = () => {
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
    this.playerModal = null
    this.props.editor && this.props.editor.focus()
  }

}