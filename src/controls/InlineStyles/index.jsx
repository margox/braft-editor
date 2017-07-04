import React from 'react'
import { RichUtils } from 'draft-js'
import { InlineStyleControls } from 'maps/controls'
import DropDown from 'components/DropDown'

export default class InlineStyles extends React.Component {

  render () {
    const { controls, editorState } = this.props
    return (
      <div className="control-item-group inline-control-item">
      {
        controls.map((item, index) => {
          let controlItem = InlineStyleControls.find((subItem) => subItem.key.toLowerCase() === item.toLowerCase())
          if (controlItem && controlItem.children) {
            return (
              <DropDown className="control-item dropdown" key={index}>
              {
                controlItem.children.map((subControlItem, subIndex) => {
                  let subButtonClassNames = "control-item button"
                  editorState.getCurrentInlineStyle().has(subControlItem.style) && (subButtonClassNames += ' active')
                  return <button className={subButtonClassNames} key={subIndex} onClick={() => this.applyStyleControl(subControlItem.style)} title={subControlItem.text}>{subControlItem.icon}</button>
                })
              }
              </DropDown>
            )
          } else if (controlItem) {
            let buttonClassNames = "control-item button"
            editorState.getCurrentInlineStyle().has(controlItem.style) && (buttonClassNames += ' active')
            return <button className={buttonClassNames} key={index} onClick={() => this.applyStyleControl(controlItem.style)} title={controlItem.text}>{controlItem.icon}</button>
          } else {
            return null
          }
        })
      }
      </div>
    )
  }

  applyStyleControl (style) {
    const { editorState, onChange } = this.props
    onChange(RichUtils.toggleInlineStyle(editorState, style))
  }

}