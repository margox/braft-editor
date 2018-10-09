import React from 'react'
import { Map } from 'immutable'
import { DefaultDraftBlockRenderMap } from 'draft-js'
import { getExtensionBlockRenderMaps } from 'helpers/extension'

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

  const extensionBlockRenderMaps = getExtensionBlockRenderMaps(props.editorId)

  extensionBlockRenderMaps.forEach(item => {
    if (typeof item.renderMap === 'function') {
      customBlockRenderMap = customBlockRenderMap.merge(item.renderMap(props))
    } else if (item.renderMap instanceof Map) {
      customBlockRenderMap = customBlockRenderMap.merge(item.renderMap)
    }
  })

  if (blockRenderMap && blockRenderMap instanceof Map) {
    customBlockRenderMap = customBlockRenderMap.merge(blockRenderMap)
  }

  customBlockRenderMap = DefaultDraftBlockRenderMap.merge(customBlockRenderMap)

  return customBlockRenderMap

}