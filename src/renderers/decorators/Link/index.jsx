import React from 'react'

function handleStrategy (contentBlock, callback, contentState) {

  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'LINK'
    )
  }, callback)

}

const Link = (props) => {

  const { children, entityKey, contentState } = props
  const { href, target } = contentState.getEntity(entityKey).getData()

  return (
    <span className="braft-link-wrap">
      <a className="braft-link" href={href} target={target}>{children}</a>
    </span>
  )

}

export default {
  strategy: handleStrategy,
  component: Link
}