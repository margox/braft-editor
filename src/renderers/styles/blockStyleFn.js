export default (customBlockStyleFn) => (block) => {

  const blockAlignment = block.getData() && block.getData().get('textAlign')
  const blockFloat = block.getData() && block.getData().get('float')

  let result = ''

  if (blockAlignment) {
    result = `bfa-${blockAlignment}`
  }

  if (blockFloat) {
    result += ` bff-${blockFloat}`
  }

  if (customBlockStyleFn) {
    result += customBlockStyleFn(block)
  }

  return result

}