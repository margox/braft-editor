import React from 'react'

const Media = (props) => {

  const entityKey = props.block.getEntityAt(0)
  const entity = props.contentState.getEntity(props.block.getEntityAt(0))
  const mediaData = entity.getData()
  const mediaType = entity.getType()
  const { url, meta } = mediaData

  if (mediaType === 'IMAGE') {
    return (
      <img draggable="false" src={url} {...meta} />
    )
  } else if (mediaType === 'AUDIO') {
     return (
      <audio controls src={url} {...meta} />
    )
  } else if (mediaType === 'VIDEO') {
    return (
      <video controls src={url} {...meta} />
    )
  } else if (mediaType === 'FILE') {
    return (
      <a download={mediaData.name} href={url} {...meta}>{mediaData.name}</a>
    )
  }

  return null

}

export default (block) => {

  return block.getType() === 'atomic' ? {
    component: Media
  } : null

}