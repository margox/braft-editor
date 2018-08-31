import BraftEditor, { editorDecorators } from './editor'
import { EditorState } from 'draft-js'
import { convertRawToEditorState, convertHTMLToEditorState, convertEditorStateToRaw, convertEditorStateToHTML } from 'braft-convert'

// 为EditorState对象增加toHTML原型方法，用于将editorState转换成HTML字符串
EditorState.prototype.toHTML = function () {
  return convertEditorStateToHTML(this)
}

// 为EditorState对象增加toRAW原型方法，用于将editorState转换成RAW JSON对象或RAW JSON字符串
EditorState.prototype.toRAW = function (noStringify) {
  return noStringify ? convertEditorStateToRaw(this) : JSON.stringify(convertEditorStateToRaw(this))
}

// 为EditorState对象增加新的静态方法，用于从raw或者html内容创建ediorState
EditorState.createFrom = (content, options) => {

  if (typeof content === 'object' && content.blocks && content.entityMap) {
    return convertRawToEditorState(content, editorDecorators)
  } else if (typeof content === 'string') {
    try {
      return EditorState.createFrom(JSON.parse(content), options)
    } catch (error) {
      return convertHTMLToEditorState(content, editorDecorators, options)
    }
  } else {
    return EditorState.createEmpty(editorDecorators)
  }

}

export default BraftEditor
export { EditorState, editorDecorators }

// 2.0.0开发计划
// [ ]完善各模块文档说明
// [√]添加更多钩子（插入链接、切换样式等）
// [√]优化内置的图片伪上传功能，用base64代替blob
// [√]支持自定义图片工具栏按钮
// [√]支持通过属性扩展customStyleMap, blockStyleFn, keyBindingFn, blockRendererFn, blockRenderMap等
// [√]允许完全设置控制栏的按钮（['media', { key: 'blod', text: 'xxx' }）
// [√]允许在工具栏和内容区域直接插入自定义的组件[componentBelowControlBar]
// [√]支持定义DropDown组件的样式
// [√]media.validateFn支持异步函数
// [ ]优化音视频在编辑器内的预览体验
// 2.1.0版本开发加护
// [ ]美化UI，包括图标和界面风格
// [ ]标准化代码，引入ESLint
// 2.2.0版本开发计划
// [ ]优化图片param.success，支持传入link等
// [ ]简化上传配置流程
// [ ]支持draftjs插件机制
// [ ]支持媒体库组件的更多个性化配置（placeholder等）
// [ ]支持非媒体类附件
// [ ]优化HTML格式无法存储媒体名称的问题 
// [ ]完成font-size等样式的全量支持
// 2.3.0版本开发计划
// [ ]优化换行与空格
// [ ]支持自定义Atomic组件
// [ ]图片裁切等简单的编辑功能
// [ ]代码块交互强化
// [ ]初级表格功能