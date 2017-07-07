import './style.scss'
import React from 'react'
import { RichUtils, EditorState } from 'draft-js'
import SupportedControls from 'maps/controls'
import DropDown from 'components/common/DropDown'

export default class ControlBar extends React.Component {

  render () {

    const { controls, editorState } = this.props
    const selection = editorState.getSelection()
    const currentInlineStyles = editorState.getCurrentInlineStyle()
    const currentBlockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType()

    return (
      <div className="BraftEditor-controlBar">
      {
        controls.map((item, index) => {

          if (item.toLowerCase() === 'split') {
            return <span className="split-line"></span>
          }

          let isFirstItemActive = false
          let dropDownCaption = null
          let controlItem = SupportedControls.find((subItem) => {
            return subItem.key.toLowerCase() === item.toLowerCase()
          })

          if (controlItem && controlItem.children) {

            if (controlItem.type === 'inline-styles') {
              if (currentInlineStyles.has(controlItem.children[0].command.toUpperCase())) {
                isFirstItemActive = true
              }
              dropDownCaption = controlItem.children[0].text
            } else if (controlItem.type === 'block-types') {
              if (currentBlockType === controlItem.children[0].command) {
                isFirstItemActive = true
                dropDownCaption = controlItem.children[0].text
              } else {
                dropDownCaption = 'Normal'
              }
            }

            return (
              <DropDown
                key={index}
                caption={dropDownCaption}
                arrowActive={isFirstItemActive}
                className={"control-item dropdown " + controlItem.key + '-dropdown'}
              >
                <ul className="menu">
                {
                  controlItem.children.map((subControlItem, subIndex) => {
                    let menuItemClassNames = "menu-item"
                    if (subControlItem.type === 'inline-style') {
                      if (currentInlineStyles.has(subControlItem.command.toUpperCase())) {
                        menuItemClassNames += ' active'
                      }
                    } else if (subControlItem.type === 'block-type') {
                      if (currentBlockType === subControlItem.command) {
                        menuItemClassNames += ' active'
                      }
                    }
                    return (
                      <li
                        key={subIndex}
                        title={subControlItem.title}
                        className={menuItemClassNames}
                        onClick={() => this.applyControl(subControlItem.command, subControlItem.type)}
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

            if (controlItem.type === 'inline-style') {
              if (currentInlineStyles.has(controlItem.command.toUpperCase())) {
                buttonClassNames += ' active'
              }
            } else if (controlItem.type === 'block-type') {
              if (currentBlockType === controlItem.command) {
                buttonClassNames += ' active'
              }
            }
  
            return (
              <button
                key={index}
                title={controlItem.title}
                className={buttonClassNames}
                onClick={() => this.applyControl(controlItem.command, controlItem.type)}
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

  applyControl (command, type) {

    if (type === 'inline-style') {
      this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, command.toUpperCase()))
    } else if (type === 'block-type') {
      this.props.onChange(RichUtils.toggleBlockType(this.props.editorState, command))
    } else if (type === 'editor-state-method') {
      this.props.onChange(EditorState[command](this.props.editorState))
    }

  }

}