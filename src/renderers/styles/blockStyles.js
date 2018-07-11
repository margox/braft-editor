export default (customBlockStyleFn) => (block) => {

  const blockAlignment = block.getData() && block.getData().get('textAlign')
  const blockFloat = block.getData() && block.getData().get('float')

  let result = ''

  if (blockAlignment) {
    result = `braft-${blockAlignment}-aligned-block`
  }

  if (blockFloat) {
    result += ` braft-float-${blockFloat}`
  }

  if (customBlockStyleFn) {
    result += customBlockStyleFn(block)
  }

  return result

}