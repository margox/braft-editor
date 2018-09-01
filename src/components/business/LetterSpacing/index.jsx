import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

const toggleLetterSpacing = (event, props) => {

  let letterSpacing = event.currentTarget.dataset.size
  const hookReturns = props.hooks('toggle-letter-spacing', letterSpacing)(letterSpacing)

  if (hookReturns === false) {
    return false
  }

  if (!isNaN(hookReturns)) {
    letterSpacing = hookReturns
  }

  props.editor.setValue(ContentUtils.toggleSelectionLetterSpacing(props.editorState, letterSpacing, props.letterSpacings))
  props.editor.requestFocus()

}

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
      className={'control-item dropdown bf-letter-spacing-dropdown'}
    >
      <ul className='bf-letter-spacings'>
        {props.letterSpacings.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentLetterSpacing ? 'active' : null}
              data-size={item}
              onClick={(event) => toggleLetterSpacing(event, props)}
            >{item}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}