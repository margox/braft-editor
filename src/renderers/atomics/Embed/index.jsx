import './style.scss'
import React from 'react'
import PlayerModal from 'components/business/PlayerModal'
import { ContentUtils } from 'braft-utils'

export default class Embed extends React.Component {

  state = {
    toolbarVisible: false,
  }

  render () {

    const { toolbarVisible } = this.state
    const { mediaData, language } = this.props
    const { url } = mediaData

    return (
      <div
        className='bf-embed'
        onMouseOver={this.showToolbar}
        onMouseLeave={this.hideToolbar}
      >
        <PlayerModal language={language} title="播放嵌入式内容">
          <div className='bf-embed-player' dangerouslySetInnerHTML={{ __html: url}}></div>
        </PlayerModal>
        {toolbarVisible ? (
          <div className='bf-media-toolbar'>
            <a onClick={this.removeEmbed}>&#xe9ac;</a>
          </div>
        ) : null}
      </div>
    )

  }

  removeEmbed = () => {
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