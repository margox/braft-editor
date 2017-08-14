import React from 'react'

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