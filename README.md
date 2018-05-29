# Braft Editor

### 一个基于[draft-js](https://draftjs.org/)的Web富文本编辑器，适用于React框架，兼容主流现代浏览器。

#### 交流反馈请加QQ群：725634541

#### 现已支持在typescript，使用npm或者yarn安装@types/braft-editor即可,墙裂感谢[@petitspois](https://github.com/petitspois)提供支持
#### 使用braft-convert的同学请将braft-convert升级到v1.9.1以确保功能同步
#### 如果需要在IE10中只用本项目，请参考：[braft-polyfill](https://github.com/margox/braft-polyfill)

## 最近更新
- 2018-05-29 v1.9.7
  - 支持在编辑器内播放嵌入式媒体
- 2018-05-24 v1.9.6
  - 新增forceNewLine属性，设置为true时，按回车键将插入`<br>`而非`<p></p>`
  - 部分细节优化
- 2018-05-23 v1.9.5
  - 部分细节优化
- 2018-05-22 v1.9.4
  - 优化了viewWrapper属性，无需再手动设置
- 2018-05-15 v1.9.3
  - 修复插入图片后输出内容异常的问题
- 2018-05-14 v1.9.2
  - 修复图片工具栏输入框无法点击的问题
- 2018-05-11 v1.9.1
  - 修复列表项目异常的问题
- 2018-05-11 v1.9.0
  - 支持编辑器内部拖动图片调整位置
  - 支持直接粘贴本地图片文件到编辑器
  - 支持直接拖入本地图片文件到编辑器
  - 新增insertHTML实例方法

## 已知问题
1. 使用html作为contentFormat时，文字字体(fontFamily)的的转换难以实现
2. 从外部复制HTML内容粘贴到编辑器时，文字字体(fontFamily)的识别难以实现
3. 编辑器内容为空时插入列表，placeholder文本不消失，输入任意文本内容后placeholder文本消失

