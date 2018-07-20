import BraftEditor from 'editor'

export default BraftEditor

// TODO
// [√]优化内置的图片伪上传功能，用base64代替blob
// [ ]优化HTML格式无法存储媒体名称的问题
// [ ]优化音视频在编辑器内的预览体验
// [√]支持自定义图片工具栏按钮
// [√]支持通过属性扩展customStyleMap, blockStyleFn, keyBindingFn, blockRendererFn, blockRenderMap等
// [ ]支持媒体库组件的更多个性化配置（placeholder等）
// [√]允许完全设置控制栏的按钮（['media', { key: 'blod', text: 'xxx' }）
// [√]允许在工具栏和内容区域直接插入自定义的组件[componentBelowControlBar]
// [ ]优化换行与空格
// [ ]支持定义DropDown组件的样式
// --------------
// [ ]图片剪切功能