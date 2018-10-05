import { CompositeDecorator } from 'draft-js'
import { extensionDecorators } from 'helpers/extension'
import Link from './Link'

const builtinDecorators = [
  {
    type: 'LINK',
    component: Link
  }
]

const createStrategy = (type) => (contentBlock, callback, contentState) => {

  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === type
    )
  }, callback)

}

export default () => new CompositeDecorator([
  ...builtinDecorators,
  ...extensionDecorators
].map(item => ({
  strategy: createStrategy(item.type),
  component: item.component
})))