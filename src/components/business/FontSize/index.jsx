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

  props.editor.setValue(ContentUtils.toggleSelectionFontSize(props.editorState, fontSize, props.fontSizes))
  props.editor.requestFocus()

}

export default (props) => {

  let caption = null
  let currentFontSize = null

  props.fontSizes.find((item) => {
    if (ContentUtils.selectionHasInlineStyle(props.editorState, 'FONTSIZE-' + item)) {
      caption = item + 'px'
      currentFontSize = item
      return true
    }
    return false
  })

  return (
    <DropDown
      caption={caption || props.defaultCaption}
      containerNode={props.containerNode}
      title={props.language.controls.fontSize}
      className={'control-item dropdown bf-font-size-dropdown'}
    >
      <ul className='bf-font-sizes'>
        {props.fontSizes.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentFontSize ? 'active' : null}
              data-size={item}
              onClick={(event) => toggleFontSize(event, props)}
            >{item + 'px'}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}