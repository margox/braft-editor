import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

export default (props) => {

  return (
    <DropDown
      caption={props.defaultCaption}
      showDropDownArrow={false}
      viewWrapper={props.viewWrapper}
      editorHeight={props.editorHeight}
      hoverTitle={props.language.controls.emoji}
      className={"control-item dropdown braft-emoji-dropdown"}
    >
      <div className="braft-emojis-wrap">
        <ul className="braft-emojis">
          {props.emojis.map((item, index) => {
            return (
              <li
                key={index}
                data-emoji={item}
                onClick={(e) => {
                  props.editor.setValue(ContentUtils.insertText(props.editorState, e.currentTarget.dataset.emoji))
                  props.editor.requestFocus()
                }}
              >{item}</li>
            )
          })}
        </ul>
      </div>
    </DropDown>
  )

}