import React from 'react'

const Media = (props) => {

  const entityKey = props.block.getEntityAt(0)

  if (typeof entityKey === 'undefined') {
    return null
  }

  const entity = props.contentState.getEntity(props.block.getEntityAt(0))
  const mediaData = entity.getData()
  const mediaType = entity.getType()

  if (mediaType === 'IMAGE') {
    return (
      <img draggable="false" {...mediaData} />
    )
  } else if (mediaType === 'AUDIO') {
     return (
      <audio {...mediaData} />
    )
  } else if (mediaType === 'VIDEO') {
    return (
      <video {...mediaData} />
    )
  }

  return null

}

export default (block) => {

  return block.getType() === 'atomic' ? {
    component: Media
  } : null

}