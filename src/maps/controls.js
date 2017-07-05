import React from 'react'

export const InlineStyleControls = [
  {
    key: 'bold',
    title: 'Bold',
    style: 'BOLD',
    text: <i className="icon-bold"></i>
  },
  {
    key: 'italic',
    title: 'Italic',
    style: 'ITALIC',
    text: <i className="icon-italic"></i>
  },
  {
    key: 'underline',
    title: 'Underline',
    style: 'UNDERLINE',
    text: <i className="icon-underlined"></i>
  },
  {
    key: 'strike-through',
    title: 'Strike Through',
    style: 'STRIKETHROUGH',
    text: <i className="icon-strikethrough"></i>
  },
  {
    key: 'superscript',
    title: 'Superscript',
    style: 'SUPERSCRIPT',
    text: <i className="icon-superscript"></i>
  },
  {
    key: 'subscript',
    title: 'Subscript',
    style: 'SUBSCRIPT',
    text: <i className="icon-subscript"></i>
  }
]

export const BlockTypeControls = [
  {
    key: 'headings',
    children: [
      {
        key: 'header-one',
        title: 'Heading 1',
        text: <h1>Heading 1</h1>,
        type: 'header-one'
      },
      {
        key: 'header-two',
        title: 'Heading 2',
        text: <h2>Heading 2</h2>,
        type: 'header-two'
      },
      {
        key: 'header-three',
        title: 'Heading 3',
        text: <h3>Heading 3</h3>,
        type: 'header-three'
      },
      {
        key: 'header-four',
        title: 'Heading 4',
        text: <h4>Heading 4</h4>,
        type: 'header-four'
      },
      {
        key: 'header-five',
        title: 'Heading 5',
        text: <h5>Heading 5</h5>,
        type: 'header-five'
      },
      {
        key: 'header-six',
        title: 'Heading 6',
        text: <h6>Heading 6</h6>,
        type: 'header-six'
      },
      {
        key: 'unstyled',
        title: 'Normal',
        text: 'Normal',
        type: 'unstyled'
      }
    ]
  },
  {
    key: 'blockquote',
    title: 'Blockquote',
    type: 'blockquote',
    text: <i className="icon-quote"></i>
  },
  {
    key: 'code',
    title: 'Code Block',
    type: 'code-block',
    text: <i className="icon-code"></i>
  },
  {
    key: 'list_ul',
    title: 'Unordered List',
    type: 'unordered-list-item',
    text: <i className="icon-list"></i>
  },
  {
    key: 'list_ol',
    title: 'Ordered List',
    type: 'ordered-list-item',
    text: <i className="icon-list-numbered"></i>
  }
]