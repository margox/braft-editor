import './style.scss'
import React from 'react'
import PlayerModal from 'components/business/PlayerModal'
import { ContentUtils } from 'braft-utils'

export default class Video extends React.Component {

  render () {

    const { mediaData, language } = this.props
    const { url, name, meta } = mediaData

    return (
      <div className='bf-video-wrap'>
        <PlayerModal type="video" onRemove={this.removeVideo} poster={meta ? meta.poster || '' : ''} language={language} url={url} name={name} title={language.videoPlayer.title}>
          <div className="bf-video-player"><video controls src={url} poster={meta ? meta.poster || '' : ''}/></div>
        </PlayerModal>
      </div>
    )

  }

  removeVideo = () => {
    this.props.editor.setValue(ContentUtils.removeBlock(this.props.editorState, this.props.block))
  }

}