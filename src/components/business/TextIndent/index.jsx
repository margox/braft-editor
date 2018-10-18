import React from 'react'
import { ContentUtils } from 'braft-utils'
import ControlGroup from 'components/business/ControlGroup'

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
    this.props.editor.setValue(ContentUtils.increaseSelectionIndent(this.props.editorState))
    this.props.editor.requestFocus()
  }

  decreaseIndent = () => {
    this.props.editor.setValue(ContentUtils.decreaseSelectionIndent(this.props.editorState))
    this.props.editor.requestFocus()
  }

  render () {

    const { currentIndent } = this.state
    const { language } = this.props

    return (
      <ControlGroup>
        <button
          key={0}
          type='button'
          data-title={language.controls.increaseIndent}
          disabled={currentIndent >= 6}
          className={`control-item button button-indent-increase${currentIndent > 0 && currentIndent < 6 ? ' active' : ''}`}
          onClick={this.increaseIndent}
        >
          <i className={'bfi-indent-increase'}></i>
        </button>
        <button
          key={1}
          type='button'
          data-title={language.controls.decreaseIndent}
          disabled={currentIndent <= 0}
          className="control-item button button-indent-decrease"
          onClick={this.decreaseIndent}
        >
          <i className={'bfi-indent-decrease'}></i>
        </button>
      </ControlGroup>
    )

  }

}