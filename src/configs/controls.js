import React from 'react'

export default (lang, editor) => [
  {
    key: 'undo',
    title: lang.controls.undo,
    text: <i className="bfi-undo"></i>,
    type: 'editor-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: lang.controls.redo,
    text: <i className="bfi-redo"></i>,
    type: 'editor-method',
    command: 'redo'
  }, {
    key: 'remove-styles',
    title: lang.controls.removeStyles,
    text: <i className="bfi-format_clear"></i>,
    type: 'editor-method',
    command: 'removeSelectionInlineStyles'
  }, {
    key: 'hr',
    title: lang.controls.hr,
    text: <i className="bfi-hr"></i>,
    type: 'editor-method',
    command: 'insertHorizontalLine'
  }, {
    key: 'bold',
    title: lang.controls.bold,
    text: <i className="bfi-bold"></i>,
    type: 'inline-style',
    command: 'bold'
  }, {
    key: 'italic',
    title: lang.controls.italic,
    text: <i className="bfi-italic"></i>,
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: lang.controls.underline,
    text: <i className="bfi-underlined"></i>,
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: lang.controls.strikeThrough,
    text: <i className="bfi-strikethrough"></i>,
    type: 'inline-style',
    command: 'strikethrough',
  }, {
    key: 'superscript',
    title: lang.controls.superScript,
    text: <i className="bfi-superscript"></i>,
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: lang.controls.subScript,
    text: <i className="bfi-subscript"></i>,
    type: 'inline-style',
    command: 'subscript'
  }, {
    key: 'headings',
    title: lang.controls.headings,
    type: 'headings',
  }, {
    key: 'blockquote',
    title: lang.controls.blockQuote,
    text: <i className="bfi-quote"></i>,
    type: 'block-type',
    command: 'blockquote',
  }, {
    key: 'code',
    title: lang.controls.code,
    text: <i className="bfi-code"></i>,
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list-ul',
    title: lang.controls.unorderedList,
    text: <i className="bfi-list"></i>,
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list-ol',
    title: lang.controls.orderedList,
    text: <i className="bfi-list-numbered"></i>,
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
  }, {
    key: 'line-height',
    title: lang.controls.lineHeight, 
    type: 'line-height'
  }, {
    key: 'letter-spacing',
    title: lang.controls.letterSpacing,
    type: 'letter-spacing'
  }, {
    key: 'text-indent',
    title: lang.controls.textIndent,
    type: 'text-indent'
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
    text: <i className="bfi-media"></i>,
    type: 'media'
  }, {
    key: 'emoji',
    title: lang.controls.emoji,
    text: <i className="bfi-emoji"></i>,
    type: 'emoji'
  }, {
    key: 'clear',
    title: lang.controls.clear,
    text: <i className="bfi-clear_all"></i>,
    type: 'editor-method',
    command: 'clearEditorContent'
  }, {
    key: 'fullscreen',
    title: editor.state.isFullscreen ? lang.controls.exitFullscreen : lang.controls.fullscreen,
    text: <i className={editor.state.isFullscreen ? 'bfi-fullscreen-exit' : 'bfi-fullscreen'}></i>,
    type: 'editor-method',
    command: 'toggleFullscreen'
  }, {
    key: 'modal',
    type: 'modal',
  }, {
    key: 'button',
    type: 'button',
  }, {
    key: 'dropdown',
    type: 'dropdown',
  }, {
    key: 'component',
    type: 'component',
  }
]

export const imageControlItems = {
  'float-left': {
    text: <span data-float="left">&#xe91e;</span>,
    command: 'setImageFloat|left'
  },
  'float-right': {
    text: <span data-float="right">&#xe914;</span>,
    command: 'setImageFloat|right'
  },
  'align-left': {
    text: <span data-align="left">&#xe027;</span>,
    command: 'setImageAlignment|left'
  },
  'align-center': {
    text: <span data-align="center">&#xe028;</span>,
    command: 'setImageAlignment|center'
  },
  'align-right': {
    text: <span data-align="right">&#xe029;</span>,
    command: 'setImageAlignment|right'
  },
  'size': {
    text: <span>&#xe3c2;</span>,
    command: 'toggleSizeEditor'
  },
  'link': {
    text: <span>&#xe91a;</span>,
    command: 'toggleLinkEditor'
  },
  'remove': {
    text: <span>&#xe9ac;</span>,
    command: 'removeImage'
  }
}