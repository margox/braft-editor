import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

export default (props) => {

  let caption = null
  let currentIndex = null

  props.fontFamilies.find((item, index) => {
    if (ContentUtils.selectionHasInlineStyle(props.editorState, 'FONTFAMILY-' + item.name)) {
      caption = item.name
      currentIndex = index
      return true
    }
    return false
  })

  return (
    <DropDown
      caption={caption || props.defaultCaption}
      containerNode={props.containerNode}
      hoverTitle={props.language.controls.fontFamily}
      arrowActive={currentIndex === 0}
      className={"control-item dropdown font-family-dropdown"}
    >
      <ul className="menu">
        {props.fontFamilies.map((item, index) => {
          return (
            <li
              key={index}
              className={"menu-item " + (index === currentIndex ? 'active' : '')}
              data-name={item.name}
              onClick={(e) => {
                props.editor.setValue(ContentUtils.toggleSelectionFontFamily(props.editorState, e.currentTarget.dataset.name, props.fontFamilies))
                props.editor.requestFocus()
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