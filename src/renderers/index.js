import React from 'react'
import { Map } from 'immutable'
import Image from './atomic/Image'
import Video from './atomic/Video'
import Audio from './atomic/Audio'
import _blockStyleFn from './styles/blockStyles'
import _customStyleMap from './styles/inlineStyles'
import _decorators from './decorators'

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

export const getBlockRendererFn = (props) => (block) => {

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

export const blockStyleFn = _blockStyleFn
export const customStyleMap = _customStyleMap
export const decorators = _decorators