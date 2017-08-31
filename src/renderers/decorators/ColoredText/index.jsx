import React from 'react'

function handleStrategy (contentBlock, callback, contentState) {

  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'COLORED-TEXT'
    )
  }, callback)

}

const ColoredText = (props) => {

  const { children, entityKey, contentState } = props
  const { color, backgroundColor } = contentState.getEntity(entityKey).getData()

  return (
    <span style={{ color, backgroundColor }}>{children}</span>
  )

}

export default {
  strategy: handleStrategy,
  component: ColoredText
}