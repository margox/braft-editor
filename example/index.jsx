import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'
import { ContentUtils } from 'braft-utils'

const customStyleMap = {
  'UNDERDOT': {
    textEmphasis: 'circle',
    textEmphasisPosition: 'under',
    WebkitTextEmphasis: 'circle',
    WebkitTextEmphasisPosition: 'under'
  }
}

const styleExportFn = (style) => {

  if (style === 'UNDERDOT') {
    return <span style={customStyleMap.UNDERDOT}/>
  }

}

const styleImportFn = (nodeName, node, currentStyle) => {

  let newStyle = currentStyle;

  [].forEach.call(node.style, (style) => {

    if (nodeName === 'span' && style.indexOf('text-emphasis') !== -1) {
      newStyle = newStyle.add('UNDERDOT')
    }

  })

  return newStyle

}

const customLanguageFn = (language) => {
  language.controls.clear = '删掉内容'
  return language
}

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState('<p><strong>撒<em>打<span style="text-decoration:line-through"><span style="text-emphasis:circle;text-emphasis-position:under;-webkit-text-emphasis:circle;-webkit-text-emphasis-position:under">算</span><span style="color:#07a9fe">打</span></span></em></strong></p>', { styleImportFn })
    }

  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  toggleUnderDot = () => {
    this.setState({
      editorState: ContentUtils.toggleSelectionInlineStyle(this.state.editorState, 'UNDERDOT')
    }, () => {
      const blockData = ContentUtils.getSelectionBlockData(this.state.editorState)
      console.log(blockData.toJS())
    })
  }

  logHTML = () => {
    console.log(this.state.editorState.toHTML())
  }

  render() {

    const { editorState } = this.state
    const underdotActive = ContentUtils.selectionHasInlineStyle(editorState, 'UNDERDOT')

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            extendControls={[
              {
                key: 'underdot',
                type: 'button',
                text: underdotActive ? '取消着重' : '添加着重',
                onClick: this.toggleUnderDot
              }, {
                key: 'preview',
                type: 'button',
                text: '输出HTML',
                onClick: this.logHTML
              }
            ]}
            customLanguageFn={customLanguageFn}
            styleExportFn={styleExportFn}
            customStyleMap={customStyleMap}
            onChange={this.handleChange}
            value={editorState}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))