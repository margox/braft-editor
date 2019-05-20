import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

const toggleLineHeight = (event, props) => {

  let lineHeight = event.currentTarget.dataset.size
  const hookReturns = props.hooks('toggle-line-height', lineHeight)(lineHeight)

  if (hookReturns === false) {
    return false
  }

  if (!isNaN(hookReturns)) {
    lineHeight = hookReturns
  }

  props.editor.setValue(ContentUtils.toggleSelectionLineHeight(props.editorState, lineHeight))
  props.editor.requestFocus()

}

export default (props) => {

  let caption = null
  let currentLineHeight = null
  let dropDownInstance = null

  props.lineHeights.find((item) => {
    if (ContentUtils.selectionHasInlineStyle(props.editorState, 'LINEHEIGHT-' + item)) {
      caption = item
      currentLineHeight = item
      return true
    }
    return false
  })

  return (
    <DropDown
      autoHide={true}
      caption={caption || props.defaultCaption}
      getContainerNode={props.getContainerNode}
      title={props.language.controls.lineHeight}
      ref={(instance) => dropDownInstance = instance}
      className={'control-item dropdown bf-line-height-dropdown'}
    >
      <ul className='bf-line-heights'>
        {props.lineHeights.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentLineHeight ? 'active' : null}
              data-size={item}
              onClick={(event) => {toggleLineHeight(event, props),dropDownInstance.hide()}}
            >{item}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}