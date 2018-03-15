import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'

export default (props) => {

  let caption = null
  let currentLineHeight = null
  let { defaultCaption, editor, language, lineHeights, viewWrapper, editorHeight } = props

  lineHeights.find((item) => {
    if (editor.selectionHasInlineStyle('LINEHEIGHT-' + item)) {
      caption = item
      currentLineHeight = item
      return true
    }
    return false
  })

  caption = caption || defaultCaption || language.controls.lineHeight

  return (
    <DropDown
      caption={caption}
      viewWrapper={viewWrapper}
      editorHeight={editorHeight}
      hoverTitle={language.controls.lineHeight}
      className={"control-item dropdown braft-line-height-dropdown"}
    >
      <ul className="braft-line-heights-wrap">
        {lineHeights.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentLineHeight ? 'active' : null}
              data-size={item}
              onClick={(e) => {
                editor.toggleSelectionLineHeight(e.currentTarget.dataset.size)
                editor.requestFocus()
              }}
            >{item}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}