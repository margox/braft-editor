import './styles.scss'
import React from 'react'
import { Map } from 'immutable'
import { EditorState, SelectionState } from 'draft-js'
import PrismDecorator from 'draft-js-prism'
import { ContentUtils } from 'braft-utils'
import Prism from 'prismjs'

class CodeBlockWrapper extends React.Component {

  constructor (props) {

    super(props)

    this.state = {
      syntax: props.syntaxs[0].syntax,
      syntaxName: props.syntaxs[0].name,
    }

  }

  codeBlockBlockKey = null
  codeBlockBlock = null

  componentDidMount () {
    this.codeBlockBlock = this.getCodeBlockBlock(this.props)
    this.getCodeBlockSyntax(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.codeBlockBlock = this.getCodeBlockBlock(nextProps)
    this.getCodeBlockSyntax(nextProps)
  }

  getCodeBlockBlock (props) {

    try {

      const offsetKey = props['data-offset-key']
      const blockKey = offsetKey.split('-')[0]
      const contentState = props.editorState.getCurrentContent()
  
      this.codeBlockBlockKey = blockKey

      return contentState.getBlockForKey(blockKey)

    } catch (error) {
      console.warn(error)
      return null
    }

  }

  getCodeBlockSyntax (props) {

    if (this.codeBlockBlock) {

      const blockData = this.codeBlockBlock.getData()
      const syntax = blockData.get('syntax') || props.syntaxs[0].syntax
      const syntaxName = props.syntaxs.find(item => item.syntax === syntax).name

      if (!syntaxName) {
        return false
      }

      this.setState({ syntax, syntaxName })

    }

  }

  setCodeBlockSyntax = (event) => {

    const syntax = event.currentTarget.dataset.syntax

    if (!syntax) {
      return false
    }

    try {

      const syntaxName = this.props.syntaxs.find(item => item.syntax === syntax).name

      if (!syntaxName) {
        return false
      }

      const selectionState = SelectionState.createEmpty(this.codeBlockBlockKey)
      const editorState = EditorState.forceSelection(this.props.editorState, selectionState)

      this.props.editor.setValue(ContentUtils.setSelectionBlockData(editorState, { syntax }))
      this.setState({ syntax, syntaxName })

    } catch (error) {
      console.warn(error)
    }

  }

  render () {

    return (
      <div className="braft-code-block-wrapper">
        <div className="braft-code-block-header" contentEditable={false}>
          <div className="syntax-switcher">
            <span>{this.state.syntaxName}</span>
            <ul className="syntax-list">
              {this.props.syntaxs.map((item, index) => <li key={index} data-syntax={item.syntax} onClick={this.setCodeBlockSyntax}>{item.name}</li>)}
            </ul>
          </div>
        </div>
        <pre className={`braft-code-block${this.props.showLineNumber ? ' show-line-number' : ''}`} data-syntax={this.state.syntax}>{this.props.children}</pre>
      </div>
    )

  }

}

const getCodeBlockBlock = (block) => {

  if (!block || !block.getType || block.getType() !== 'code-block') {
    return null
  }

  const blockDOMNode = document.querySelector(`code[data-offset-key="${block.getKey()}-0-0"]`)

  if (!blockDOMNode) {
    return null
  }

  if (blockDOMNode.parentNode.nodeName.toLowerCase() !== 'pre') {
    return null
  }

  return blockDOMNode.parentNode.dataset.syntax

}

const getCodeBlockRenderMap = (options) => (props) => {

  return Map({
    'code-block': {
      element: 'code',
      wrapper: <CodeBlockWrapper {...options} {...props}/>,
      nestingEnabled: false
    }
  })

}

export default (options = {}) => {

  const { showLineNumber, showTools, includeEditors, excludeEditors } = options
  const syntaxs = options.syntaxs || [
    {
      name: 'JavaScript',
      syntax: 'javascript'
    }, {
      name: 'HTML',
      syntax: 'html'
    }, {
      name: 'CSS',
      syntax: 'css'
    }
  ] 

  return [
    {
      type: 'block',
      name: 'code-block',
      includeEditors, excludeEditors,
      renderMap: getCodeBlockRenderMap({ syntaxs, showLineNumber, showTools }),
      importer: (nodeName, node) => {

        if (nodeName.toLowerCase() === 'pre') {

          try {

            const syntax = node.dataset.lang

            return syntax ? {
              type: 'code-block',
              data: { syntax }
            } : null

          } catch (error) {
            return null
          }

        }

        return null

      },
      exporter: (contentState, block) => {

        if (block.type.toLowerCase() !== 'code-block') {
          return null
        }

        const previousBlock = contentState.getBlockBefore(block.key)
        const nextBlock = contentState.getBlockAfter(block.key)
        const previousBlockType = previousBlock && previousBlock.getType()
        const nextBlockType = nextBlock && nextBlock.getType()
        const syntax = block.data.syntax || syntaxs[0].syntax

        if (previousBlockType !== 'code-block' && nextBlockType !== 'code-block') {
          return {
            start: `<pre data-lang="${syntax}" class="lang-${syntax}">`,
            end: '</pre>'
          }
        }

        if (previousBlockType !== 'code-block') {
          return {
            start: `<pre data-lang="${syntax}" class="lang-${syntax}">`,
            end: '<br/>'
          }
        }

        if (nextBlockType !== 'code-block') {
          return {
            start: '',
            end: '</pre>'
          }
        }

        return {
          start: '',
          end: '<br/>',
        }

      }
    }, {
      type: 'decorator',
      includeEditors, excludeEditors,
      decorator: new PrismDecorator({
        prism: Prism,
        getSyntax: getCodeBlockBlock,
        defaultSyntax: syntaxs[0].syntax
      })
    }
  ]

}