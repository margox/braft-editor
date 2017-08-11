import React from 'react'

export default [
  {
    key: 'undo',
    title: '撤销',
    text: <i className="icon-undo"></i>,
    type: 'editor-state-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: '重做',
    text: <i className="icon-redo"></i>,
    type: 'editor-state-method',
    command: 'redo'
  }, {
    key: 'bold',
    title: '加粗',
    text: <i className="icon-bold"></i>,
    type: 'inline-style',
    command: 'bold'
  }, {
    key: 'italic',
    title: '斜体',
    text: <i className="icon-italic"></i>,
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: '下划线',
    text: <i className="icon-underlined"></i>,
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: '删除线',
    text: <i className="icon-strikethrough"></i>,
    type: 'inline-style',
    command: 'strikethrough',
  }, {
    key: 'superscript',
    title: '上标',
    text: <i className="icon-superscript"></i>,
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: '下标',
    text: <i className="icon-subscript"></i>,
    type: 'inline-style',
    command: 'subscript'
  }, {
    key: 'headings',
    title: '标题',
    type: 'headings',
  }, {
    key: 'blockquote',
    title: '引用',
    text: <i className="icon-quote"></i>,
    type: 'block-type',
    command: 'blockquote',
  }, {
    key: 'code',
    title: '代码块',
    text: <i className="icon-code"></i>,
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list_ul',
    title: '无序列表',
    text: <i className="icon-list"></i>,
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list_ol',
    title: '有序列表',
    text: <i className="icon-list-numbered"></i>,
    type: 'block-type',
    command: 'ordered-list-item'
  }, {
    key: 'link',
    title: '超链接',
    type: 'link'
  }, {
    key: 'text-color',
    title: '颜色',
    type: 'text-color'
  }, {
    key: 'font-size',
    title: '字号',
    type: 'font-size'
  }, {
    key: 'font-family',
    title: '字体',
    type: 'font-family'
  }, {
    key: 'text-align',
    title: '文本对齐',
    type: 'text-align'
  }, {
    key: 'media',
    title: '图像',
    text: <i className="icon-media"></i>,
    type: 'media'
  }
]

export const headings = [
  {
    key: 'header-one',
    title: '标题 1',
    text: <h1>标题 1</h1>,
    type: 'block-type',
    command: 'header-one'
  }, {
    key: 'header-two',
    title: '标题 2',
    text: <h2>标题 2</h2>,
    type: 'block-type',
    command: 'header-two'
  }, {
    key: 'header-three',
    title: '标题 3',
    text: <h3>标题 3</h3>,
    type: 'block-type',
    command: 'header-three'
  }, {
    key: 'header-four',
    title: '标题 4',
    text: <h4>标题 4</h4>,
    type: 'block-type',
    command: 'header-four'
  }, {
    key: 'header-five',
    title: '标题 5',
    text: <h5>标题 5</h5>,
    type: 'block-type',
    command: 'header-five'
  }, {
    key: 'header-six',
    title: '标题 6',
    text: <h6>标题 6</h6>,
    type: 'block-type',
    command: 'header-six'
  }, {
    key: 'unstyled',
    title: '常规',
    text: '常规',
    type: 'block-type',
    command: 'unstyled'
  }
]

export const colors = [
  '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
  '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784',
  '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50'
]

export const fontSizes = [
  12, 14, 16, 18, 20, 24,
  28, 30, 32, 36, 40, 48,
  56, 64, 72, 96, 120, 144
]

export const fontFamilies = [
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