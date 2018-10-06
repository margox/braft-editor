import React from 'react'
import { Map } from 'immutable'
import { extensionBlockRenderMap } from 'helpers/extension'

export default () => {

  let customBlockRenderMap = Map({
    'atomic': {
      element: ''
    },
    'code-block': {
      element: 'code',
      wrapper: <pre className="braft-code-block"/>
    }
  })
  
  Object.keys(extensionBlockRenderMap).forEach(key => {
    customBlockRenderMap = customBlockRenderMap.merge(extensionBlockRenderMap[key])
  })

  return customBlockRenderMap

}