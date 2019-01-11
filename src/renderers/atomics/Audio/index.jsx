import './style.scss'
import React from 'react'
import PlayerModal from 'components/business/PlayerModal'
import { ContentUtils } from 'braft-utils'

export default class Audio extends React.Component {

  render () {

    const { mediaData, language } = this.props
    const { url, name, meta } = mediaData

    return (
      <div className='bf-audio-wrap'>
        <PlayerModal type="audio" onRemove={this.removeAudio} poster={meta ? meta.poster || '' : ''} language={language} url={url} name={name} title={language.audioPlayer.title}>
          <div className="bf-audio-player"><audio controls src={url}/></div>
        </PlayerModal>
      </div>
    )

  }

  removeAudio = () => {
    this.props.editor.setValue(ContentUtils.removeBlock(this.props.editorState, this.props.block))
  }

}