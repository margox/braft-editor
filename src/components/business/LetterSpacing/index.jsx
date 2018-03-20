import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'

export default (props) => {

  let caption = null
  let currentLetterSpacing = null
  let { defaultCaption, editor, language, letterSpacings, viewWrapper, editorHeight } = props

  letterSpacings.find((item) => {
    if (editor.selectionHasInlineStyle('LETTERSPACING-' + item)) {
      caption = item
      currentLetterSpacing = item
      return true
    }
    return false
  })

  caption = caption || defaultCaption || language.controls.letterSpacing

  return (
    <DropDown
      caption={caption}
      viewWrapper={viewWrapper}
      editorHeight={editorHeight}
      hoverTitle={language.controls.letterSpacing}
      className={"control-item dropdown braft-letter-spacing-dropdown"}
    >
      <ul className="braft-letter-spacings-wrap">
        {letterSpacings.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentLetterSpacing ? 'active' : null}
              data-size={item}
              onClick={(e) => {
                editor.toggleSelectionLetterSpacing(e.currentTarget.dataset.size)
                editor.requestFocus()
              }}
            >{item}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}