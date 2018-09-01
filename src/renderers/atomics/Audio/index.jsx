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
    const { mediaData } = this.props
    const { src, url } = mediaData

    return (
      <div
        className='bf-audio'
        onMouseOver={this.showToolbar}
        onMouseLeave={this.hideToolbar}
      >
        <StaticContainer>
          <audio controls src={src || url}/>
        </StaticContainer>
        {toolbarVisible ? (
          <div className='bf-media-toolbar'>
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