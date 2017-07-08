import './style.scss'
import React from 'react'
import { RichUtils, EditorState } from 'draft-js'
import SupportedControls from 'maps/controls'
import HeadingPicker from 'components/business/Headings'
import TextColorPicker from 'components/business/TextColor'

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
                onChange: (command) => this.applyControl(command, controlItem.type)
              }

              dropDownComponent = <HeadingPicker {...dropDownComponentProps} />

            } else if (controlItem.dropdown === 'text-color') {

              dropDownComponentProps = {
                key: index,
                currentInlineStyles, editorState,
                onChange: (editorState) => this.applyEditorState(editorState)
              }

              dropDownComponent = <TextColorPicker {...dropDownComponentProps} />

            }

            return dropDownComponent

          } else if (controlItem) {

            let buttonClassName = this.getControlItemClassName({
              type: controlItem.type,
              command: controlItem.command,
              currentBlockType, currentInlineStyles
            })

            return (
              <button
                key={index}
                title={controlItem.title}
                className={buttonClassName}
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

  getControlItemClassName (data) {

    let className = 'control-item button'
    let { type, command, currentBlockType, currentInlineStyles } = data

    if (type === 'inline-style') {
      if (currentInlineStyles.has(command.toUpperCase())) {
        className += ' active'
      }
    } else if (type === 'block-type') {
      if (currentBlockType === command) {
        className += ' active'
      }
    }

    return className

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

  applyEditorState (editorState) {
    this.props.onChange(editorState)
  }

}