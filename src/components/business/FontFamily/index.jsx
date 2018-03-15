import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'

export default (props) => {

  let caption = null
  let currentIndex = null
  let { defaultCaption, editor, onChange, language, fontFamilies, viewWrapper, editorHeight } = props

  fontFamilies.find((item, index) => {
    if (editor.selectionHasInlineStyle('FONTFAMILY-' + item.name)) {
      caption = item.name
      currentIndex = index
      return true
    }
    return false
  })

  let isFirstItemActive = currentIndex === 0
  caption = caption || defaultCaption || language.controls.fontFamily

  return (
    <DropDown
      caption={caption}
      viewWrapper={viewWrapper}
      editorHeight={editorHeight}
      hoverTitle={language.controls.fontFamily}
      arrowActive={isFirstItemActive}
      className={"control-item dropdown font-family-dropdown"}
    >
      <ul className="menu">
        {fontFamilies.map((item, index) => {
          return (
            <li
              key={index}
              className={"menu-item " + (index === currentIndex ? 'active' : '')}
              data-name={item.name}
              onClick={(e) => {
                editor.toggleSelectionFontFamily(e.currentTarget.dataset.name)
                editor.requestFocus()
              }}
            >
              <span style={{fontFamily: item.family}}>{item.name}</span>
            </li>
          )
        })}
      </ul>
    </DropDown>
  )

}