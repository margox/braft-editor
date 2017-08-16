import React from 'react'

export default class Audio extends React.Component {

  render () {

    const { url, width, height, name } = this.props.mediaData

    return (
      <audio controls src={url} width={width} height={height} />
    )

  }

}