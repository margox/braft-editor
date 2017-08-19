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

  const { entityKey, contentState } = props
  const { src, width, height } = contentState.getEntity(entityKey).getData()

  return (
    <img src={src} width={width} height={height} />
  )

}

export default {
  strategy: handleStrategy,
  component: Image
}