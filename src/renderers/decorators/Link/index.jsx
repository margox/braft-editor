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
    <span className='bf-link-wrap'>
      <a onClick={(event) => viewLink(event, href)} className='bf-link' href={href} target={target}>{children}</a>
    </span>
  )

}

const viewLink = (event, link) => {
  if (event.getModifierState('Shift')) {
    const tempLink = document.createElement('a')
    tempLink.href = link
    tempLink.target = '_blank'
    tempLink.click()
  }
}

export default {
  strategy: handleStrategy,
  component: Link
}