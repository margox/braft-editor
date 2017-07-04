import './style.scss'
import React from 'react'
import InlineStyleControls from 'controls/InlineStyles'
import BlockTypeControls from 'controls/BlockTypes'

export default class ControlBar extends React.Component {

  render () {
    return (
      <div className="BraftEditor-controlBar">
        <InlineStyleControls {...this.props} />
        <BlockTypeControls {...this.props} />
      </div>
    )
  }

}