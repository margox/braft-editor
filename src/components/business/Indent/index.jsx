import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'

export default (props) => {

  let caption = null
  let currentIndent = null
  let { defaultCaption, editor, language, indents, viewWrapper, editorHeight } = props

  indents.find((item) => {
    if (editor.selectionHasInlineStyle('INDENT-' + item)) {
      caption = item
      currentIndent = item
      return true
    }
    return false
  })

  caption = caption || defaultCaption || language.controls.indent

  return (
    <DropDown
      caption={caption}
      viewWrapper={viewWrapper}
      editorHeight={editorHeight}
      hoverTitle={language.controls.indent}
      className={"control-item dropdown braft-indent-dropdown"}
    >
      <ul className="braft-indents-wrap">
        {indents.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentIndent ? 'active' : null}
              data-size={item}
              onClick={(e) => {
                editor.toggleSelectionIndent(e.currentTarget.dataset.size)
                editor.requestFocus()
              }}
            >{item}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}