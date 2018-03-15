import React from 'react'
import './style.scss'

export default class HorizontalLine extends React.Component {

  render () {

    return (
      <div className="braft-horizontal-line">
        <div className="braft-horizontal-line-toolbar">
          <a onClick={this.removeHorizontalLine}>&#xe9ac;</a>
        </div>
      </div>
    )

  }

  removeHorizontalLine = () => {
    this.props.editor.removeBlock(this.props.block)
  }

}