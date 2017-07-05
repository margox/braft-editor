import React from 'react'
import { EditorState } from 'draft-js'

export default class History extends React.Component {

  render () {

    const { editorState } = this.props
    const currentInlineStyles = editorState.getCurrentInlineStyle()

    return (
      <div className="control-item-group history-control-items">
        <button className="control-item button" onClick={() => this.handleHistoryControl('undo')}>
          <i className="icon-undo"></i>
        </button>
        <button className="control-item button" onClick={() => this.handleHistoryControl('redo')}>
          <i className="icon-redo"></i>
        </button>
      </div>
    )

  }

  handleHistoryControl (type) {
    this.props.onChange(EditorState[type](this.props.editorState))
  }

}