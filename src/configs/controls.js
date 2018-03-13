import React from 'react'

export default (lang) => [
  {
    key: 'undo',
    title: lang.controls.undo,
    text: <i className="icon-undo"></i>,
    type: 'editor-state-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: lang.controls.redo,
    text: <i className="icon-redo"></i>,
    type: 'editor-state-method',
    command: 'redo'
  }, {
    key: 'hr',
    title: lang.controls.hr,
    text: <i className="icon-hr"></i>,
    type: 'editor-state-method',
    command: 'insertHorizontalLine'
  }, {
    key: 'bold',
    title: lang.controls.bold,
    text: <i className="icon-bold"></i>,
    type: 'inline-style',
    command: 'bold'
  },{
    key: 'italic',
    title: lang.controls.italic,
    text: <i className="icon-italic"></i>,
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: lang.controls.underline,
    text: <i className="icon-underlined"></i>,
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: lang.controls.strikeThrough,
    text: <i className="icon-strikethrough"></i>,
    type: 'inline-style',
    command: 'strikethrough',
  }, {
    key: 'superscript',
    title: lang.controls.superScript,
    text: <i className="icon-superscript"></i>,
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: lang.controls.subScript,
    text: <i className="icon-subscript"></i>,
    type: 'inline-style',
    command: 'subscript'
  }, {
    key: 'headings',
    title: lang.controls.headings,
    type: 'headings',
  }, {
    key: 'blockquote',
    title: lang.controls.blockQuote,
    text: <i className="icon-quote"></i>,
    type: 'block-type',
    command: 'blockquote',
  }, {
    key: 'code',
    title: lang.controls.code,
    text: <i className="icon-code"></i>,
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list_ul',
    title: lang.controls.unorderedList,
    text: <i className="icon-list"></i>,
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list_ol',
    title: lang.controls.orderedList,
    text: <i className="icon-list-numbered"></i>,
    type: 'block-type',
    command: 'ordered-list-item'
  }, {
    key: 'link',
    title: lang.controls.link,
    type: 'link'
  }, {
    key: 'text-color',
    title: lang.controls.color,
    type: 'text-color'
  },  {
    key: 'line-height',
    title: lang.controls.lineHeight, 
    type: 'line-height'
  }, {
    key: 'letter-spacing',
    title: lang.controls.letterSpacing,
    type: 'letter-spacing'
  }, {
    key: 'indent',
    title: lang.controls.indent,
    type: 'indent'
  },{
    key: 'font-size',
    title: lang.controls.fontSize,
    type: 'font-size'
  }, {
    key: 'font-family',
    title: lang.controls.fontFamily,
    type: 'font-family'
  }, {
    key: 'text-align',
    title: lang.controls.textAlign,
    type: 'text-align'
  }, {
    key: 'media',
    title: lang.controls.media,
    text: <i className="icon-media"></i>,
    type: 'media'
  }, {
    key: 'emoji',
    title: lang.controls.emoji,
    text: <i className="icon-emoji"></i>,
    type: 'emoji'
  }
]