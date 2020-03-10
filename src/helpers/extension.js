/* eslint-disable no-param-reassign */
// TODO
// -extended support for block-style and atomic types

import React from 'react';

const extensionControls = [];
const extensionDecorators = [];

const propInterceptors = [];

const extensionBlockRenderMaps = [];
const extensionBlockRendererFns = [];

const extensionInlineStyleMaps = [];
const extensionInlineStyleFns = [];

const extensionEntities = [];

const inlineStyleImporters = [];
const inlineStyleExporters = [];
const blockImporters = [];
const blockExporters = [];

const filterByEditorId = (items, editorId) => {
  if (!editorId) {
    return items
      .filter((item) => !item.includeEditors)
      .map((item) => item.data);
  }

  return items
    .map((item) => {
      if (!item.includeEditors && !item.excludeEditors) {
        return item.data;
      }

      if (item.includeEditors) {
        return item.includeEditors.indexOf(editorId) !== -1 ? item.data : false;
      }

      if (item.excludeEditors) {
        return item.excludeEditors.indexOf(editorId) !== -1 ? false : item.data;
      }

      return false;
    })
    .filter((item) => item);
};

export const getPropInterceptors = (editorId) =>
  filterByEditorId(propInterceptors, editorId);

export const getExtensionControls = (editorId) =>
  filterByEditorId(extensionControls, editorId);

export const getExtensionDecorators = (editorId) =>
  filterByEditorId(extensionDecorators, editorId, 'decorators');

export const getExtensionBlockRenderMaps = (editorId) =>
  filterByEditorId(extensionBlockRenderMaps, editorId);

export const getExtensionBlockRendererFns = (editorId) =>
  filterByEditorId(extensionBlockRendererFns, editorId);

export const getExtensionInlineStyleMap = (editorId) => {
  const inlineStyleMap = {};

  filterByEditorId(extensionInlineStyleMaps, editorId).forEach((item) => {
    inlineStyleMap[item.inlineStyleName] = item.styleMap;
  });

  return inlineStyleMap;
};

export const getExtensionInlineStyleFns = (editorId) =>
  filterByEditorId(extensionInlineStyleFns, editorId);

export const compositeStyleImportFn = (styleImportFn, editorId) => (
  nodeName,
  node,
  style,
) => {
  filterByEditorId(inlineStyleImporters, editorId).forEach((styleImporter) => {
    if (styleImporter.importer && styleImporter.importer(nodeName, node)) {
      style = style.add(styleImporter.inlineStyleName);
    }
  });

  return styleImportFn ? styleImportFn(nodeName, node, style) : style;
};

export const compositeStyleExportFn = (styleExportFn, editorId) => (style) => {
  style = style.toUpperCase();
  let result = styleExportFn ? styleExportFn(style) : undefined;

  if (result) {
    return result;
  }

  filterByEditorId(inlineStyleExporters, editorId).find((item) => {
    if (item.inlineStyleName === style) {
      result = item.exporter;
      return true;
    }
    return false;
  });

  return result;
};

export const compositeEntityImportFn = (entityImportFn, editorId) => (
  nodeName,
  node,
  createEntity,
  source,
) => {
  let result = entityImportFn
    ? entityImportFn(nodeName, node, createEntity, source)
    : null;

  if (result) {
    return result;
  }

  filterByEditorId(extensionEntities, editorId).find((entityItem) => {
    const matched = entityItem.importer
      ? entityItem.importer(nodeName, node, source)
      : null;
    if (matched) {
      result = createEntity(
        entityItem.entityType,
        matched.mutability || 'MUTABLE',
        matched.data || {},
      );
    }
    return !!matched;
  });

  return result;
};

export const compositeEntityExportFn = (entityExportFn, editorId) => (
  entity,
  originalText,
) => {
  let result = entityExportFn
    ? entityExportFn(entity, originalText)
    : undefined;

  if (result) {
    return result;
  }

  const entityType = entity.type.toUpperCase();

  filterByEditorId(extensionEntities, editorId).find((entityItem) => {
    if (entityItem.entityType === entityType) {
      result = entityItem.exporter
        ? entityItem.exporter(entity, originalText)
        : undefined;
      return true;
    }
    return false;
  });

  return result;
};

export const compositeBlockImportFn = (blockImportFn, editorId) => (
  nodeName,
  node,
  source,
) => {
  let result = blockImportFn ? blockImportFn(nodeName, node, source) : null;

  if (result) {
    return result;
  }

  filterByEditorId(blockImporters, editorId).find((blockImporter) => {
    const matched = blockImporter.importer
      ? blockImporter.importer(nodeName, node, source)
      : undefined;
    if (matched) {
      result = matched;
    }
    return !!matched;
  });

  return result;
};

