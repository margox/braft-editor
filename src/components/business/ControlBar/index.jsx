import './style.scss'
import React from 'react'
import { RichUtils, EditorState } from 'draft-js'
import SupportedControls from 'maps/controls'
import HeadingsDropDown from 'components/business/Headings'

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
            return <span key={index} className="split-line"></span>
          }

          let controlItem = SupportedControls.find((subItem) => {
            return subItem.key.toLowerCase() === item.toLowerCase()
          })

          if (controlItem && controlItem.dropdown) {

            let dropDownComponent = null
            let dropDownComponentProps = {}

            if (controlItem.dropdown === 'headings') {

              dropDownComponentProps = {
                key: index,
                current: currentBlockType,
                onClick: (command) => this.applyControl(command, 'block-type')
              }

              dropDownComponent = <HeadingsDropDown {...dropDownComponentProps} />

            }

            return dropDownComponent

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