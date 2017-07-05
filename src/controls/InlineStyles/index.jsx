import React from 'react'
import { RichUtils } from 'draft-js'
import { InlineStyleControls } from 'maps/controls'
import DropDown from 'components/common/DropDown'

export default class InlineStyles extends React.Component {

  render () {

    const { controls, editorState } = this.props
    const currentInlineStyles = editorState.getCurrentInlineStyle()

    return (
      <div className="control-item-group inline-style-control-items">
      {
        controls.map((item, index) => {
          let controlItem = InlineStyleControls.find((subItem) => subItem.key.toLowerCase() === item.toLowerCase())
          if (controlItem && controlItem.children) {
            return (
              <DropDown
                key={index}
                current={InlineStyleControls[0].text}
                className={"control-item dropdown " + controlItem.key + '-dropdown'}
              >
              {
                controlItem.children.map((subControlItem, subIndex) => {
                  let subButtonClassNames = "control-item button"
                  currentInlineStyles.has(subControlItem.style) && (subButtonClassNames += ' active')
                  return (
                    <button
                      key={subIndex}
                      title={subControlItem.title}
                      className={subButtonClassNames}
                      onClick={() => this.applyStyleControl(subControlItem.style)}
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
            editorState.getCurrentInlineStyle().has(controlItem.style) && (buttonClassNames += ' active')
            return (
              <button
                key={index}
                title={controlItem.title}
                className={buttonClassNames}
                onClick={() => this.applyStyleControl(controlItem.style)}
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

  applyStyleControl (style) {
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, style))
  }

}