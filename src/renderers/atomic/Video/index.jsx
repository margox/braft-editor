import './style.scss'
import React from 'react'

export default class Video extends React.Component {

  render () {

    const { url, width, height, name } = this.props.mediaData

    return (
      <div className="braft-media-video-holder">
        <i className="icon-film"></i>
        <h5>{name}</h5>
        <h6>{url}</h6>
      </div>
    )

  }

}