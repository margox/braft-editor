import React from 'react'

export const getHeadings = (lang) => [
  {
    key: 'header-one',
    title: lang.controls.header + ' 1',
    text: <h1>{lang.controls.header} 1</h1>,
    type: 'block-type',
    command: 'header-one'
  }, {
    key: 'header-two',
    title: lang.controls.header + ' 2',
    text: <h2>{lang.controls.header} 2</h2>,
    type: 'block-type',
    command: 'header-two'
  }, {
    key: 'header-three',
    title: lang.controls.header + ' 3',
    text: <h3>{lang.controls.header} 3</h3>,
    type: 'block-type',
    command: 'header-three'
  }, {
    key: 'header-four',
    title: lang.controls.header + ' 4',
    text: <h4>{lang.controls.header} 4</h4>,
    type: 'block-type',
    command: 'header-four'
  }, {
    key: 'header-five',
    title: lang.controls.header + ' 5',
    text: <h5>{lang.controls.header} 5</h5>,
    type: 'block-type',
    command: 'header-five'
  }, {
    key: 'header-six',
    title: lang.controls.header + ' 6',
    text: <h6>{lang.controls.header} 6</h6>,
    type: 'block-type',
    command: 'header-six'
  }, {
    key: 'unstyled',
    title: lang.controls.normal,
    text: lang.controls.normal,
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

export const blocks = {
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-fiv': 'h5',
  'header-six': 'h6',
  'unstyled': 'p',
  'blockquote': 'blockquote'
}