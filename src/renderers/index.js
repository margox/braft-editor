import React from 'react'
import ImageComponent from './Image'
import VideoComponent from './Video'
import AudioComponent from './Audio'

const getMediaComponent = (block, superProps) => (props) => {

  const entityKey = props.block.getEntityAt(0)
  const entity = props.contentState.getEntity(entityKey)
  const mediaData = entity.getData()
  const mediaType = entity.getType()
  const mediaProps = {
    ...superProps,
    block, mediaData, entityKey
  }

  if (mediaType === 'IMAGE') {
    return <ImageComponent { ...mediaProps } />
  } else if (mediaType === 'AUDIO') {
    return <AudioComponent { ...mediaProps } />
  } else if (mediaType === 'VIDEO') {
    return <VideoComponent { ...mediaProps } />
  }

  return null

}

export default (props) => (block) => {

  return block.getType() === 'atomic' ? {
    component: getMediaComponent(block, props),
    editable: false
  } : null

}