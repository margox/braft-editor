import React from 'react'

export const inlineControls = [
  {
    key: 'bold',
    title: 'Bold',
    style: 'BOLD',
    icon: <i className="icon-bold"></i>
  },
  {
    key: 'italic',
    title: 'Italic',
    style: 'ITALIC',
    icon: <i className="icon-italic"></i>
  },
  {
    key: 'decorations',
    children: [
      {
        key: 'underline',
        style: 'UNDERLINE',
        icon: <i className="icon-underlined"></i>
      },
      {
        key: 'strikethrough',
        title: 'Strike Through',
        style: 'STRIKETHROUGH',
        icon: <i className="icon-strikethrough"></i>
      }
    ]
  },
  {
    key: 'scripts',
    children: [
      {
        key: 'superscript',
        title: 'Super Script',
        style: 'SUPERSCRIPT',
        icon: <i className="icon-superscript"></i>
      },
      {
        key: 'subscript',
        title: 'Sub Script',
        style: 'SUBSCRIPT',
        icon: <i className="icon-subscript"></i>
      }
    ] 
  }
]