import './styles.scss'
import React from 'react'
import PrismDecorator from 'draft-js-prism'
import Prism from 'prismjs'

export default [
  {
    type: 'block',
    name: 'code-block',
    renderMap: {
      element: 'code',
      wrapper: <pre className="braft-code-block"/>
    }
  }, {
    type: 'decorator',
    decorator: new PrismDecorator({
      prism: Prism,
      defaultSyntax: 'javascript'
    })
  }
]