import { getExtensionInlineStyleMap } from 'helpers/extension';

export default (props, customStyleMap = {}) => {
  const extensionInlineStyleMap = getExtensionInlineStyleMap(props.editorId);

  return {
    SUPERSCRIPT: {
      position: 'relative',
      top: '-8px',
      fontSize: '11px',
    },
    SUBSCRIPT: {
      position: 'relative',
      bottom: '-8px',
      fontSize: '11px',
    },
    ...extensionInlineStyleMap,
    ...customStyleMap,
  };
};
