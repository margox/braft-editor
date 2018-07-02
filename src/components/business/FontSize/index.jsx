import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

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
      editorHeight={props.editorHeight}
      containerNode={props.containerNode}
      hoverTitle={props.language.controls.fontSize}
      className={"control-item dropdown braft-font-size-dropdown"}
    >
      <ul className="braft-font-sizes-wrap">
        {props.fontSizes.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentFontSize ? 'active' : null}
              data-size={item}
              onClick={(e) => {
                props.editor.setValue(ContentUtils.toggleSelectionFontSize(props.editorState, e.currentTarget.dataset.size, props.fontSizes))
                props.editor.requestFocus()
              }}
            >{item + 'px'}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}