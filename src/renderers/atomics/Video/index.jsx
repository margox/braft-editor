import './style.scss'
import React from 'react'
import StaticContainer from 'components/common/StaticContainer'
import { ContentUtils } from 'braft-utils'

export default class Video extends React.Component {

  state = {
    toolbarVisible: false,
  }

  render () {

    const { toolbarVisible } = this.state
    const { mediaData, language } = this.props
    const { src, url, width, height, name, meta } = mediaData

    return (
      <div
        className="braft-media-video-holder"
        onMouseOver={this.showToolbar}
        onMouseLeave={this.hideToolbar}
      >
        <StaticContainer>
          <video controls src={src || url} poster={meta.poster}/>
        </StaticContainer>
        {toolbarVisible ? (
          <div className="braft-embed-toolbar">
            <a onClick={this.removeVideo}>&#xe9ac;</a>
          </div>
        ) : null}
      </div>
    )

  }

  removeVideo = () => {
    this.props.editor.setValue(ContentUtils.removeBlock(this.props.editorState, this.props.block))
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