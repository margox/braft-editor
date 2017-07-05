import './style.scss'
import React from 'react'
import { RichUtils } from 'draft-js'
import { BlockTypeControls } from 'maps/controls'
import DropDown from 'components/common/DropDown'

export default class BlockTyoes extends React.Component {

  render () {

    const { controls, editorState } = this.props
    const selection = editorState.getSelection()
    const currentBlockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType()

    return (
      <div className="control-item-group block-type-control-items">
      {
        BlockTypeControls.map((controlItem, index) => {
          if (controlItem && controlItem.children) {
            let currentItem = controlItem.children.find((item) => item.type === currentBlockType)
            let currentTitle = currentItem ? currentItem.title : 'Normal'
            return (
              <DropDown
                key={index}
                current={currentTitle}
                className={"control-item dropdown " + controlItem.key + '-dropdown'}
              >
                {
                  controlItem.children.map((subControlItem, subIndex) => {
                    let subButtonClassNames = "control-item button"
                    subControlItem.type === currentBlockType && (subButtonClassNames += ' active')
                    return (
                      <button
                        key={subIndex}
                        title={subControlItem.title}
                        className={subButtonClassNames}
                        onClick={() => this.applyBlockTypeControl(subControlItem.type)}
                      >
                        {subControlItem.text}
                      </button>
                    )
                  })
                }
              </DropDown>
            )
          } else if (controlItem) {
            let buttonClassNames = "control-item button"
            currentBlockType === controlItem.type && (buttonClassNames += ' active')
            return (
              <button
                key={index}
                title={controlItem.title}
                className={buttonClassNames}
                onClick={() => this.applyBlockTypeControl(controlItem.type)}
              >
                {controlItem.text}
              </button>
            )
          } else {
            return null
          }
        })
      }
      </div>
    )

  }

  applyBlockTypeControl (type) {
    this.props.onChange(RichUtils.toggleBlockType(this.props.editorState, type))
  }

}