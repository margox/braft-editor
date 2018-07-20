import React from 'react'
import { Map } from 'immutable'
import { DefaultDraftBlockRenderMap } from 'draft-js'
import Image from './atomics/Image'
import Video from './atomics/Video'
import Audio from './atomics/Audio'
import Embed from './atomics/Embed'
import HorizontalLine from './atomics/HorizontalLine'
import _getBlockStyleFn from './styles/blockStyles'
import _getCustomStyleMap from './styles/inlineStyles'
import _decorators from './decorators'

const getAtomicBlockComponent = (block, superProps) => (props) => {

  const entityKey = props.block.getEntityAt(0)

  if (!entityKey) {
    return null
  }

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
  } else if (mediaType === 'EMBED') {
    return <Embed { ...mediaProps } />
  } else if (mediaType === 'HR') {
    return <HorizontalLine { ...mediaProps } />
  }

  if (superProps.extendAtomics) {
    const atomics = superProps.extendAtomics;
    for (let i = 0; i < atomics.length; i++) {
      if (mediaType === atomics[i].type) {
        const Component = atomics[i].component;
        return <Component {...mediaProps} />
      }
    }
  }

  return null

}

export const getBlockRendererFn = (props, customBlockRendererFn) => (block) => {

  let blockRenderer = null

  if (block.getType() === 'atomic') {

    blockRenderer = {
      component: getAtomicBlockComponent(block, props),
      editable: false
    }

  } else if (customBlockRendererFn) {
    blockRenderer = customBlockRendererFn(block) || null
  }

  return blockRenderer

}

export const customBlockRenderMap = Map({
  'atomic': {
    element: ''
  },
  'code-block': {
    element: 'code',
    wrapper: DefaultDraftBlockRenderMap.get('code-block').wrapper
  }
})

export const getBlockStyleFn = _getBlockStyleFn
export const getCustomStyleMap = _getCustomStyleMap
export const decorators = _decorators