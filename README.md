# Braft Editor

### 一个基于darft-js开发的Web富文本编辑器，适用于React框架，兼容主流现代浏览器。

## 更新内容
- 2017-08-30 v0.3.2
  - 修复极细分割线在部分浏览器下不显示的问题
- 2017-08-29 v0.3.1
  - 修复粘贴包含颜色的HTML内容时可能会报错的问题
  - TODO: 完善颜色转换函数，提高粘贴稳定性
- 2017-08-29 v0.3.0
  - 增加setContent等实例方法
  - 支持外部操作媒体库内容
  - 部分文案调整
- 2017-08-28 v0.2.9
  - 部分CSS权重调整，减少与其他UI框架的冲突
- 2017-08-28 v0.2.8
  - 修复引入编辑器之后导致antd等框架的图标无法显示的问题
- 2017-08-24 v0.2.7
  - 链接插入功能优化
  - 通过控制栏组件操作内容后，保持编辑器焦点
- 2017-08-21 v0.2.6
  - 修复无法粘贴纯文本的问题
- 2017-08-19 v0.2.5
  - 支持列表模式下连续回车跳出列表
  - 支持从网页复制图片粘贴到编辑器


## 在线演示
移步: [http://margox.github.io/braft-editor/](http://margox.github.io/braft-editor/)

## 特性
- 完善的文本内容编辑功能
- 允许插入图片、音视频等多媒体内容
- 允许自定义多媒体内容的上传接口
- 允许设置图片的左右浮动（即文字绕排功能）
- 允许设置编辑器可用的颜色列表、字号以及字体
- 允许自定义需要展示的控制按钮和展示顺序
- 允许增加额外的自定义按钮
- 多语言支持（目前已支持简体中文和英文）
- ...更多特性开发中

## 安装
```bash
# 使用yarn安装
yarn add braft-editor
# 使用npm安装
npm install braft-editor --save
```

## 开发环境
```bash
# 运行dev-server
yarn start
# 启动上传服务器
cd example/server
node index.js
# 访问 http://localhost:5998

# 打包编译
yarn build
```

## 使用示例
```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

class Demo extends React.Component {

  state = {
    content: null
  }

  render () {

    const editorProps = {
      height: 500,
      initialContent: this.state.content,
      onChange: this.handleChange,
      onHTMLChange: this.handleHTMLChange
    }

    return (
      <div className="demo">
        <BraftEditor {...editorProps}/>
      </div>
    )

  }

  handleChange = (content) => {
    console.log(content)
  }

  handleHTMLChange = (html) => {
    console.log(html)
  }

}
```

## 可用属性

### contentFormat [string: raw | html]

用于指定initialContent和onChange的内容格式，raw表示使用编辑器原始数据作为输入和输出类型, html表示使用HTML字符串作为输入和输出类型，默认为raw。
> 为了保证内容的可编辑性，强烈建议使用raw格式，并通过onHTMLChange获取HTML格式的内容


### initialContent [string]

编辑器的初始内容，根据contentFormat类型传入html字符串或者raw字符串


### onChange [function(html|raw)]

指定编辑器内容发生变化时候的回调


### onRawChange [function(raw)]

指定编辑器内容发生变化时候的回调，参数为Raw格式的编辑器内容


### onHTMLChange [function(html)]

指定编辑器内容发生变化时候的回调，参数为HTML格式的编辑器内容


### controls [array:[string]]

指定控制栏组件，默认值如下：
```javascript
[
  'undo', 'redo', 'split', 'font-size', 'font-family', 'text-color',
  'bold', 'italic', 'underline', 'strike-through', 'superscript',
  'subscript', 'text-align', 'split', 'headings', 'list_ul', 'list_ol',
  'blockquote', 'code', 'split', 'link', 'split', 'media'
]
```


### addonControls [array:[object]]

指定自定义控制组件，目前仅支持分割线和按钮。 示例：
```javascript
[
  {
    type: 'split'
  },
  {
    type: 'button',
    text: 'Hello',
    className: 'preview-button',
    onClick: () => console.log('Hello World!')
  }
]
```


### height [number]

指定编辑区域的高度，不包括控制栏，默认是500


### language [string]

指定编辑器的语言，目前支持zh和en，默认zh



### placeholder [string]

设置placeholder文本



### viewWrapper [string]

指定编辑器的包裹容器的选择器字符串（例如'#wrapper', '.container'），用于下拉菜单等组件的位置自适应，默认为body

### colors [array:[string]]

指定编辑器可用的颜色列表，用于设定文本颜色和文本背景颜色，只支持6位16进制写法，默认可用颜色：
```javascript
[
  '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
  '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784',
  '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50'
]
```

### fontSizes [array:[number]]

指定编辑器可用的字号列表，用于设定文本内容的字号，默认可用字号：
```javascript
[
  12, 14, 16, 18, 20, 24,
  28, 30, 32, 36, 40, 48,
  56, 64, 72, 96, 120, 144
]
```

### fontFamilies [array:[object]]

指定编辑器可用的字体列表，用于设定文本内容的字体，默认可用字体：
```javascript
[
  {
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
  }
]
```

### media [object]

配置编辑器的多媒体插入功能:
```javascript
{
  image: true, // 开启图片插入功能
  video: true, // 开启视频插入功能
  audio: true, // 开启音频插入功能
  uploadFn: null // 指定上传函数，说明见下文
}
```
#### media.uploadFn [function]

指定上传函数，未指定时无法上传视频和音频，可上传图片，但只限本地预览。

#### media.uploadFn:param [object]

编辑器在调用该函数时，会传入一个包含文件体、文件在媒体库的ID、进度回调、成功回调和失败回调的对象作为参数：
```javascript
{
  file: [File Object],
  progress: function (progress) {
    // progress为0到100
  },
  libraryId: 'XXXXX',
  success: function (res) {
    // res须为一个包含已上传文件url属性的对象：
  },
  error: function (err) {

  }
}
```

uploadFn示例:
```javascript
const uploadFn = (param) => {

  const serverURL = 'http://upload-server'
  const xhr = new XMLHttpRequest
  const fd = new FormData()

  // libraryId可用于通过mediaLibrary示例来操作对应的媒体内容
  console.log(param.libraryId)

  const successFn = (response) => {
    // 假设服务端直接返回文件上传后的地址
    // 上传成功后调用param.success并传入上传后的文件地址
    param.success({
      url: xhr.responseText
    })
  }

  const progressFn = (event) => {
    // 上传进度发生变化时调用param.progress
    param.progress(event.loaded / event.total * 100)
  }

  const errorFn = (response) => {
    // 上传发生错误时调用param.error
    param.error({
      msg: 'unable to upload.'
    })
  }

  xhr.upload.addEventListener("progress", progressFn, false)
  xhr.addEventListener("load", successFn, false)
  xhr.addEventListener("error", errorFn, false)
  xhr.addEventListener("abort", errorFn, false)

  fd.append('file', param.file)
  xhr.open('POST', serverURL, true)
  xhr.send(fd)

}
```

## 实例方法

### 获取实例
```javascript
<BraftEditor ref={instance => this.editorInstance = instance}/>
```

### getContent
```javascript
// 获取指定格式的内容，format为获取内容的格式，默认与contentFormat一致， 另有getHTMLContent和getRawContent方法可用
this.editorInstance.getContent(format)
```

### setContent
```javascript
// 设置编辑器内容，用于需要异步填入编辑器内容的场景，format为填入内容的格式，默认与contentFormat一致
this.editorInstance.setContent(content, format)
```

### getEditorState
获取编辑器实例的editorState，一般情况下无需使用
```javascript
console.log(this.editorInstance.getEditorState())) //editorState object
```

### forceRender
强制编辑器内容重新渲染，一般情况下无需使用
```javascript
this.editorInstance.forceRender()
```

### getDraftInstance
获取draft内核的实例，用于调用draft的API
```javascript
const draftInstance = this.editorInstance.getDraftInstance()
// 使编辑器获得焦点
draftInstance.focus()
```
> 更多关于draft的资料，请参阅：https://draftjs.org/

### getMediaLibraryInstance
获取内置媒体库实例，可用于外部操作媒体库内容
```javascript
// 示例
const mediaLibrary = this.editorInstance.getMediaLibraryInstance()
const libraryId = new Date().getTime()
// 往媒体库添加一个图片
mediaLibrary.addItem({
  id: libraryId,
  type: 'IMAGE',
  name: 'Foo',
  url: 'http://path/to/image'
})
// 从媒体库删除先前插入的图片
setTimeout(() => {
  mediaLibrary.removeItem(libraryId)
}, 1000)
```
> 媒体库实例的具体使用请参阅：https://github.com/margox/braft-editor/tree/master/src/helpers/MediaLibrary/index.js

## 开发计划
- 支持图片修改宽度
- 完善多媒体插入工具
- 扩展自定义控制组件的类型，包括下拉菜单和弹窗等

## 已知问题
1. 编辑器内容为空时插入列表，placeholder文本不消失，输入任意文本内容后placeholder文本消失