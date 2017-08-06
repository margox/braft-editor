import React from 'react'

const Media = (props) => {

  const entityKey = props.block.getEntityAt(0)
  const entity = props.contentState.getEntity(props.block.getEntityAt(0))
  const mediaData = entity.getData()
  const mediaType = entity.getType()

  if (mediaType === 'IMAGE') {
    return (
      <img draggable="false" {...mediaData} />
    )
  } else if (mediaType === 'AUDIO') {
     return (
      <audio controls {...mediaData} />
    )
  } else if (mediaType === 'VIDEO') {
    return (
      <video controls {...mediaData} />
    )
  } else if (mediaType === 'FILE') {
    return (
      <a download={mediaData.title} {...mediaData}>{mediaData.title}</a>
    )
  }

  return null

}

export default (block) => {

  return block.getType() === 'atomic' ? {
    component: Media
  } : null

}