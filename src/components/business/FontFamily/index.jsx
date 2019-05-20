import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

const toggleFontFamily = (event, props) => {

  let fontFamilyName = event.currentTarget.dataset.name
  const hookReturns = props.hooks('toggle-font-family', fontFamilyName)(fontFamilyName, props.fontFamilies)

  if (hookReturns === false) {
    return false
  }

  if (typeof hookReturns === 'string') {
    fontFamilyName = hookReturns
  }

  props.editor.setValue(ContentUtils.toggleSelectionFontFamily(props.editorState, fontFamilyName))
  props.editor.requestFocus()

}

export default (props) => {

  let caption = null
  let currentIndex = null
  let dropDownInstance = null

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
      getContainerNode={props.getContainerNode}
      title={props.language.controls.fontFamily}
      autoHide={true}
      arrowActive={currentIndex === 0}
      ref={(instance) => dropDownInstance = instance}
      className={'control-item dropdown font-family-dropdown'}
    >
      <ul className='menu'>
        {props.fontFamilies.map((item, index) => {
          return (
            <li
              key={index}
              className={'menu-item ' + (index === currentIndex ? 'active' : '')}
              data-name={item.name}
              onClick={(event) => {toggleFontFamily(event, props),dropDownInstance.hide()}}
            >
              <span style={{fontFamily: item.family}}>{item.name}</span>
            </li>
          )
        })}
      </ul>
    </DropDown>
  )

}