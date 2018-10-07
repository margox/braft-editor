// TODO
// - block、atomic类型的扩展支持
// - 允许指定可使用扩展的编辑器id

import React from 'react'

export const extensionControls = []
export const extensionDecorators = []

export const extensionBlockRenderMap = {}
export const extensionBlockRendererFns= {}

export const extensionBlockStyleFns = {}
export const extensionBlockStyleMap = {}

export const extensionInlineStyleMap = {}
export const extensionInlineStyleFns = {}

export const extensionEditorHandlers = {}

const styleImporters = {}
const styleExporters = {}
const blockImporters = {}
const blockExporters = {}
const entities = {}

export const compositeStyleImportFn = (styleImportFn) => (nodeName, node, style) => {

  Object.keys(styleImporters).forEach(key => {
    if (styleImporters[key](nodeName, node)) {
      style = style.add(key)
    }
  })

  return styleImportFn ? styleImportFn(nodeName, node, style) : style

}

export const compositeStyleExportFn = (styleExportFn) => (style) => {
  return styleExportFn ? styleExportFn(style) : (styleExporters[style] || undefined)
}

export const compositeEntityImportFn = (entityImportFn) => (nodeName, node, createEntity, source) => {

  let result = entityImportFn ? entityImportFn(nodeName, node, createEntity, source) : null

  if (result) {
    return result
  }

  Object.keys(entities).find(key => {
    const matchedEntity = entities[key].importer ? entities[key].importer(nodeName, node, source) : null
    matchedEntity && (result = createEntity(key, matchedEntity.mutability || 'MUTABLE', matchedEntity.data || {}))
    return !!matchedEntity
  })

  return result

}

export const compositeEntityExportFn = (entityExportFn) => (entity, originalText) => {
  const entityType = entity.type.toUpperCase()
  return entityExportFn ? entityExportFn(entity, originalText) : (entities[entityType].exporter ? entities[entityType].exporter(entity, originalText) : undefined)
}

export const compositeBlockImportFn = (blockImportFn) => (nodeName, node, source) => {

  let result = blockImportFn ? blockImportFn(nodeName, node, source) : null

  if (result) {
    return result
  }

  Object.keys(blockImporters).find(key => {
    const matchedBlock = blockImporters[key](nodeName, node, source)
    matchedBlock && (result = matchedBlock)
    return matchedBlock
  })

  return result

}

export const compositeBlockExportFn = (blockExportFn) => (contentState, block) => {

  let result = blockExportFn ? blockExportFn(contentState, block) : null

  if (result) {
    return result
  }

  Object.keys(blockExporters).find(key => {
    const matchedResult = blockExporters[key](contentState, block)
    matchedResult && (result = matchedResult)
    return matchedResult
  })

  return result

}

const useExtension = (extension) => {

  if (extension instanceof Array) {
    extension.forEach(useExtension)
    return false
  }

  if(!extension || !extension.type || typeof extension.type !== 'string') {
    return false
  }

  if (extension.type === 'inline-style') {

    const inlineStyleName = extension.name.toUpperCase()

    if (extension.control) {
      extensionControls.push({
        key: inlineStyleName,
        type: 'inline-style',
        command: inlineStyleName,
        ...extension.control
      })
    }

    extension.style && (extensionInlineStyleMap[inlineStyleName] = extension.style)
    extension.styleFn && (extensionInlineStyleFns[inlineStyleName] = extension.styleFn)
    extension.importer && (styleImporters[inlineStyleName] = extension.importer)

    styleExporters[inlineStyleName] = extension.exporter ? extension.exporter(extension) : <span style={extension.style}/>

  } else if (extension.type === 'block-style') {

    // TODO

    // const blockStyleName = extension.name

    // extension.classNameMap && (extensionBlockStyleMap[blockStyleName] = extension.classNameMap)
    // extension.styleFn && (extensionBlockStyleFns[blockStyleName] = extension.styleFn)

  } else if (extension.type === 'entity') {

    const entityName = extension.name.toUpperCase()

    if (extension.control) {
      extensionControls.push({
        key: entityName,
        type: 'entity',
        command: entityName,
        mutability: extension.mutability || 'MUTABLE',
        data: extension.data || {},
        ...extension.control
      })
    }

    entities[entityName] = extension

    extensionDecorators.push({
      type: 'entity',
      decorator: {
        key: entityName,
        component: extension.component
      }
    })

  } else if (extension.type === 'block') {

    const blockType = extension.name

    if (extension.renderMap) {
      extensionBlockRenderMap[blockType] = extension.renderMap
    }

    if (extension.rendererFn) {
      extensionBlockRendererFns[blockType] = extension.rendererFn
    }

    extension.importer && (blockImporters[blockType] = extension.importer)
    extension.exporter && (blockExporters[blockType] = extension.exporter)

  } else if (extension.type === 'atomic') {
    // TODO
  } else if (extension.type === 'decorator') {

    const { decorator } = extension

    if (decorator && decorator.strategy && decorator.component) {
      extensionDecorators.push({
        type: 'strategy',
        decorator: decorator
      })
    } else if (decorator && decorator.getDecorations) {
      extensionDecorators.push({
        type: 'class',
        decorator: decorator
      })
    }

  }

}

export const createExtensibleEditor = (BraftEditor) => {

  BraftEditor.use = useExtension

  return BraftEditor

}