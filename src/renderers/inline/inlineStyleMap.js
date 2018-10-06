import { extensionInlineStyleMap } from 'helpers/extension'

export default (customStyleMap = {}) => ({
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
  ...extensionInlineStyleMap,
  ...customStyleMap
})