export default (customBlockStyleFn) => (block) => {

  const blockAlignment = block.getData() && block.getData().get('textAlign')
  const blockIndent = block.getData() && block.getData().get('textIndent')
  const blockFloat = block.getData() && block.getData().get('float')

  let result = ''

  if (blockAlignment) {
    result = `bfa-${blockAlignment}`
  }

  if (blockIndent && blockIndent !== 0) {
    result += ` bftd-${blockIndent}`
  }

  if (blockFloat) {
    result += ` bff-${blockFloat}`
  }

  if (customBlockStyleFn) {
    result += (customBlockStyleFn(block) || '')
  }

  return result

}