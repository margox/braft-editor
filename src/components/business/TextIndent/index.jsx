import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

const toggleTextIndent = (event, props) => {

  let textIndent = event.currentTarget.dataset.size
  const hookReturns = props.hooks('toggle-text-indent', textIndent)(textIndent)

  if (hookReturns === false) {
    return false
  }

  if (!isNaN(hookReturns)) {
    textIndent = hookReturns
  }

  props.editor.setValue(ContentUtils.toggleSelectionIndent(props.editorState, textIndent, props.textIndents))
  props.editor.requestFocus()

}

export default (props) => {

  let caption = null
  let currentIndent = null

  props.textIndents.find((item) => {
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
      containerNode={props.containerNode}
      title={props.language.controls.textIndent}
      className={'control-item dropdown bf-indent-dropdown'}
    >
      <ul className='bf-text-indents'>
        {props.textIndents.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentIndent ? 'active' : null}
              data-size={item}
              onClick={(event) => toggleTextIndent(event, props)}
            >{item}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}