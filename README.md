# Braft Editor

#### 一个基于draft-js的Web富文本编辑器，适用于React框架，兼容主流现代浏览器。
#### [使用文档](https://www.yuque.com/margox/be) [在线演示](https://braft.margox.cn/demos/basic)
##### 注意，项目当前版本为2.x，如果你使用的是1.x.x版本，请参阅[旧版本文档](https://github.com/margox/braft-editor/blob/old-master/README.md)

### 编辑器专用扩展包已发布，请查看[Braft Extensions](https://github.com/margox/braft-extensions)
表格扩展模块已发布测试版本，请升级braft-editor和braft-utils到最新版本，并安装最新版本的braft-extensions，使用方式请查看[[表格扩展模块](https://github.com/margox/braft-extensions#%E8%A1%A8%E6%A0%BC%E6%A8%A1%E5%9D%97)]

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
- 多语言支持（目前已支持简体中文、繁体中文、英文和波兰语）
- ...更多特性开发中

## 鸣谢
- 感谢[Jyoti Puri](https://github.com/jpuri) 开发的[draftjs-utils](https://github.com/jpuri/draftjs-utils) 提供的帮助和[react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) 提供的参考，Thanks！
- 感谢[HubSpot](https://github.com/HubSpot) 开发的[draft-convert](https://github.com/hubspot/draft-convert)，Thanks！
- 感谢[Samy Pessé](https://github.com/SamyPesse) 开发的[draft-js-multidecorators](https://github.com/SamyPesse/draft-js-multidecorators)，Thanks！
- 感谢[JackLam](https://github.com/lamjack)提供的繁体中文语言自持，Thanks!
- 感谢[Paweł Krefta](https://github.com/pkrefta)提供的波兰语言支持，Thanks!

## 近期更新记录

- 2018-11-30 v2.1.33
  - 优化DropDown组件展示问题
  - 优化Switch组件的尺寸
  - 修复字体设置无效的问题
- 2018-11-27 v2.1.32
  - 优化图片工具栏的展示
  - 优化编辑器内复制粘贴
  - 修复部分图标在某些情况下显示异常的问题
  - 修复其他问题
- 2018-11-14 v2.1.29
  - 尝试修复选中多行内容后输入中文导致页面报错的问题[[#295](https://github.com/margox/braft-editor/issues/295)]，依赖braft-utils@3.0.6
  - 新增triggerChangeOnMount属性，用于指定在编辑器组件加载完成后是否触发一次onChange，默认为true
  - 修复传入className属性导致编辑器显示异常的问题
- 2018-11-13 v2.1.28
  - 修复图片工具栏无法使用的问题[#293](https://github.com/margox/braft-editor/issues/293)
  - 部分细节优化[#291](https://github.com/margox/braft-editor/issues/291)
- 2018-11-12 v2.1.27
  - 修复readOnly为true时图片工具栏依然可用并导致readOnly属性失效的问题
- 2018-10-29 v2.1.24
  - 弹窗组件新增closeOnBlur属性，用以指定是否在点击弹窗周围的蒙层时关闭弹窗，默认为true
- 2018-10-29 v2.1.23
  - 优化编辑器对扩展模块的使用方式，详见[[Issue#278]](https://github.com/margox/braft-editor/issues/278)
- 2018-10-27 v2.1.22
  - 修复弹窗组件数据更新异常的问题
- 2018-10-26 v2.1.21
  - 修复在编辑器中拖动图片移动位置导致脚本报错的问题（请更新braft-convert至v2.1.9+）
- 2018-10-25 v2.1.20
  - 支持在uploadFn中调用param.success传入width和height属性（需要更新braft-utils至v3.0.5）
  - imageControls中的自定义控件显示优化
- 2018-10-23 v2.1.19
  - 增加波兰语言支持，braft-finder需要更新至0.0.13，非常感谢[Paweł Krefta](https://github.com/pkrefta)的贡献！
  - 支持在引语块中输入多行内容，按Shift+Enter可跳出引语块
  - 修复部分扩展模块会导致无法外部更改editorState无效的问题
  - 优化代码块内容输出
- 2018-10-19 v2.1.18
  - 新增(伪)全屏控制组件(控件名:fullscreen)和onFullscreen回调
  - 新增editorState.toText方法用于获取编辑器纯文本内容
  - 新增readOnly属性，与disabled属性区别是不会禁止选择编辑器区域的内容
  - 修复了React15.x中脚本报错的问题
- 2018-10-18 v2.1.16
  - 修复编辑器组件卸载后未关闭的媒体库弹窗没有自动关闭的问题
  - extendControls数组元素支持传入函数，可以从函数参数中获取到编辑器实例与editorState
- 2018-10-16 v2.1.13
  - 修复了部分样式设置异常的问题
  - 移除React.Fragment相关的代码，提高React旧版兼容性
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

## Buy me a beer
如果你想感谢本编辑器为你的项目节省了时间，或者单纯地喜欢这个编辑器，可以扫码赞赏几块钱来请我喝杯啤酒喔！

<img src="https://braft.margox.cn/images/qrcode-alipay.png" width="180" height="180" />&emsp;&emsp;
<img src="https://braft.margox.cn/images/qrcode-wechat.png" width="180" height="180" />

#### &emsp;&emsp;&emsp;&emsp;支付宝&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;微信
