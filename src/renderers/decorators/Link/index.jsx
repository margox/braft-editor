import React from 'react'

export default (props) => {

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