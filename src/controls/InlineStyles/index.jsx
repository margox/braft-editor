import React from 'react'
import { RichUtils } from 'draft-js'
import inlineStyleControlsMap from 'maps/inlineStyleControls'

export default class InlineStyles extends React.Component {

  render () {
    const { controls, editorState } = this.props
    return (
      <div className="control-item-group inline-control-item">
      {
        controls.map((item, index) => {
          let controlItem = inlineStyleControlsMap.find((subItem) => subItem.key.toLowerCase() === item.toLowerCase())
          let buttonClassNames = "control-item button"
          editorState.getCurrentInlineStyle().has(controlItem.command) && (buttonClassNames += ' active')
          if (controlItem) {
            return <button className={buttonClassNames} key={index} onClick={() => this.execEditorCommand(controlItem.command)} title={controlItem.text}>{controlItem.icon}</button>
          } else {
            return null
          }
        })
      }
      </div>
    )
  }

  execEditorCommand (command) {
    const { editorState, onChange } = this.props
    onChange(RichUtils.toggleInlineStyle(editorState, command))
  }

}