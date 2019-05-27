import BraftEditor, { EditorState } from './editor'
import { convertRawToEditorState, convertHTMLToEditorState, convertEditorStateToRaw, convertEditorStateToHTML } from 'braft-convert'
import { createExtensibleEditor, compositeStyleImportFn, compositeStyleExportFn, compositeEntityImportFn, compositeEntityExportFn, compositeBlockImportFn, compositeBlockExportFn } from 'helpers/extension'
import { getDecorators } from 'renderers'

EditorState.prototype.setConvertOptions = function (options = {}) {
  this.convertOptions = options
}

EditorState.prototype.toHTML = function (options = {}) {
  const convertOptions = this.convertOptions || {}
  return convertEditorStateToHTML(this, {...convertOptions, ...options})
}

EditorState.prototype.toRAW = function (noStringify) {
  return noStringify ? convertEditorStateToRaw(this) : JSON.stringify(convertEditorStateToRaw(this))
}

EditorState.prototype.toText = function () {
  return this.getCurrentContent().getPlainText()
}

EditorState.prototype.isEmpty = function () {
  return !this.getCurrentContent().hasText()
}

BraftEditor.createEditorState = EditorState.createFrom = (content, options = {}) => {

  options.unitExportFn = options.unitExportFn || BraftEditor.defaultProps.converts.unitExportFn
  options.styleImportFn = compositeStyleImportFn(options.styleImportFn, options.editorId)
  options.entityImportFn = compositeEntityImportFn(options.entityImportFn, options.editorId)
  options.blockImportFn = compositeBlockImportFn(options.blockImportFn, options.editorId)

  let editorState = null

  if (content instanceof EditorState) {
    editorState = content
  } else if (typeof content === 'object' && content && content.blocks && content.entityMap) {
    editorState = convertRawToEditorState(content, getDecorators(options.editorId))
  } else if (typeof content === 'string') {
    try {
      if (/^(-)?\d+$/.test(content)) {
        editorState = convertHTMLToEditorState(content, getDecorators(options.editorId), options, 'create')
      } else {
        editorState = EditorState.createFrom(JSON.parse(content), options)
      }
    } catch (error) {
      editorState = convertHTMLToEditorState(content, getDecorators(options.editorId), options, 'create')
    }
  } else if (typeof content === 'number') {
    editorState = convertHTMLToEditorState(content.toLocaleString().replace(/,/g, ''), getDecorators(options.editorId), options, 'create')
  } else {
    editorState = EditorState.createEmpty(getDecorators(options.editorId))
  }

  options.styleExportFn = compositeStyleExportFn(options.styleExportFn, options.editorId)
  options.entityExportFn = compositeEntityExportFn(options.entityExportFn, options.editorId)
  options.blockExportFn = compositeBlockExportFn(options.blockExportFn, options.editorId)

  editorState.setConvertOptions(options)

  return editorState

}

export default createExtensibleEditor(BraftEditor)
export { EditorState, getDecorators }

// 2.1版本开发计划
// [ ]优化选中多行文字是插入链接报错的问题
// [ ]新增编辑器内图片删除hook

// 2.2版本开发计划
// [ ]表格功能
// [ ]美化UI，包括图标和界面风格

// 2.3版本开发计划
// [ ]初级md快捷输入支持
// [ ]图片裁切等简单的编辑功能
// [ ]允许自定义快捷键