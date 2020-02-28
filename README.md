# Braft Editor-EN 
> Thanks to **Google Translate**

#### A web rich text editor based on draft-js, suitable for React framework, compatible with mainstream modern browsers.
#### [Use Document](https://www.yuque.com/margox/be) [Online Demo](https://braft.margox.cn/demos/basic)
##### Note that the current version of the project is 2.x. If you are using 1.xx version, please refer to [Old Version Document](https://github.com/margox/braft-editor/blob/old-master/README. md)

## Please understand before using
Braft Editor is an editor based on draft-js. Draft-js does not directly use HTML as the component state. It implements an EditorState type, which is essentially a JS object. In the traditional rich text editor, The piece of HTML content corresponding to EditorState is a block; this can be verified by looking at editorState.toRAW ().

The advantage of using EditorState instead of HTML strings is that a set of EditorState can be used on multiple ends, and the content produced by the editor is no longer limited to being displayed on the web platform (of course, each platform also needs to implement the corresponding EditorState to View conversion function) At the same time, it is more suitable for the component state of React.

However, in the above implementation, the biggest problem is that it cannot perfectly convert external HTML into EditorState, because its supported styles, tags, tag attributes, and so on are extremely limited, and there is no way to convert all the features in HTML to the state in EditorState. , When using third-party or historical HTML strings to initialize the editor content, and when pasting external HTML content, only a small number of styles and tag attributes supported by the editor can be retained, most of the content will be filtered or Ignore it.

Based on the above shortcomings, if your project strongly depends on the original HTML tags and attributes, etc., this editor is not recommended.

### Editor-specific extension packs have been released, please see [Braft Extensions](https://github.com/margox/braft-extensions)

