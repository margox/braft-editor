import React from 'react'
import Image from 'renderers/atomics/Image'
import Video from 'renderers/atomics/Video'
import Audio from 'renderers/atomics/Audio'
import Embed from 'renderers/atomics/Embed'
import HorizontalLine from 'renderers/atomics/HorizontalLine'
import { extensionBlockRendererFns } from 'helpers/extension'

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
    const atomics = superProps.extendAtomics
    for (let i = 0; i < atomics.length; i++) {
      if (mediaType === atomics[i].type) {
        const Component = atomics[i].component
        return <Component {...mediaProps} />
      }
    }
  }

  return null

}

export default (props, customBlockRendererFn) => (block) => {

  let blockRenderer = null

  if (customBlockRendererFn) {
    blockRenderer = customBlockRendererFn(block) || null
  }

  if (blockRenderer) {
    return blockRenderer
  }

  Object.keys(extensionBlockRendererFns).find(key => {
    const matchedResult = extensionBlockRendererFns[key](block, props)
    matchedResult && (blockRenderer = matchedResult)
    return !!matchedResult
  })

  if (blockRenderer) {
    return blockRenderer
  }

  if (block.getType() === 'atomic') {
    blockRenderer = {
      component: getAtomicBlockComponent(block, props),
      editable: false
    }
  }

  return blockRenderer

}