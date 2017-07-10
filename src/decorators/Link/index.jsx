import React from 'react'

const strategy = (contentBlock, callback, contentState) => {

  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK')
  }, callback)

}

class Link extends React.Component {

  render () {

    const { children, entityKey, contentState } = this.props
    const { url, target } = contentState.getEntity(entityKey).getData()

    return (
      <span><a href={url} target={target}>{children}</a></span>
    )

  }

}

export default { strategy, component: Link }