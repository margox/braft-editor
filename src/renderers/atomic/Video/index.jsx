import React from 'react'

export default class Video extends React.Component {

  render () {

    const { url, width, height, name } = this.props.mediaData

    return (
      <video controls src={url} width={width} height={height} />
    )

  }

}