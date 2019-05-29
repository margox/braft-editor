import React from 'react'
import { ContentUtils } from 'braft-utils'
import './style.scss'

export default class HorizontalLine extends React.Component {

  render () {

    const hrClasses = ['bf-hr']
    if (this.props.editor.editorProps.readOnly || this.props.editor.editorProps.disabled) {
      hrClasses.push('readonly')
    }
    const hrClassName = hrClasses.join(' ')

    return (
      <div className={hrClassName}>
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