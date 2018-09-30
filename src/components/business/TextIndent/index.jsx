import React from 'react'
import { ContentUtils } from 'braft-utils'

export default class TextAlign extends React.Component {

  state = {
    currentIndent: 0
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      currentIndent: ContentUtils.getSelectionBlockData(nextProps.editorState, 'textIndent') || 0
    })
  }

  increaseIndent = () => {

    const { currentIndent } = this.state

    if (currentIndent >= 6) {
      return false
    }

    let indent = this.props.hooks('increase-text-indent', currentIndent + 1)(currentIndent + 1)
    isNaN(indent) && (indent = currentIndent + 1)

    this.props.editor.setValue(ContentUtils.toggleSelectionIndent(this.props.editorState, indent, 6))
    this.props.editor.requestFocus()

  }

  decreaseIndent = () => {

    const { currentIndent } = this.state

    if (currentIndent <= 0) {
      return false
    }

    let indent = this.props.hooks('decrease-text-indent', currentIndent - 1)(currentIndent - 1)
    isNaN(indent) && (indent = currentIndent - 1)

    this.props.editor.setValue(ContentUtils.toggleSelectionIndent(this.props.editorState, indent, 6))
    this.props.editor.requestFocus()

  }

  render () {

    const { currentIndent } = this.state
    const { language } = this.props

    return (
      <div className='control-item-group'>
        <button
          type='button'
          data-title={language.controls.increaseIndent}
          disabled={currentIndent >= 6}
          className={`control-item button button-indent-increase${currentIndent > 0 && currentIndent < 6 ? ' active' : ''}`}
          onClick={this.increaseIndent}
        >
          <i className={'bfi-indent-increase'}></i>
        </button>
        <button
          type='button'
          data-title={language.controls.decreaseIndent}
          disabled={currentIndent <= 0}
          className="control-item button button-indent-decrease"
          onClick={this.decreaseIndent}
        >
          <i className={'bfi-indent-decrease'}></i>
        </button>
      </div>
    )

  }

}