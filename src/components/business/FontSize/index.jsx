import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'

export default (props) => {

  let caption = null
  let currentFontSize = null
  let { defaultCaption, editor, language, fontSizes, viewWrapper, editorHeight } = props

  fontSizes.find((item) => {
    if (editor.selectionHasInlineStyle('FONTSIZE-' + item)) {
      caption = item + 'px'
      currentFontSize = item
      return true
    }
    return false
  })

  caption = caption || defaultCaption || language.controls.fontSize

  return (
    <DropDown
      caption={caption}
      editorHeight={editorHeight}
      viewWrapper={viewWrapper}
      hoverTitle={language.controls.fontSize}
      className={"control-item dropdown braft-font-size-dropdown"}
    >
      <ul className="braft-font-sizes-wrap">
        {fontSizes.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentFontSize ? 'active' : null}
              data-size={item}
              onClick={(e) => {
                editor.toggleSelectionFontSize(e.currentTarget.dataset.size)
                editor.requestFocus()
              }}
            >{item + 'px'}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}