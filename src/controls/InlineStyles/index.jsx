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
            let isFirstItemActive = currentInlineStyles.has(controlItem.children[0].style)
            return (
              <DropDown
                key={index}
                caption={InlineStyleControls[0].text}
                arrowActive={isFirstItemActive}
                className={"control-item dropdown " + controlItem.key + '-dropdown'}
              >
                <ul className="menu">
                {
                  controlItem.children.map((subControlItem, subIndex) => {
                    let subButtonClassNames = "menu-item"
                    currentInlineStyles.has(subControlItem.style) && (subButtonClassNames += ' active')
                    return (
                      <li
                        key={subIndex}
                        title={subControlItem.title}
                        className={subButtonClassNames}
                        onClick={() => this.applyStyleControl(subControlItem.style)}
                      >
                        {subControlItem.text}
                      </li>
                    )
                  })
                }
                </ul>
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