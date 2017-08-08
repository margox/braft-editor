import React from 'react'
import ImageComponent from './image'
import VideoComponent from './video'
import AudioComponent from './audio'

const getMediaComponent = (superProps) => (props) => {

  const entityKey = props.block.getEntityAt(0)
  const entity = props.contentState.getEntity(props.block.getEntityAt(0))
  const mediaData = entity.getData()
  const mediaType = entity.getType()
  const mediaProps = {
    ...superProps,
    mediaData,
    entityKey
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
    component: getMediaComponent(props),
    editable: false
  } : null

}