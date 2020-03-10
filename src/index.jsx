import {
  convertRawToEditorState,
  convertHTMLToEditorState,
  convertEditorStateToRaw,
  convertEditorStateToHTML,
} from 'braft-convert';

import {
  createExtensibleEditor,
  compositeStyleImportFn,
  compositeStyleExportFn,
  compositeEntityImportFn,
  compositeEntityExportFn,
  compositeBlockImportFn,
  compositeBlockExportFn,
} from 'helpers/extension';
import { getDecorators } from 'renderers';
import BraftEditor, { EditorState } from 'editor';

EditorState.prototype.setConvertOptions = function setConvertOptions(
  options = {},
) {
  this.convertOptions = options;
};

EditorState.prototype.toHTML = function toHTML(options = {}) {
  const convertOptions = this.convertOptions || {};
  return convertEditorStateToHTML(this, { ...convertOptions, ...options });
};

EditorState.prototype.toRAW = function toRAW(noStringify) {
  return noStringify
    ? convertEditorStateToRaw(this)
    : JSON.stringify(convertEditorStateToRaw(this));
};

EditorState.prototype.toText = function toText() {
  return this.getCurrentContent().getPlainText();
};

EditorState.prototype.isEmpty = function isEmpty() {
  return !this.getCurrentContent().hasText();
};

EditorState.createFrom = (content, options = {}) => {
  const customOptions = { ...options };
  customOptions.unitExportFn =
    customOptions.unitExportFn ||
    BraftEditor.defaultProps.converts.unitExportFn;
  customOptions.styleImportFn = compositeStyleImportFn(
    customOptions.styleImportFn,
    customOptions.editorId,
  );
  customOptions.entityImportFn = compositeEntityImportFn(
    customOptions.entityImportFn,
    customOptions.editorId,
  );
  customOptions.blockImportFn = compositeBlockImportFn(
    customOptions.blockImportFn,
    customOptions.editorId,
  );

  let editorState = null;

  if (content instanceof EditorState) {
    editorState = content;
  }
  if (
    typeof content === 'object' &&
    content &&
    content.blocks &&
    content.entityMap
  ) {
    editorState = convertRawToEditorState(
      content,
      getDecorators(customOptions.editorId),
    );
  }
  if (typeof content === 'string') {
    try {
      if (/^(-)?\d+$/.test(content)) {
        editorState = convertHTMLToEditorState(
          content,
          getDecorators(customOptions.editorId),
          customOptions,
          'create',
        );
      } else {
        editorState = EditorState.createFrom(
          JSON.parse(content),
          customOptions,
        );
      }
    } catch (error) {
      editorState = convertHTMLToEditorState(
        content,
        getDecorators(customOptions.editorId),
        customOptions,
        'create',
      );
    }
  }
  if (typeof content === 'number') {
    editorState = convertHTMLToEditorState(
      content.toLocaleString().replace(/,/g, ''),
      getDecorators(customOptions.editorId),
      customOptions,
      'create',
    );
  } else {
    editorState = EditorState.createEmpty(
      getDecorators(customOptions.editorId),
    );
  }

  customOptions.styleExportFn = compositeStyleExportFn(
    customOptions.styleExportFn,
    customOptions.editorId,
  );
  customOptions.entityExportFn = compositeEntityExportFn(
    customOptions.entityExportFn,
    customOptions.editorId,
  );
  customOptions.blockExportFn = compositeBlockExportFn(
    customOptions.blockExportFn,
    customOptions.editorId,
  );

  editorState.setConvertOptions(customOptions);

  return editorState;
};

BraftEditor.createEditorState = EditorState.createFrom;

export default createExtensibleEditor(BraftEditor);
export { EditorState, getDecorators };

// 2.1 version development plan
// [] Optimizing the selection of multiple lines of text is an error when inserting a link
// [] Add a new image delete hook in the editor

// 2.2 development plan
// [] table function
// [] Beautify the UI, including icons and interface style

// version 2.3 development plan
// [] Primary md shortcut input support
// [] simple editing functions such as picture cropping
// [] allows custom shortcuts
