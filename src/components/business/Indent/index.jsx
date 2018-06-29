import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

export default (props) => {

  let caption = null
  let currentIndent = null

  props.indents.find((item) => {
    if (ContentUtils.selectionHasInlineStyle(props.editorState, 'INDENT-' + item)) {
      caption = item
      currentIndent = item
      return true
    }
    return false
  })

  return (
    <DropDown
      caption={caption || props.defaultCaption}
      viewWrapper={props.viewWrapper}
      editorHeight={props.editorHeight}
      hoverTitle={props.language.controls.indent}
      className={"control-item dropdown braft-indent-dropdown"}
    >
      <ul className="braft-indents-wrap">
        {props.indents.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentIndent ? 'active' : null}
              data-size={item}
              onClick={(e) => {
                props.editor.setValue(ContentUtils.toggleSelectionIndent(props.editorState, e.currentTarget.dataset.size, props.indents))
                props.editor.requestFocus()
              }}
            >{item}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}