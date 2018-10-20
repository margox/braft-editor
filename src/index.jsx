import BraftEditor from './editor'
import { EditorState } from 'draft-js'
import { convertRawToEditorState, convertHTMLToEditorState, convertEditorStateToRaw, convertEditorStateToHTML } from 'braft-convert'
import { createExtensibleEditor, compositeStyleImportFn, compositeEntityImportFn, compositeBlockImportFn } from 'helpers/extension'
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

  options.styleImportFn = compositeStyleImportFn(options.styleImportFn, options.editorId)
  options.entityImportFn = compositeEntityImportFn(options.entityImportFn, options.editorId)
  options.blockImportFn = compositeBlockImportFn(options.blockImportFn, options.editorId)

  if (typeof content === 'object' && content && content.blocks && content.entityMap) {
    return convertRawToEditorState(content, getDecorators(options.editorId))
  } else if (typeof content === 'string') {
    try {
      return EditorState.createFrom(JSON.parse(content), options)
    } catch (error) {
      return convertHTMLToEditorState(content, getDecorators(options.editorId), options, 'create')
    }
  } else {
    return EditorState.createEmpty(getDecorators(options.editorId))
  }

}

export default createExtensibleEditor(BraftEditor)
export { EditorState, getDecorators }

// 2.1版本开发计划
// [ ]增强扩展性
// [ ]完成font-size等样式的全量支持
// [ ]支持无限制取色器
// [ ]支持替换内置控件
// [ ]允许自定义快捷键

// 2.2版本开发计划
// [ ]支持非媒体类附件
// [ ]优化全选会选择上传中的项目的问题
// [ ]支持param.success时设置媒体文件的更多属性（尺寸、图片链接等）
// [ ]简化上传配置流程
// [ ]支持媒体库组件的更多个性化配置（placeholder等）
// [ ]优化HTML格式无法存储媒体名称的问题 

// 2.3版本开发计划
// [ ]优化换行与空格
// [ ]支持自定义Atomic组件
// [ ]图片裁切等简单的编辑功能
// [ ]初级表格功能

// 2.4版本开发计划
// [ ]美化UI，包括图标和界面风格