import './style.scss'
import React from 'react'
import { RichUtils, EditorState } from 'draft-js'
import SupportedControls from 'maps/controls'
import LinkEditor from 'components/business/LinkEditor'
import HeadingPicker from 'components/business/Headings'
import TextColorPicker from 'components/business/TextColor'
import FontSizePicker from 'components/business/FontSize'
import FontFamilyPicker from 'components/business/FontFamily'

export default class ControlBar extends React.Component {

  render () {

    const { controls, editorState } = this.props
    const selection = editorState.getSelection()
    const contentState = editorState.getCurrentContent()
    const currentInlineStyle = editorState.getCurrentInlineStyle()
    const currentBlockType = contentState.getBlockForKey(selection.getStartKey()).getType()

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

            if (controlItem.dropdown === 'headings') {

              return <HeadingPicker
                key={index}
                current={currentBlockType}
                onChange={(command) => this.applyControl(command, controlItem.type)}
              />

            } else if (controlItem.dropdown === 'text-color') {

              return <TextColorPicker
                key={index}
                {...{selection, editorState, currentInlineStyle}}
                onChange={(editorState) => this.applyEditorState(editorState)}
              />

            } else if (controlItem.dropdown === 'font-size') {

              return <FontSizePicker
                key={index}
                defaultCaption={controlItem.title}
                {...{selection, editorState, currentInlineStyle}}
                onChange={(editorState) => this.applyEditorState(editorState)}
              />

            } else if (controlItem.dropdown === 'font-family') {

              return <FontFamilyPicker
                key={index}
                defaultCaption={controlItem.title}
                {...{selection, editorState, currentInlineStyle}}
                onChange={(editorState) => this.applyEditorState(editorState)}
              />

            } else if (controlItem.dropdown === 'link') {

              return <LinkEditor
                key={index}
                defaultCaption={controlItem.title}
                {...{selection, editorState, contentState}}
                onChange={(editorState) => this.applyEditorState(editorState)}
              />

            } else {
              return null
            }

          } else if (controlItem) {

            let buttonClassName = this.getControlItemClassName({
              type: controlItem.type,
              command: controlItem.command,
              currentBlockType, currentInlineStyle
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
    let { type, command, currentBlockType, currentInlineStyle } = data

    if (type === 'inline-style') {
      if (currentInlineStyle.has(command.toUpperCase())) {
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
    console.log(editorState)
    this.props.onChange(editorState)
  }

}