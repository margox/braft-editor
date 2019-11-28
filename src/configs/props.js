export default {
  language: 'zh',
  controls: [
    'undo', 'redo', 'separator',
    'font-size', 'line-height', 'letter-spacing', 'separator',
    'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
    'superscript', 'subscript', 'remove-styles', 'emoji', 'separator',
    'text-indent', 'text-align', 'separator',
    'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
    'media', 'link', 'table', 'split', 'hr', 'separator',
    'clear', 'separator',
    'fullscreen'
  ],
  excludeControls: [],
  extendControls: [],
  extendAtomics: [],
  componentBelowControlBar: null,
  media: {
    pasteImage: true,
    imagePasteLimit: 5,
    image: true,
    video: true,
    audio: true,
    uploadFn: null,
    validateFn: null,
    onBeforeDeselect: null,
    onDeselect: null,
    onBeforeSelect: null,
    onSelect: null,
    onBeforeRemove: null,
    onRemove: null,
    onCancel: null,
    onFileSelect: null,
    onBeforeInsert: null,
    onInsert: null,
    onChange: null,
    accepts: {
      image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
      video: 'video/mp4',
      audio: 'audio/mp3'
    },
    externals: {
      audio: true,
      video: true,
      image: true,
      embed: true
    },
  },
  imageControls: [
    'float-left', 'float-right',
    'align-left', 'align-center', 'align-right',
    'link', 'size', 'remove'
  ],
  imageResizable: true,
  imageEqualRatio: true,
  colors: [
    '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
    '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784',
    '#c0392b', '#d35400', '#f39c12', '#fdda00'
  ],
  colorPicker: null,
  colorPickerTheme: 'dark',
  colorPickerAutoHide: true,
  codeTabIndents: 2,
  headings: ['header-one', 'header-two', 'header-three', 'header-four', 'header-five', 'header-six', 'unstyled'],
  textAligns: ['left', 'center', 'right', 'justify'],
  textBackgroundColor: true,
  allowInsertLinkText: false,
  defaultLinkTarget: '',
  letterSpacings: [0, 1, 2, 3, 4, 5, 6],
  lineHeights: [1, 1.2, 1.5, 1.75, 2, 2.5, 3, 4],
  fontSizes: [
    12, 14, 16, 18, 20, 24,
    28, 30, 32, 36, 40, 48,
    56, 64, 72, 96, 120, 144
  ],
  fontFamilies: [{
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: 'tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif'
  }],
  converts: {
    unitExportFn: (value, type) => type === 'line-height' ? value : `${value}px`,
  },
  emojis: [
    '🤣', '🙌', '💚', '💛', '👏', '😉', '💯',
    '💕', '💞', '💘', '💙', '💝', '🖤', '💜',
    '❤️', '😍', '😻', '💓', '💗', '😋', '😇',
    '😂', '😹', '😘', '💖', '😁', '😀', '🤞',
    '😲', '😄', '😊', '👍', '😌', '😃', '😅',
    '✌️', '🤗', '💋', '😗', '😽', '😚', '🤠',
    '😙', '😺', '👄', '😸', '😏', '😼', '👌',
    '😎', '😆', '😛', '🙏', '🤝', '🙂', '🤑',
    '😝', '😐', '😑', '🤤', '😤', '🙃', '🤡',
    '😶', '😪', '😴', '😵', '😓', '👊', '😦',
    '😷', '🤐', '😜', '🤓', '👻', '😥', '🙄',
    '🤔', '🤒', '🙁', '😔', '😯', '☹️', '☠️',
    '😰', '😩', '😖', '😕', '😒', '😣', '😢',
    '😮', '😿', '🤧', '😫', '🤥', '😞', '😬',
    '👎', '💀', '😳', '😨', '🤕', '🤢', '😱',
    '😭', '😠', '😈', '😧', '💔', '😟', '🙀',
    '💩', '👿', '😡', '😾', '🖕'
  ],
  stripPastedStyles: false,
  triggerChangeOnMount: true,
  className: '',
  style: {},
  controlBarClassName: '',
  controlBarStyle: {},
  contentClassName: '',
  contentStyle: {},
  draftProps: {},
  hooks: {},
  onChange: null,
  onFocus: null,
  onBlur: null,
  onTab: null,
  onDelete: null,
  onSave: null,
  fixPlaceholder: false
}
