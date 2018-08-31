import './style.scss'
import React from 'react'
import StaticContainer from 'components/common/StaticContainer'
import { ContentUtils } from 'braft-utils'

export default class Audio extends React.Component {

  state = {
    toolbarVisible: false,
  }

  render () {

    const { toolbarVisible } = this.state
    const { mediaData, language } = this.props
    const { src, url, width, height, name } = mediaData

    return (
      <div
        className="braft-media-audio-holder"
        onMouseOver={this.showToolbar}
        onMouseLeave={this.hideToolbar}
      >
        <StaticContainer>
          <audio controls src={src || url}/>
        </StaticContainer>
        {toolbarVisible ? (
          <div className="braft-media-toolbar">
            <a onClick={this.removeAudio}>&#xe9ac;</a>
          </div>
        ) : null}
      </div>
    )

  }

  removeAudio = () => {
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