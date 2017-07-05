import './style.scss'
import React from 'react'
import InlineStyleControls from 'controls/InlineStyles'
import BlockTypeControls from 'controls/BlockTypes'
import HistoryControls from 'controls/History'
import EmbedControls from 'controls/Embeds'

export default class ControlBar extends React.Component {

  render () {

    return (
      <div className="BraftEditor-controlBar">
        <HistoryControls {...this.props} />
        <InlineStyleControls {...this.props} />
        <BlockTypeControls {...this.props} />
        <EmbedControls {...this.props} />
      </div>
    )

  }

}