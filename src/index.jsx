import BraftEditor from 'editor'
import { ContentUtils, ColorUtils, BaseUtils } from 'braft-utils'
import * as ConvertUtils from 'braft-convert'

export default BraftEditor
export { ContentUtils, ColorUtils, BaseUtils, ConvertUtils }

// TODO
// [ ]完善各模块文档说明
// [ ]添加更多钩子（插入链接、切换样式等）
// [√]优化内置的图片伪上传功能，用base64代替blob
// [ ]优化HTML格式无法存储媒体名称的问题
// [√]支持自定义图片工具栏按钮
// [√]支持通过属性扩展customStyleMap, blockStyleFn, keyBindingFn, blockRendererFn, blockRenderMap等
// [ ]支持媒体库组件的更多个性化配置（placeholder等）
// [√]允许完全设置控制栏的按钮（['media', { key: 'blod', text: 'xxx' }）
// [√]允许在工具栏和内容区域直接插入自定义的组件[componentBelowControlBar]
// [√]支持定义DropDown组件的样式
// [ ]支持非媒体类附件
// --------------
// [ ]优化换行与空格
// [ ]优化音视频在编辑器内的预览体验
// [ ]图片裁切等简单的编辑功能