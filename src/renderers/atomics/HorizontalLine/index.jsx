import React from 'react'
import { ContentUtils } from 'braft-utils'
import './style.scss'

export default class HorizontalLine extends React.Component {

  render () {

    return (
      <div className='bf-hr'>
        <div className='bf-media-toolbar'>
          <a onClick={this.removeHorizontalLine}>&#xe9ac;</a>
        </div>
      </div>
    )

  }

  removeHorizontalLine = () => {
    this.props.editor.setValue(ContentUtils.removeBlock(this.props.editorState, this.props.block))
  }

}