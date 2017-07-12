export default function blockStyleFn (block) {

  const blockAlignment = block.getData() && block.getData().get('text-align')

  if (blockAlignment) {
    return `braft-${blockAlignment}-aligned-block`
  }

  return ''

}