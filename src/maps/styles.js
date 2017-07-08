import colors from 'configs/colors'

const colorStyles = {}
const bgColorStyles = {}

colors.forEach((color, index) => {
  colorStyles['COLOR-' + index] = { color }
  bgColorStyles['BGCOLOR-' + index] = { backgroundColor: color }
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
  ...bgColorStyles
}

export default styles