# Braft Editor

#### 一个基于draft-js的Web富文本编辑器，适用于React框架，兼容主流现代浏览器。
#### [使用文档](https://www.yuque.com/margox/be) [在线演示](https://braft.margox.cn/demos/basic)
##### 注意，项目当前版本为2.x，如果你使用的是1.x.x版本，请参阅[旧版本文档](https://github.com/margox/braft-editor/blob/old-master/README.md)

## 使用前请了解
Braft Editor是基于draft-js开发的编辑器，而draft-js内部并不是直接使用HTML作为组件状态的，它自己实现了一个EditorState类型，本质上是一个JS对象；在传统富文本编辑器中的一段段的HTML内容对应到EditorState就是一个个的block块；这一点可以通过查看editorState.toRAW()进行验证。

使用EditorState代替HTML字符串的好处在于一套EditorState可以多端使用，编辑器产出的内容不再局限于只在web平台展示，（当然各个平台也需要自行实现对应的EditorState to View的转换功能），同时也和React的组件状态更加适配。

然而，上述实现方式，最大的问题在于无法将外部的HTML完美的转换为EditorState，因为其支持的样式、标签、标签属性等等极为有限，没办法将HTML中的所有特性转换为EditorState中的状态，导致在使用第三方或历史HTML字符串来初始化编辑器内容的时候，以及粘贴外部HTML内容的时候，只有被编辑器支持的少量样式和标签属性才能被保留，大部分内容将会被过滤或者忽略掉。

基于上面的缺点，如果各位的项目强依赖于原始HTML标签和属性等，则不建议使用本编辑器。


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
- 多语言支持（目前已支持简体中文、繁体中文、英文、波兰语、日语、韩语、土耳其语）
- ...更多特性开发中

## 鸣谢
- 感谢[Jyoti Puri](https://github.com/jpuri) 开发的[draftjs-utils](https://github.com/jpuri/draftjs-utils) 提供的帮助和[react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) 提供的参考，Thanks！
- 感谢[HubSpot](https://github.com/HubSpot) 开发的[draft-convert](https://github.com/hubspot/draft-convert)，Thanks！
- 感谢[Samy Pessé](https://github.com/SamyPesse) 开发的[draft-js-multidecorators](https://github.com/SamyPesse/draft-js-multidecorators)，Thanks！
- 感谢[JackLam](https://github.com/lamjack)提供的繁体中文语言自持，Thanks!
- 感谢[Paweł Krefta](https://github.com/pkrefta)提供的波兰语言支持，Thanks!
- 感谢[YYL1999](https://github.com/YYL1999)提供的韩语和日语语言支持，Thanks!
- 感谢[Gencer W. Genç](https://github.com/gencer)提供的土耳其语言支持，Thanks!

## 近期更新记录

- 2019-06-20 v2.3.7
  - 修复问题[#542](https://github.com/margox/braft-editor/issues/542)、[#541](https://github.com/margox/braft-editor/issues/541)、[#467](https://github.com/margox/braft-editor/issues/467)
  - 修复问题[#512](https://github.com/margox/braft-editor/issues/512)并新增imageResizable属性，允许关闭图片的拖动调整尺寸功能
- 2019-06-18 v2.3.6
  - 支持不选择文字的情况下直接插入链接
  - 新增`allowInsertLinkText`属性，允许直接插入链接时输入链接文字，默认`false`
- 2019-06-14 v2.3.5
  - 完善index.d.ts
- 2019-06-11 v2.3.4
  - 支持部分更多自定义html属性的保留(需要升级braft-convert至v2.3.0)
  - 加入韩语(kr)、日语(jpn)、土耳其语(tr)
  - 加入更多[hooks](https://www.yuque.com/braft-editor/be/gz44tn#gug9gs)支持
- 2019-05-28 v2.3.2
  - 修复传入RAW字符串无法正常解析为问题
- 2019-05-20 v2.3.1
  - 修复v2.3.0的致命bug
- 2019-05-20 v2.3.0
  - 支持嵌套列表以及部分内部细节优化，感谢[SyMind](https://github.com/SyMind)的贡献:[PR#486](https://github.com/margox/braft-editor/pull/486),[PR#485](https://github.com/margox/braft-editor/pull/485)
  - 优化在SSR中使用的问题
- 2019-04-29 v2.2.10
  - 图片支持拖动调整大小，感谢[ArthasDragon](https://github.com/margox/braft-editor/pull/424)的贡献！
  - 优化使用纯数字初始化编辑器内容异常的问题，感谢[WzFFzW](https://github.com/margox/braft-editor/pull/446)的贡献！
  - 新增fixPlaceholder属性(Boolean)，用于修复部分情况下placeholder文本显示异常的问题，默认false
  - 优化forceRender
- 2019-03-06 v2.2.9
  - 修改index.d.ts
- 2019-02-22 v2.2.7
  - 新增用于美化输出HTML的样板CSS文件(`node_modules/braft-editor/dist/output.css`)
- 2019-02-22 v2.2.6
  - 优化blockRenerMap属性，支持传入一个返回blockRenerMap对象的函数
  - 优化上下标样式的设置
  - 优化编辑器内文本缩进和文本对齐同事存在时的显示效果
- 2019-01-11 v2.2.4
  - 新增editorId属性，作用与id属性完全一样，用于解决在Ant Design Form组件中id属性会被覆盖导致无法正常使用扩展模块的问题
- 2019-01-11 v2.2.2
  - 优化音视频和嵌入式媒体的播放交互，改为在模态框中播放
- 2019-01-06 v2.2.1
  - 完善index.d.ts([PR#340](https://github.com/margox/braft-editor/pull/340))
- 2018-12-29 v2.2.0
  - 新增d.ts文件，在TypeScript项目中使用更友好，感谢[幅川大佬](https://github.com/weifuchuan)的贡献！
  - 修复弹窗组件中的输入框无法使用的问题
  - 其他优化和问题修复：[Issue#336](https://github.com/margox/braft-editor/issues/336),[Issue#331](https://github.com/margox/braft-editor/issues/331),[Issue#328](https://github.com/margox/braft-editor/issues/328)

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
