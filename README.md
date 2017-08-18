# Braft Editor

### 一个基于darft-js开发的Web富文本编辑器，适用于React框架，兼容主流现代浏览器。

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
  video: false, // 开启视频插入功能
  audio: true, // 开启音频插入功能
  uploadFn: null // 说明见下文
}
```
#### media.uploadFn [function]

指定上传函数，未指定时无法上传视频和音频，可上传图片，但只限本地预览。

#### media.uploadFn:param [object]

编辑器在调用该函数时，会传入一个包含文件体、进度回调、成功回调和失败回调的对象作为参数：
```javascript
{
  file: [File Object],
  progress: function (progress) {
    // progress为0到100
  },
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