The form extension module has been released in a test version. Please upgrade craft-editor and craft-utils to the latest version and install the latest version of craft-extensions. For the usage, please see [[form extension module](https://github.com/margox/braft-extensions#%E8%A1%A8%E6%A0%BC%E6%A8%A1%E5%9D%97)]

Exchange feedback, please add QQ group: 725634541

## Features

- Perfect text content editing function
- Many open editing interfaces, good scalability
- Allows inserting multimedia content such as pictures, audio and video
- Allows to customize the upload interface of multimedia content
- Allow to set the image to float left and right (ie text wrapping function)
- Allows setting the color list, font size, and fonts available to the editor
- Allows customizing the control buttons and display order to be displayed
- Allows adding additional custom buttons
- Multi-language support (Simplified Chinese, Traditional Chinese, English, Polish, Japanese, Korean, Turkish)
- ... More features under development

## Thanks
- Thanks to [Draftjs-utils](https://github.com/jpuri/draftjs-utils) developed by [Jyoti Puri](https://github.com/jpuri) for help and [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) References, Thanks!
- Thanks [Draft-convert](https://github.com/hubspot/draft-convert) developed by [HubSpot](https://github.com/HubSpot), Thanks!
- Thanks to [Samy Pessé](https://github.com/SamyPesse) for [draft-js-multidecorators](https://github.com/SamyPesse/draft-js-multidecorators), Thanks!
- Thanks to [JackLam](https://github.com/lamjack) for traditional Chinese language self-holding, Thanks!
- Thanks to [Paweł Krefta](https://github.com/pkrefta) for Polish language support, Thanks!
- Thanks to [YYL1999](https://github.com/YYL1999) for Korean and Japanese language support, Thanks!
- Thanks to [Gencer W. Genç](https://github.com/gencer) for Turkish language support, Thanks!

## Recent updates

- 2019-08-06 v2.3.8
  - Fixed the issue that javascript statements in a tag href caused a warning
  - Merge PR [# 560](https://github.com/margox/braft-editor/pull/560), [# 593](https://github.com/margox/braft-editor/pull/593) , [# 588](https://github.com/margox/braft-editor/pull/588), [# 582](https://github.com/margox/braft-editor/pull/582)
- 2019-06-20 v2.3.7
  - Fix issues [# 542](https://github.com/margox/braft-editor/issues/542), [# 541](https://github.com/margox/braft-editor/issues/541) , [# 467](https://github.com/margox/braft-editor/issues/467)
  - Fix the problem [# 512](https://github.com/margox/braft-editor/issues/512) and add the imageResizable attribute, which allows to turn off the drag and resize function of the image
- 2019-06-18 v2.3.6
  - Supports inserting links without selecting text
  - Added `allowInsertLinkText` property, allowing link text to be entered when inserting a link directly, default` false`
- 2019-06-14 v2.3.5
  - Perfect index.d.ts
- 2019-06-11 v2.3.4
  - Support the retention of some more custom html attributes (need to upgrade craft-convert to v2.3.0)
  - Added Korean (kr), Japanese (jpn), Turkish (tr)
  - Add more [hooks](https://www.yuque.com/braft-editor/be/gz44tn#gug9gs) support
- 2019-05-28 v2.3.2
  - Fixed the issue that incoming RAW strings could not be parsed normally
- 2019-05-20 v2.3.1
  - Fixed fatal bug in v2.3.0
- 2019-05-20 v2.3.0
  - Support nested list and optimization of some internal details, thanks to [SyMind](https://github.com/SyMind) for your contribution: [PR # 486](https://github.com/margox/braft-editor/pull /486),[PR#485](https://github.com/margox/braft-editor/pull/485)
  - Optimize issues for use in SSR
- 2019-04-29 v2.2.10
  - The picture supports dragging and resizing. Thanks to [ArthasDragon](https://github.com/margox/braft-editor/pull/424) for your contribution!
  - Optimized the use of pure numbers to initialize the editor's content. Thank you [WzFFzW](https://github.com/margox/braft-editor/pull/446) for your contribution!
  - Added fixPlaceholder attribute (Boolean), which is used to fix the problem that placeholder text is displayed abnormally in some cases. The default is false.
  - Optimize forceRender
- 2019-03-06 v2.2.9
  - Modify index.d.ts
- 2019-02-22 v2.2.7
  - Added boilerplate CSS files for beautifying output HTML(`node_modules/braft-editor/dist/output.css`)
- 2019-02-22 v2.2.6
  - Optimize the blockRenerMap property and support passing in a function that returns a blockRenerMap object
  - Optimize the settings of subscript style
  - Optimize the display of text indentation and text alignment in the editor when colleagues are present
- 2019-01-11 v2.2.4
  - Added the editorId property, which has the same effect as the id property, and is used to solve the problem that the id property will be overwritten in the Ant Design Form component and the extension module cannot be used normally
- 2019-01-11 v2.2.2
  - Optimized the playback interaction between audio and video and embedded media, instead playing in the modal box
- 2019-01-06 v2.2.1
  - Perfect index.d.ts([PR#340](https://github.com/margox/braft-editor/pull/340))
- 2018-12-29 v2.2.0
  - Added the d.ts file, which is more friendly to use in TypeScript projects. Thanks for the contribution of [张 川 大兄](https://github.com/weifuchuan)
  - Fixed the problem that the input box in the popup component is unavailable
  - Other optimizations and bug fixes: [Issue # 336](https://github.com/margox/braft-editor/issues/336), [Issue # 331](https://github.com/margox/braft- editor / issues / 331), [Issue # 328](https://github.com/margox/braft-editor/issues/328)

[View history update record](https://github.com/margox/braft-editor/blob/master/CHANGELOG.md)

## installation

```bash
# Install using yarn
yarn add braft-editor
# Install using npm
npm install braft-editor --save
```

## use

The editor supports **value** and **onChange** properties, which are similar to the native input components in React. In general, you can use this editor in the form of a typical **controlled component**:

```jsx
import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

export default class EditorDemo extends React.Component {

  state = {
      editorState: null
  }

  async componentDidMount () {
    // Assume here to get the editor content in html format from the server
    const htmlContent = await fetchEditorContent()
    // Use BraftEditor.createEditorState to convert html strings to editorState data needed by the editor
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent)
    })
  }

  submitContent = async () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = this.state.editorState.toHTML()
    const result = await saveEditorContent(htmlContent)
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }

  render () {

    const { editorState } = this.state

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

Of course, this editor also supports the **defaultValue** property, so you can also use this editor as a **uncontrolled component**.
-------

#### For more introduction, please see [Detailed Document](https://www.yuque.com/margox/be/lzwpnr#zrs7hr)

## Buy me a beer
If you want to thank this editor for saving time for your project, or simply like this editor, you can scan the code and appreciate a few dollars to invite me for a beer!

<img src="https://braft.margox.cn/images/qrcode-alipay.png" width="180" height="180" />&emsp;&emsp;
<img src="https://braft.margox.cn/images/qrcode-wechat.png" width="180" height="180" />

#### &emsp;&emsp;&emsp;&emsp;支付宝&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;WeChat