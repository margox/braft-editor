import React from 'react'
import { EditorState } from 'draft-js'

export default class History extends React.Component {

  render () {

    const { editorState } = this.props
    const currentInlineStyles = editorState.getCurrentInlineStyle()

    return (
      <div className="control-item-group history-control-items">
        <button className="control-item button" title="Undo" onClick={() => this.applyHistoryControl('undo')}>
          <i className="icon-undo"></i>
        </button>
        <button className="control-item button" title="Redo" onClick={() => this.applyHistoryControl('redo')}>
          <i className="icon-redo"></i>
        </button>
      </div>
    )

  }

  applyHistoryControl (type) {
    this.props.onChange(EditorState[type](this.props.editorState))
  }

}