[查看更新历史](https://github.com/margox/braft-editor/blob/master/CHANGELOG.md)

## 在线演示
移步: [http://margox.github.io/braft-editor/](http://margox.github.io/braft-editor/)

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

## 鸣谢
- 感谢[Jyoti Puri](https://github.com/jpuri) 开发的[draftjs-utils](https://github.com/jpuri/draftjs-utils) 提供的帮助和[react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) 提供的参考，Thanks！
- 感谢[HubSpot](https://github.com/HubSpot) 开发的[draft-convert](https://github.com/hubspot/draft-convert)，Thanks！

## 使用示例
```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

class Demo extends React.Component {

  render () {

    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: '<p>Hello World!</p>',
      onChange: this.handleChange,
      onRawChange: this.handleRawChange
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

  handleRawChange = (rawContent) => {
    console.log(rawContent)
  }

}
```

## 可用属性

### contentFormat [string: raw | html]

用于指定initialContent和onChange的内容格式，raw表示使用编辑器原始数据作为输入和输出类型, html表示使用HTML字符串作为输入和输出类型，默认为raw。
> 为了保证内容的可编辑性，强烈建议使用raw格式，并通过onHTMLChange获取HTML格式的内容


### initialContent [raw|string]

编辑器的初始内容，根据contentFormat类型传入html字符串或者raw字符串。
在默认情况下initialContent值只会在第一次传入的时候生效，如果需要多次生效，需要与contentId属性配合使用。
> 由于编辑器默认的contentFormat为'raw',如果需要传入html格式的initialContent，请将contentFormat指定为'html'


### contentId [string|number]

指定当前内容的唯一id，只有contentId发生变化时，编辑器才会使用新的initialContent。
> 建议直接传入文章id等类似的内容，确保编辑不同内容时，传入的initialContent能生效

### onChange [function(html|raw)]

指定编辑器内容发生变化时候的回调


### onRawChange [function(raw)]

指定编辑器内容发生变化时候的回调，参数为Raw格式的编辑器内容


### onHTMLChange [function(html)]

指定编辑器内容发生变化时候的回调，参数为HTML格式的编辑器内容

### onTab [function]

指定在编辑器内按下tab键时的回调，参数为按键事件对象
> 在编辑器内的代码块中按tab键不会触发此回调

### onSave [function]

指定一个函数，通常用于保存操作，在编辑器处于焦点时按下command/ctrl + s会执行此函数

### controls [array:[string]]

指定控制栏组件，默认值如下：
```javascript
[
  'undo', 'redo', 'split', 'font-size', 'font-family', 'line-height', 'letter-spacing',
  'indent','text-color', 'bold', 'italic', 'underline', 'strike-through',
  'superscript', 'subscript', 'remove-styles', 'emoji', 'text-align', 'split', 'headings', 'list_ul',
  'list_ol', 'blockquote', 'code', 'split', 'link', 'split', 'hr', 'split', 'media', 'clear'
]
```

### excludeControls [array:[string]]

指定不需要显示的控制栏组件，默认为空`[]`

### extendControls [array:[object]]

指定自定义控制组件，目前支持分割线[split]、按钮[button]、下拉框[dropdown]、模态框[modal]和完全自定义的组件[component]。 示例：
```javascript
[
  {
    type: 'split'
  },
  {
    type: 'button',
    text: 'Hello',
    html: '<span style="color:red;">Hello</span>',
    hoverTitle: 'Hello World!',
    className: 'preview-button',
    onClick: () => console.log('Hello World!')
  }, {
    type: 'dropdown',
    text: 'Foo',
    html: '<span style="color:blue;">Foo</span>',
    hoverTitle: 'Hello World!',
    showDropDownArrow: false, // 是否展示下拉组件顶部的小箭头
    autoHide: false, // 是否在下拉组件失去焦点后自动关闭下拉组件
    component: <YourComponent />
  }, {
    type: 'component',
    component: <YourComponent/> // 此处指定的组件将会直接渲染到工具栏中
  }, {
    type: 'modal',
    text: 'Bar',
    html: '<span style="color:green;">Bar</span>',
    hoverTitle: 'Hello World!',
    modal: {
      id: 'test-modal', // v1.4.0新增，必选
      title: '这是一个弹出框',
      showClose: true,
      showCancel: true,
      showConfirm: true,
      confirmable: true,
      onCreate: (modalInstance) => {},
      onConfirm: () => console.log(1),
      onCancel: () => console.log(2),
      onClose: () => console.log(3),
      children: (
        <div style={{width: 480, height: 320, padding: 30}}>
          <span>Hello World！</span>
        </div>
      )
    }
  }
]
```
> 使用自定义的弹窗组件时，必须为modal指定一个id，以保证modal内容能动态更新

### extendAtomics [array:[object]]
添加自定义的编辑器显示组件，用来支持一些比较复杂的编辑需求。通过这种方式编辑的内容，只能通过raw方式读取和存储。

```javascript
  class CustomAtomic extends React.Component {
    // 需要通过设置readonly来保证组件内部文本框可交互
    onMouseOver() {
      this.props.editor.setEditorProp('readOnly', true)
    }
    onMouseLeave() {
      this.props.editor.setEditorProp('readOnly', false)
    }
    render() {
      return (
        <div className="braft-custom-atomic"
            onMouseOver={this.onMouseOver.bind(this)}
            onMouseLeave={this.onMouseLeave.bind(this)}>
          hello world
          <input type="text"/>
        </div>
      )
    }
  }
  
  const extendAtomic = [
    {
      type: 'CUSTOM',
      component: CustomAtomic
    }
  ]
  
  // 然后将extendAtomics作为props传入即可使用
  <BraftEditor extendAtomics={extendAtomics} ref={(instance) => this.editorInstance = instance}  {...otherProps} />

  // 添加组件
  this.editorInstance.insertMedias([{
    type: 'CUSTOM',
    name: 'CustomElement',
  }]);
```

### disabled [boolean]

是否禁用编辑功能，默认false


### height [number]

指定编辑区域的高度，不包括控制栏，默认是500。
> 如果需要编辑器自动适应内容高度，可以将此属性设置为0，同时通过外部CSS设置编辑器的最小与最大高度以免下拉菜单工具展示异常。


### language [string]

指定编辑器的语言，目前支持zh、zh-hant和en，默认zh


### placeholder [string]

设置placeholder文本


### viewWrapper [string]

指定编辑器的包裹容器的选择器字符串（例如'#wrapper', '.container'），用于下拉菜单等组件的位置自适应，默认为编辑器自身


### tabIndents [number]

指定编辑器编辑代码块时按下tab插入的缩进空格数，默认是2


### forceNewLine [boolean]

指定是否启用强制空行，该属性为true时按回车键将会插入`<br>`而非`<p></p>`，默认为false


### textAlignOptions [array]

指定可使用的文字对齐方式，默认值如下：
```javascript
['left', 'center', 'right', 'justify']
```

### colors [array:[string]]

指定编辑器可用的颜色列表，用于设定文本颜色和文本背景颜色，只支持6位16进制写法，默认可用颜色：
```javascript
[
  '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
  '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784',
  '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50'
]
```

### allowSetTextBackgroundColor [boolean]

是否允许设置文本的背景颜色，默认是true

### fontSizes [array:[number]]

指定编辑器可用的字号列表，用于设定文本内容的字号，默认可用字号：
```javascript
[
  12, 14, 16, 18, 20, 24,
  28, 30, 32, 36, 40, 48,
  56, 64, 72, 96, 120, 144
]
```

### lineHeights [array:[number]] 

指定编辑器可用的行高列表，用于设定文本内容的行高，默认可用行高：
```javascript
[
  '1', '1.2', '1.5', '1.75',
  '2', '2.5', '3', '4'
],
```

### letterSpacings [array:[number]]

指定编辑器可用的字符间隔列表，用于设定文本的字符间隔，默认可用间隔值：
```javascript
[0, 2, 4, 6]
```

### indents [array:[number]]

指定编辑器可用的两端缩进列表，用于设定文本段落的两端缩进，默认可用缩进值：
```javascript
[0, 14, 21, 28]
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

### emojis [array:[String]]
配置编辑器可用的表情列表，默认可用表情：
```javascript
[
  "🤣","🙌","💚","💛","👏","😉","💯",
  "💕","💞","💘","💙","💝","🖤","💜",
  "❤️","😍","😻","💓","💗","😋","😇",
  "😂","😹","😘","💖","😁","😀","🤞",
  "😲","😄","😊","👍","😌","😃","😅",
  "✌️","🤗","💋","😗","😽","😚","🤠",
  "😙","😺","👄","😸","😏","😼","👌",
  "😎","😆","😛","🙏","🤝","🙂","🤑",
  "😝","😐","😑","🤤","😤","🙃","🤡",
  "😶","😪","😴","😵","😓","👊","😦",
  "😷","🤐","😜","🤓","👻","😥","🙄",
  "🤔","🤒","🙁","😔","😯","☹️","☠️",
  "😰","😩","😖","😕","😒","😣","😢",
  "😮","😿","🤧","😫","🤥","😞","😬",
  "👎","💀","😳","😨","🤕","🤢","😱",
  "😭","😠","😈","😧","💔","😟","🙀",
  "💩","👿","😡","😾","🖕"
]
```
> 此默认列表不保证全平台正常显示，请按需调整

### pasteMode ['text' | '']
指定粘贴模式，如果为text，则粘贴的时候会过滤掉HTML格式，默认为空

### media [object]

配置编辑器的多媒体插入功能:
```javascript
{
  allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
  image: true, // 开启图片插入功能
  video: true, // 开启视频插入功能
  audio: true, // 开启音频插入功能
  validateFn: null, // 指定本地校验函数，说明见下文
  uploadFn: null, // 指定上传函数，说明见下文
  removeConfirmFn: null, // 指定删除前的确认函数，说明见下文
  onRemove: null, // 指定媒体库文件被删除时的回调，参数为被删除的媒体文件列表(数组)
  onChange: null, // 指定媒体库文件列表发生变化时的回调，参数为媒体库文件列表(数组)
  onInsert: null, // 指定从媒体库插入文件到编辑器时的回调，参数为被插入的媒体文件列表(数组)
}
```
> 粘贴的图片依然会通过media.uploadFn上传到服务器，但是暂时不会调用media.validateFn来进行校验

#### media.validateFn [function]

在选择文件之后，编辑器会调用此函数对每一个选择的文件进行校验，如果该函数返回false，则对应的文件不会被添加到媒体库：
```javascript
// 示例，不允许选择大于100K的文件
const validateFn = (file) => {
  return file.size < 1024 * 100
}
```

#### media.uploadFn [function]

指定上传函数，未指定时无法上传视频和音频，可上传图片，但只限本地预览。

#### media.uploadFn:param [object]

编辑器在调用media.uploadFn时，会传入一个包含文件体、文件在媒体库的ID、进度回调、成功回调和失败回调的对象作为参数：
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
      url: xhr.responseText,
      meta: {
        id: 'xxx',
        title: 'xxx',
        alt: 'xxx',
        loop: true, // 指定音视频是否循环播放
        autoPlay: true, // 指定音视频是否自动播放
        controls: true, // 指定音视频是否显示控制栏
        poster: 'http://xxx/xx.png', // 指定视频播放器的封面
      }
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

#### media.removeConfirmFn [function]

指定媒体库文件的删除确认函数，未指定时，删除单个和多个媒体库文件都不需要确认

#### media.removeConfirmFn:param [object]

编辑器在调用media.removeConfirmFn时，会将待删除的文件和确认删除回调作为参数传过来，以下是一个删除确认函数示例:
```javascript
const removeConfirmFn = (param) => {

  if (param.items.length > 1) {

    // 调用原生confirm对话框
    if (confirm('确认删除这些文件么?')) {
      // 告知编辑器确认删除文件
      param.confirm()
    }

  } else if (param.items.length === 1) {

    // 调用原生confirm对话框
    if (confirm('确认删除这个文件么?')) {
      // 告知编辑器确认删除文件
      param.confirm()
    }

  } 

}
```

#### media.onInsert [object]
从媒体库插入媒体资源到编辑器时会执行此回调，可以在此回调中修改需要插入的媒体对象，示例如下：
```javascript
media.onInsert = (files) => {

  // 只插入前3个媒体对象
  return files.slice(0, 3)

  // 取消插入并保留媒体库弹窗
  return false

  // 取消插入并关闭媒体库弹窗
  return []

}
```

#### media.externalMedias [object]
配置编辑器可插入的外部网络媒体类型，默认值如下：
```javascript
{
  image: true,
  audio: true,
  video: true,
  embed: true
}
// 如果以上四个值皆为false，则不允许插入任何外部媒体，也不会显示插入外部媒体的入口
```

#### imageControls [object]
配置图片工具栏(tooltip)可用的按钮，默认值如下：
```javascript
{
  floatLeft: true,
  floatRight: true,
  alignLeft: true,
  alignCenter: true,
  alignRight: true,
  link: true,
  size: true
}
```

#### onFocus [function]
指定编辑器获得焦点时的回调

#### onBlur [function]
指定编辑器失去焦点时的回调

## 实例方法
> 绝大多数的非get类方法都会返回编辑器实例，即支持链式调用


### 获取实例
```javascript
<BraftEditor ref={instance => this.editorInstance = instance}/>
```

### getContent(?format):HTMLContent | RawContent
```javascript
// 获取指定格式的内容，format为获取内容的格式，默认与contentFormat一致， 另有getHTMLContent和getRawContent方法可用
this.editorInstance.getContent(format)
```

### setContent(HTMLContent | RawContent, ?format):editorInstance
```javascript
// 设置编辑器内容，用于需要异步填入编辑器内容的场景，format为填入内容的格式，默认与contentFormat一致
this.editorInstance.setContent(content, format)
```

### getEditorState():editorState
获取编辑器实例的editorState，一般情况下无需使用
```javascript
this.editorInstance.getEditorState()
```

### forceRender():editorInstance
强制编辑器内容重新渲染，一般情况下无需使用
```javascript
this.editorInstance.forceRender()
```

### getDraftInstance():draftInstance
获取draft内核的实例，用于调用draft的API
```javascript
const draftInstance = this.editorInstance.getDraftInstance()
// 使编辑器获得焦点
draftInstance.focus()
```
> 更多关于draft的资料，请参阅：https://draftjs.org/

### getMediaLibraryInstance():mediaLibraryInstance
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
  url: 'http://path/to/image',
  thumbnail: 'http://path/to/thumbnail'
})
// 从媒体库删除先前插入的图片
setTimeout(() => {
  mediaLibrary.removeItem(libraryId)
}, 1000)
```
> 媒体库实例的具体使用请参阅：https://github.com/margox/braft-editor/tree/master/src/helpers/MediaLibrary/index.js

### selectionCollapsed():Boolean
判断当前是否选中内容
```javascript
this.editorInstance.selectionCollapsed()
```

### getSelectionBlockType():String
获取选中内容的区块类型
```javascript
this.editorInstance.getSelectionBlockType()
```

### toggleSelectionBlockType():editorInstance
切换选中内容的区块类型，可用的区块类型请参见[可用区块类型](#可用区块类型)
```javascript
this.editorInstance.toggleSelectionBlockType('blockquote')
```

### getSelectionInlineStyle():DraftInlineStyle
获取选中内容的行内样式
```javascript
this.editorInstance.getSelectionInlineStyle()
```

### selectionHasInlineStyle():Boolean
判断选中内容是否包含指定的行内样式
```javascript
this.editorInstance.selectionHasInlineStyle('BOLD')
```

### toggleSelectionInlineStyle(style:String, ?stylesToBeRemoved:Array):editorInstance
切换选中内容的行内样式, 同时可传入一个需要移除的样式数组
```javascript
// 加粗文字，同时移除文字斜体样式
this.editorInstance.toggleSelectionInlineStyle('BOLD', ['ITALIC'])
```

### toggleSelectionAlignment(alignment):editorInstance
切换选中内容的文本对齐方式，参数可以是left/center/right
```javascript
this.editorInstance.toggleSelectionAlignment('center')
```

### toggleSelectionColor(hexColor:String):editorInstance
切换选中内容的文字颜色，参数为可用颜色中的一个
```javascript
this.editorInstance.toggleSelectionColor('#ffffff')
```

### toggleSelectionBackgroundColor(hexColor:String):editorInstance
切换选中内容的文字背景颜色，参数为可用颜色中的一个
```javascript
this.editorInstance.toggleSelectionBackgroundColor('#000000')
```

### toggleSelectionFontSize(fontSize:Number):editorInstance
切换选中内容的文字大小，参数为可用字号中的一个
```javascript
this.editorInstance.toggleSelectionFontSize(24)
```

### toggleSelectionFontFamily(fontFamily:String):editorInstance
切换选中内容的文字字体，参数为可用字体中的一个(name)
```javascript
this.editorInstance.toggleSelectionFontFamily('Impact')
```

### toggleSelectionLink(href:String, target:String):editorInstance
为选中内容添加超链接
```javascript
this.editorInstance.toggleSelectionLink('http://www.baidu.com', '_blank')
// 移除所选内容的超链接
this.editorInstance.toggleSelectionLink(false)
```

### insertText(text:String, replace:Boolean):editorInstance
插入纯文本内容到光标之后，如果当前已选中内容并且replace为true，则会替换被选中内容，replace默认为true
```javascript
this.editorInstance.insertText('Hello World!')
```

### insertHTML(htmlString:String):editorInstance
插入HTML片段到光标之后
```javascript
this.editorInstance.insertHTML('<p><span color="#ff0000;">Hello World!</span></p>')
```
> 由于框架限制，此方法并不一定能满足所有场景的需求，请自行尝试后再决定是否使用

### insertMedias(medias:Array):editorInstance
插入媒体内容到编辑器，medias为数组，格式如下：
```javascript
this.editorInstance.insertMedias([
  {
    type: 'IMAGE',
    name: 'New Photo',
    url: 'http://path/to/image.png'
  }, {
    type: 'VIDEO',
    name: 'New Video',
    url: 'http://path/to/image-2.mp4'
  }, {
    type: 'AUDIO',
    name: 'New Audio',
    url: 'http://path/to/image-2.mp3'
  }
])
```

### isEmpty():Boolean
判断编辑器内容是否为空
```javascript
this.editorInstance.isEmpty()
```
> 由于draft框架的原因，该方法返回true时，依然可以从编辑器获取到一对空的p标签`<p></p>`，反之亦然

### clear():editorInstance
清空编辑器内容
```javascript
this.editorInstance.clear()
```
> 通过此方法进行清空后，可以通过撤销操作来还原编辑器内容，若需要不可撤销地清空，请使用`editorInstance.setContent('', 'html')`

### undo():editorInstance
插销一次操作
```javascript
this.editorInstance.undo()
```

### redo():editorInstance
重做一次操作
```javascript
this.editorInstance.redo()
```

### focus():editorInstance
使编辑器获得焦点
```javascript
this.editorInstance.focus()
```

### blur():editorInstance
使编辑器失去焦点
```javascript
this.editorInstance.blur()
```

## 开发计划
- 支持图片修改宽度
- 支持多实例共存

## 附录

### 可用区块类型
```javascript
[
  'header-one',
  'header-two',
  'header-three',
  'header-four',
  'header-five',
  'header-six',
  'unstyled',
  'blockquote',
  'code-block',
  'unordered-list-item',
  'ordered-list-item'
]
```
