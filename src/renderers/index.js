import React from 'react'
import { Map } from 'immutable'
import Image from './Image'
import Video from './Video'
import Audio from './Audio'

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
    return <Image { ...mediaProps } />
  } else if (mediaType === 'AUDIO') {
    return <Audio { ...mediaProps } />
  } else if (mediaType === 'VIDEO') {
    return <Video { ...mediaProps } />
  }

  return null

}

export const getBlockRenderers = (props) => (block) => {

  return block.getType() === 'atomic' ? {
    component: getMediaComponent(block, props),
    editable: false
  } : null

}

export const blockRenderMap = Map({
  'atomic': {
    element: ''
  }
})