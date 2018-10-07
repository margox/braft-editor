import React from 'react'
import { Map } from 'immutable'
import { DefaultDraftBlockRenderMap } from 'draft-js'
import { extensionBlockRenderMap } from 'helpers/extension'

export default (props, blockRenderMap) => {

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
    if (typeof extensionBlockRenderMap[key] === 'function') {
      customBlockRenderMap = customBlockRenderMap.merge(extensionBlockRenderMap[key](props))
    } else if (extensionBlockRenderMap[key] instanceof Map) {
      customBlockRenderMap = customBlockRenderMap.merge(extensionBlockRenderMap[key])
    }
  })

  if (blockRenderMap && blockRenderMap instanceof Map) {
    customBlockRenderMap = customBlockRenderMap.merge(blockRenderMap)
  }

  customBlockRenderMap = DefaultDraftBlockRenderMap.merge(customBlockRenderMap)

  return customBlockRenderMap

}