import React from 'react'

export default [
  {
    key: 'undo',
    title: 'Undo',
    text: <i className="icon-undo"></i>,
    type: 'editor-state-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: 'Redo',
    text: <i className="icon-redo"></i>,
    type: 'editor-state-method',
    command: 'redo'
  }, {
    key: 'bold',
    title: 'Bold',
    text: <i className="icon-bold"></i>,
    type: 'inline-style',
    command: 'bold'
  }, {
    key: 'italic',
    title: 'Italic',
    text: <i className="icon-italic"></i>,
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: 'Underline',
    text: <i className="icon-underlined"></i>,
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: 'Strike Through',
    text: <i className="icon-strikethrough"></i>,
    type: 'inline-style',
    command: 'strikethrough',
  }, {
    key: 'superscript',
    title: 'Superscript',
    text: <i className="icon-superscript"></i>,
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: 'Subscript',
    text: <i className="icon-subscript"></i>,
    type: 'inline-style',
    command: 'subscript'
  }, {
    key: 'headings',
    type: 'block-type',
    dropdown: 'headings'
  }, {
    key: 'blockquote',
    title: 'Blockquote',
    text: <i className="icon-quote"></i>,
    type: 'block-type',
    command: 'blockquote',
  }, {
    key: 'code',
    title: 'Code Block',
    text: <i className="icon-code"></i>,
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list_ul',
    title: 'Unordered List',
    text: <i className="icon-list"></i>,
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list_ol',
    title: 'Ordered List',
    text: <i className="icon-list-numbered"></i>,
    type: 'block-type',
    command: 'ordered-list-item'
  }, {
    key: 'link',
    title: 'Link',
    text: <i className="icon-link"></i>,
    type: 'link'
  }
]

export const headings = [
  {
    key: 'header-one',
    title: 'Heading 1',
    text: <h1>Heading 1</h1>,
    type: 'block-type',
    command: 'header-one'
  }, {
    key: 'header-two',
    title: 'Heading 2',
    text: <h2>Heading 2</h2>,
    type: 'block-type',
    command: 'header-two'
  }, {
    key: 'header-three',
    title: 'Heading 3',
    text: <h3>Heading 3</h3>,
    type: 'block-type',
    command: 'header-three'
  }, {
    key: 'header-four',
    title: 'Heading 4',
    text: <h4>Heading 4</h4>,
    type: 'block-type',
    command: 'header-four'
  }, {
    key: 'header-five',
    title: 'Heading 5',
    text: <h5>Heading 5</h5>,
    type: 'block-type',
    command: 'header-five'
  }, {
    key: 'header-six',
    title: 'Heading 6',
    text: <h6>Heading 6</h6>,
    type: 'block-type',
    command: 'header-six'
  }, {
    key: 'unstyled',
    title: 'Normal',
    text: 'Normal',
    type: 'block-type',
    command: 'unstyled'
  }
]