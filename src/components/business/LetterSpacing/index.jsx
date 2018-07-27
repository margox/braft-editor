import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

export default (props) => {

  let caption = null
  let currentLetterSpacing = null

  props.letterSpacings.find((item) => {
    if (ContentUtils.selectionHasInlineStyle(props.editorState, 'LETTERSPACING-' + item)) {
      caption = item
      currentLetterSpacing = item
      return true
    }
    return false
  })

  return (
    <DropDown
      caption={caption || props.defaultCaption}
      containerNode={props.containerNode}
      hoverTitle={props.language.controls.letterSpacing}
      className={"control-item dropdown braft-letter-spacing-dropdown"}
    >
      <ul className="braft-letter-spacings-wrap">
        {props.letterSpacings.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentLetterSpacing ? 'active' : null}
              data-size={item}
              onClick={(e) => {
                props.editor.setValue(ContentUtils.toggleSelectionLetterSpacing(props.editorState, e.currentTarget.dataset.size, props.letterSpacings))
                props.editor.requestFocus()
              }}
            >{item}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}