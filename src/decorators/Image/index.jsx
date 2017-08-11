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
  let { url, width, height } = contentState.getEntity(entityKey).getData()

  return (
    <img src={url} width={width} height={height} />
  )

}

export default {
  strategy: handleStrategy,
  component: Image
}