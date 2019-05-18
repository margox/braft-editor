import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

const toggleFontSize = (event, props) => {

  let fontSize = event.currentTarget.dataset.size
  const hookReturns = props.hooks('toggle-font-size', fontSize)(fontSize)

  if (hookReturns === false) {
    return false
  }

  if (!isNaN(fontSize)) {
    fontSize = hookReturns
  }

  props.editor.setValue(ContentUtils.toggleSelectionFontSize(props.editorState, fontSize))
  props.editor.requestFocus()

}

export default (props) => {

  let caption = null
  let currentFontSize = null
  let dropDownInstance = null

  props.fontSizes.find((item) => {
    if (ContentUtils.selectionHasInlineStyle(props.editorState, 'FONTSIZE-' + item)) {
      caption = item
      currentFontSize = item
      return true
    }
    return false
  })

  return (
    <DropDown
      autoHide={true}
      caption={caption || props.defaultCaption}
      getContainerNode={props.getContainerNode}
      title={props.language.controls.fontSize}
      ref={(instance) => dropDownInstance = instance}
      className={'control-item dropdown bf-font-size-dropdown'}
    >
      <ul className='bf-font-sizes'>
        {props.fontSizes.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentFontSize ? 'active' : null}
              data-size={item}
              onClick={(event) => {toggleFontSize(event, props),dropDownInstance.hide()}}
            >{item}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}