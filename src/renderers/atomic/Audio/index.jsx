import './style.scss'
import React from 'react'

export default class Audio extends React.Component {

  render () {

    const { url, width, height, name } = this.props.mediaData

    return (
      <div className="braft-media-audio-holder">
        <i className="icon-music"></i>
        <h5>{name}</h5>
        <h6>{url}</h6>
      </div>
    )

  }

}