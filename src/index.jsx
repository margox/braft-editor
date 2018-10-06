import BraftEditor from './editor'
import { EditorState } from 'draft-js'
import { convertRawToEditorState, convertHTMLToEditorState, convertEditorStateToRaw, convertEditorStateToHTML } from 'braft-convert'
import { createExtensibleEditor, compositeStyleImportFn, compositeEntityImportFn } from 'helpers/extension'
import { getDecorators } from 'renderers'

EditorState.prototype.setConvertOptions = function (options = {}) {
  this.convertOptions = options
}

// 为EditorState对象增加toHTML原型方法，用于将editorState转换成HTML字符串
EditorState.prototype.toHTML = function (options = {}) {
  const convertOptions = this.convertOptions || {}
  return convertEditorStateToHTML(this, {...convertOptions, ...options})
}

// 为EditorState对象增加toRAW原型方法，用于将editorState转换成RAW JSON对象或RAW JSON字符串
EditorState.prototype.toRAW = function (noStringify) {
  return noStringify ? convertEditorStateToRaw(this) : JSON.stringify(convertEditorStateToRaw(this))
}

// 为EditorState对象增加新的静态方法，用于从raw或者html内容创建ediorState
BraftEditor.createEditorState = EditorState.createFrom = (content, options = {}) => {

  options.styleImportFn = compositeStyleImportFn(options.styleImportFn)
  options.entityImportFn = compositeEntityImportFn(options.entityImportFn)

  if (typeof content === 'object' && content && content.blocks && content.entityMap) {
    return convertRawToEditorState(content, getDecorators())
  } else if (typeof content === 'string') {
    try {
      return EditorState.createFrom(JSON.parse(content), options)
    } catch (error) {
      return convertHTMLToEditorState(content, getDecorators(), options, 'create')
    }
  } else {
    return EditorState.createEmpty(getDecorators())
  }

}

export default createExtensibleEditor(BraftEditor)
export { EditorState, getDecorators }

// 近期开发计划
// 优化全选会选择上传中的项目的问题
// 支持param.success时设置媒体文件的更多属性（尺寸等）

// 2.1版本开发计划
// [ ]增强扩展性
// [ ]完成font-size等样式的全量支持
// [ ]支持无限制取色器

// 2.2版本开发计划
// [ ]支持代码块语法高亮

// 2.3版本开发计划
// [ ]增加代码块高亮支持

// 2.4版本开发计划
// [ ]允许自定义快捷键
// [ ]优化图片param.success，支持传入link等
// [ ]简化上传配置流程
// [ ]支持draftjs插件机制
// [ ]支持媒体库组件的更多个性化配置（placeholder等）
// [ ]支持非媒体类附件
// [ ]优化HTML格式无法存储媒体名称的问题 

// 2.5版本开发计划
// [ ]优化换行与空格
// [ ]支持自定义Atomic组件
// [ ]图片裁切等简单的编辑功能
// [ ]代码块交互强化
// [ ]初级表格功能

// 2.6版本开发计划
// [ ]美化UI，包括图标和界面风格