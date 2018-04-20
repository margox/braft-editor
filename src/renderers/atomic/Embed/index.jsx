import './style.scss'
import React from 'react'

export default class Embed extends React.Component {

  state = {
    toolbarVisible: false
  }

  render () {

    const { toolbarVisible } = this.state
    const { mediaData, language } = this.props
    const { url, width, height, name } = mediaData

    return (
      <div
        className="braft-media-video-holder"
        onMouseOver={this.showToolbar}
        onMouseLeave={this.hideToolbar}
      >
        <i className="braft-icon-code"></i>
        <h5>{name}</h5>
        <h6>{url}</h6>
        {toolbarVisible ? (
          <div
            ref={instance => this.toolbarElement = instance}
            className="braft-embed-video-toolbar"
          >
            <a onClick={this.removeEmbed}>&#xe9ac;</a>
          </div>
        ) : null}
      </div>
    )

  }

  removeEmbed = () => {
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

}