export default (props) => {

  const colorStyles = {}
  const bgColorStyles = {}
  const fontSizeStyles = {}
  const fontFamilyStyles = {}

  props.colors.forEach((color) => {
    let color_id = color.replace('#', '')
    colorStyles['COLOR-' + color_id] = { color }
    bgColorStyles['BGCOLOR-' + color_id] = { backgroundColor: color }
  })

  props.fontSizes.forEach((fontSize) => {
    fontSizeStyles['FONTSIZE-' + fontSize] = { fontSize: fontSize }
  })

  props.fontFamilies.forEach((fontFamily) => {
    fontFamilyStyles['FONTFAMILY-' + fontFamily.name] = {
      fontFamily: fontFamily.family
    }
  })

  return {
    'SUPERSCRIPT': {
      position: 'relative',
      top: '-8px',
      fontSize: '11px'
    },
    'SUBSCRIPT': {
      position: 'relative',
      bottom: '-8px',
      fontSize: '11px'
    },
    ...colorStyles,
    ...bgColorStyles,
    ...fontSizeStyles,
    ...fontFamilyStyles
  }

}