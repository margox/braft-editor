import React from 'react'
import { getVisibleSelectionRect } from 'draft-js'

const Media = (props) => {

  const entityKey = props.block.getEntityAt(0)
  const entity = props.contentState.getEntity(props.block.getEntityAt(0))
  const mediaData = entity.getData()
  const mediaType = entity.getType()
  const { url, meta } = mediaData

  if (mediaType === 'IMAGE') {
    return (
      <img onClick={(e) => {
        console.log(e.target.getBoundingClientRect())
      }} draggable="false" src={url} {...meta} />
    )
  } else if (mediaType === 'AUDIO') {
     return (
      <audio controls src={url} {...meta} />
    )
  } else if (mediaType === 'VIDEO') {
    return (
      <video controls src={url} {...meta} />
    )
  }

  return null

}

export default (block) => {

  return block.getType() === 'atomic' ? {
    component: Media,
    editable: false
  } : null

}