export const compositeBlockExportFn = (blockExportFn, editorId) => (
  contentState,
  block,
) => {
  let result = blockExportFn ? blockExportFn(contentState, block) : null;

  if (result) {
    return result;
  }

  filterByEditorId(blockExporters, editorId).find((blockExporter) => {
    const matched = blockExporter.exporter
      ? blockExporter.exporter(contentState, block)
      : undefined;
    if (matched) {
      result = matched;
    }
    return !!matched;
  });

  return result;
};

const useExtension = (extension) => {
  if (extension instanceof Array) {
    extension.forEach(useExtension);
    return false;
  }

  if (!extension || !extension.type || typeof extension.type !== 'string') {
    return false;
  }

  const { includeEditors, excludeEditors } = extension;

  if (extension.type === 'control') {
    extensionControls.push({
      includeEditors,
      excludeEditors,
      data: extension.control,
    });
  } else if (extension.type === 'inline-style') {
    const inlineStyleName = extension.name.toUpperCase();

    if (extension.control) {
      extensionControls.push({
        includeEditors,
        excludeEditors,
        data: {
          key: inlineStyleName,
          type: 'inline-style',
          command: inlineStyleName,
          ...extension.control,
        },
      });
    }

    if (extension.style) {
      extensionInlineStyleMaps.push({
        includeEditors,
        excludeEditors,
        data: {
          inlineStyleName,
          styleMap: extension.style,
        },
      });
    }

    if (extension.styleFn) {
      extensionInlineStyleFns.push({
        includeEditors,
        excludeEditors,
        data: {
          inlineStyleName,
          styleFn: extension.styleFn,
        },
      });
    }

    if (extension.importer) {
      inlineStyleImporters.push({
        includeEditors,
        excludeEditors,
        data: {
          inlineStyleName,
          importer: extension.importer,
        },
      });
    }

    inlineStyleExporters.push({
      includeEditors,
      excludeEditors,
      data: {
        inlineStyleName,
        exporter: extension.exporter ? (
          extension.exporter(extension)
        ) : (
          <span style={extension.style} />
        ),
      },
    });
  } else if (extension.type === 'block-style') {
    // TODO
  } else if (extension.type === 'entity') {
    const entityType = extension.name.toUpperCase();

    if (extension.control) {
      extensionControls.push({
        includeEditors,
        excludeEditors,
        data: {
          ...(typeof extension.control === 'function' && {
            key: entityType,
            type: 'entity',
            command: entityType,
            data: {
              mutability: extension.mutability || 'MUTABLE',
              data: extension.data || {},
            },
            ...extension.control,
          }),
        },
      });
    }

    extensionEntities.push({
      includeEditors,
      excludeEditors,
      data: {
        entityType,
        importer: extension.importer,
        exporter: extension.exporter,
      },
    });

    extensionDecorators.push({
      includeEditors,
      excludeEditors,
      data: {
        type: 'entity',
        decorator: {
          key: entityType,
          component: extension.component,
        },
      },
    });
  } else if (extension.type === 'block') {
    const blockType = extension.name;

    if (extension.renderMap) {
      extensionBlockRenderMaps.push({
        includeEditors,
        excludeEditors,
        data: {
          blockType,
          renderMap: extension.renderMap,
        },
      });
    }

    if (extension.rendererFn) {
      extensionBlockRendererFns.push({
        includeEditors,
        excludeEditors,
        data: {
          blockType,
          rendererFn: extension.rendererFn,
        },
      });
    }

    if (extension.importer) {
      blockImporters.push({
        includeEditors,
        excludeEditors,
        data: {
          blockType,
          importer: extension.importer,
        },
      });
    }

    if (extension.exporter) {
      blockExporters.push({
        includeEditors,
        excludeEditors,
        data: {
          blockType,
          exporter: extension.exporter,
        },
      });
    }
  } else if (extension.type === 'atomic') {
    // TODO
  } else if (extension.type === 'decorator') {
    const { decorator } = extension;

    if (decorator && decorator.strategy && decorator.component) {
      extensionDecorators.push({
        includeEditors,
        excludeEditors,
        data: {
          type: 'strategy',
          decorator,
        },
      });
    } else if (decorator && decorator.getDecorations) {
      extensionDecorators.push({
        includeEditors,
        excludeEditors,
        data: {
          type: 'class',
          decorator,
        },
      });
    }
  } else if (extension.type === 'prop-interception') {
    propInterceptors.push({
      includeEditors,
      excludeEditors,
      data: extension.interceptor,
    });
  }
  return true;
};

export const createExtensibleEditor = (BraftEditor) => {
  BraftEditor.use = useExtension;

  return BraftEditor;
};
