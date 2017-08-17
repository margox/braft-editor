export default {
  height: 500,
  language: 'zh',
  controls: [
    'undo', 'redo', 'split', 'font-size', 'font-family', 'text-color',
    'bold', 'italic', 'underline', 'strike-through', 'superscript',
    'subscript', 'text-align', 'split', 'headings', 'list_ul', 'list_ol',
    'blockquote', 'code', 'split', 'link', 'split', 'media'
  ],
  addonControls: [],
  media: {
    image: true,
    video: false,
    audio: true,
    uploadFn: null,
    sourceFn: null
  },
  colors: [
    '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
    '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784',
    '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50'
  ],
  fontSizes: [
    12, 14, 16, 18, 20, 24,
    28, 30, 32, 36, 40, 48,
    56, 64, 72, 96, 120, 144
  ],
  fontFamilies: [
    {
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
      family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
    }
  ]
}