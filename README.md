# Braft Editor

#### 一个基于draft-js的Web富文本编辑器，适用于React框架，兼容主流现代浏览器。
#### [使用文档](https://www.yuque.com/margox/be) [在线演示](https://braft.margox.cn/demos/basic)
##### 注意，项目当前版本为2.1，如果你使用的是1.x.x版本，请参阅[旧版本文档](https://github.com/margox/braft-editor/blob/old-master/README.md)

### 编辑器专用扩展包已发布，请查看[Braft Extensions](https://github.com/margox/braft-extensions)

交流反馈请加QQ群：725634541

## 特性
- 完善的文本内容编辑功能
- 诸多开放的编辑接口，良好的可扩展性
- 允许插入图片、音视频等多媒体内容
- 允许自定义多媒体内容的上传接口
- 允许设置图片的左右浮动（即文字绕排功能）
- 允许设置编辑器可用的颜色列表、字号以及字体
- 允许自定义需要展示的控制按钮和展示顺序
- 允许增加额外的自定义按钮
- 多语言支持（目前已支持简体中文、繁体中文和英文）
- ...更多特性开发中

## 近期更新记录
- 2018-10-15 v2.1.10
  - 优化defaultValue传值方式
  - 优化行高展示
- 2018-10-15 v2.1.8
  - 优化设置设置左右浮动的图片工具栏被遮挡的问题
  - 内置颜色选择器外观调整
- 2018-10-14 v2.1.7
  - 优化工具栏按钮换行展示
  - 优化下拉组件在低高度编辑器中的展示
  - 优化按钮在Ant Design中行高显示异常的问题
- 2018-10-12 v2.1.6
  - 修复controlBarClassName和controlBarStyle属性无效的问题
- 2018-10-11 v2.1.4
  - 修复异步设置编辑器数据不会触发onChange的问题
- 2018-10-09 v2.1.3
  - 优化BraftEditor.use
- 2018-10-09 v2.1.2
  - BraftEditor.use支持includeEditors和excludeEditors参数以针对不同编辑器启用不同扩展
  - 修复问题[#244](https://github.com/margox/braft-editor/issues/244)
  - 尝试优化[#243](https://github.com/margox/braft-editor/issues/243)
- 2018-10-08 v2.1.1
  - 更换清除内容按钮的图标
  - 修复部分样式异常的问题
- 2018-10-08 v2.1.0
  - 进一步增加可扩展性，包括增加自定义的entity、block和inline-style，以及扩展编辑器的转换规则
  - 新增BraftEditor.use静态方法，用于载入全局扩展模块
  - 新增单位转换功能(converts.unitImportFn和converts.unitExportFn属性)
  - 新增onDelete、handleKeyCommand、handleReturn、handleBeforeInput等属性
  - 新增defaultLinkTarget属性，用于指定链接的默认打开方式
  - 新增editorState.isEmpty()实例方法，用于判断编辑器内容是否为空
  - 新增段落缩进功能
  - 其他细节优化

[查看历史更新记录](https://github.com/margox/braft-editor/blob/master/CHANGELOG.md)

## 安装
```bash
# 使用yarn安装
yarn add braft-editor
# 使用npm安装
npm install braft-editor --save
```
## 使用

编辑器支持**value**和**onChange**属性，这类似于React中原生的input组件。通常情况下，可以用典型的**受控组件**的形式来使用本编辑器：

```jsx
import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

export default class EditorDemo extends React.Component {

  state = {
      editorState: null
  }

  async componentDidMount () {
    // 假设此处从服务端获取html格式的编辑器内容
    const htmlContent = await fetchEditorContent()
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorState数据
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent)
    })
  }

  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML()
    const result = await saveEditorContent(htmlContent)
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }

  render () {

    const { editorState } = this.state

    return (
      <div className="my-component">
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
      </div>
    )

  }

}
```

当然本编辑器也支持**defaultValue**属性，因此你也可以将本编辑器作为一个**非受控组件**来使用。

-------

#### 更多介绍请查看[详细文档](https://www.yuque.com/margox/be/lzwpnr#zrs7hr)
