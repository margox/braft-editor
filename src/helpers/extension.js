import React from 'react'

export const extensionControls = []
export const extensionDecorators = []
export const extendInlineStyleMap = {}
export const extendInlineStyleFns = {}

const styleImporters = {}
const styleExporters = {}
const entities = {}

export const extendStyleImportFn = (styleImportFn) => (nodeName, node, style) => {

  Object.keys(styleImporters).forEach(key => {
    if (styleImporters[key](nodeName, node)) {
      style = style.add(key)
    }
  })

  return styleImportFn ? styleImportFn(nodeName, node, style) : style

}

export const extendStyleExportFn = (styleExportFn) => (style) => {
  return styleExportFn ? styleExportFn(style) : (styleExporters[style] || undefined)
}

export const extendEntityImportFn = (entityImportFn) => (nodeName, node, createEntity, source) => {

  let result

  Object.keys(entities).find(key => {
    const matchedEntity = entities[key].importer ? entities[key].importer(nodeName, node, source) : false
    matchedEntity && (result = createEntity(key, matchedEntity.mutability || 'MUTABLE', matchedEntity.data || {}))
    return !!matchedEntity
  })

  return entityImportFn ? entityImportFn(nodeName, node, createEntity, source) : result

}

export const extendEntityExportFn = (entityExportFn) => (entity, originalText) => {
  const entityType = entity.type.toUpperCase()
  return entityExportFn ? entityExportFn(entity, originalText) : (entities[entityType].exporter ? entities[entityType].exporter(entity, originalText) : undefined)
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

    extension.style && (extendInlineStyleMap[inlineStyleName] = extension.style)
    extension.styleFn && (extendInlineStyleFns[inlineStyleName] = extension.styleFn)
    extension.importer && (styleImporters[inlineStyleName] = extension.importer)

    styleExporters[inlineStyleName] = extension.exporter ? extension.exporter(extension) : <span style={extension.style}/>

  } else if (extension.type === 'entity') {

    const entityName = extension.name.toUpperCase()

    entities[entityName] = extension

    extensionDecorators.push({
      type: entityName,
      component: extension.component
    })

  } else if (extension.type === 'block') {
    // ...
  } else if (extension.type === 'atomic') {
    // ...
  }

}

export const createExtensibleEditor = (BraftEditor) => {

  BraftEditor.use = useExtension

  return BraftEditor

}