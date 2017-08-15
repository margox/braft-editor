import { colors, fontSizes, fontFamilies } from 'configs/maps'

export default (props) => {

  const colorStyles = {}
  const bgColorStyles = {}
  const fontSizeStyles = {}
  const fontFamilyStyles = {}

  colors.forEach((color, index) => {
    colorStyles['COLOR-' + index] = { color }
    bgColorStyles['BGCOLOR-' + index] = { backgroundColor: color }
  })

  fontSizes.forEach((fontSize) => {
    fontSizeStyles['FONTSIZE-' + fontSize] = { fontSize: fontSize }
  })

  fontFamilies.forEach((fontFamily, index) => {
    fontFamilyStyles['FONTFAMILY-' + index] = {
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