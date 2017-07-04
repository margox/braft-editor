import './style.scss'
import React from 'react'
import { RichUtils } from 'draft-js'
import { BlockTypeControls } from 'maps/controls'
import DropDown from 'components/DropDown'

export default class BlockTypes extends React.Component {

  render () {

    const { controls, editorState } = this.props
    const selection = editorState.getSelection()
    const currentBlockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType()

    return (
      <DropDown className="dropdown block-types-dropdown">
        {
          BlockTypeControls.map((controlItem, subIndex) => {
            let subButtonClassNames = "control-item button"
            currentBlockType !== 'unstyled' && currentBlockType === controlItem.type && (subButtonClassNames += ' active')
            return (
              <button
                className={subButtonClassNames}
                key={subIndex}
                onClick={() => this.applyBlockTypeControl(controlItem.type)}>
                {controlItem.title}
              </button>
            )
          })
        }
      </DropDown>
    )

  }

  applyBlockTypeControl (type) {
    const { editorState, onChange } = this.props
    onChange(RichUtils.toggleBlockType(editorState, type))
  }

}