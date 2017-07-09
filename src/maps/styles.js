import colors from 'configs/colors'
import fontSizes from 'configs/fontSizes'

const colorStyles = {}
const bgColorStyles = {}
const fontSizeStyles = {}

colors.forEach((color, index) => {
  colorStyles['COLOR-' + index] = { color }
  bgColorStyles['BGCOLOR-' + index] = { backgroundColor: color }
})

fontSizes.forEach((fontSize) => {
  fontSizeStyles['FONTSIZE-' + fontSize] = { fontSize: fontSize + 'px' }
})

const styles = {
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
  ...fontSizeStyles
}

export default styles