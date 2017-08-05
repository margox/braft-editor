import React from 'react'

function handleStrategy (contentBlock, callback, contentState) {

  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'IMAGE'
    )
  }, callback)

}

const Image = (props) => {

  const { children, entityKey, contentState } = props
  const { src, alt, width, height } = contentState.getEntity(entityKey).getData()

  return (
    <span><img src={src} alt={alt} width={width} height={height} /></span>
  )

}

export default {
  strategy: handleStrategy,
  component: Image
}