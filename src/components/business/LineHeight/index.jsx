import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

export default (props) => {

  let caption = null
  let currentLineHeight = null

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
      caption={caption || props.defaultCaption}
      containerNode={props.containerNode}
      hoverTitle={props.language.controls.lineHeight}
      className={"control-item dropdown braft-line-height-dropdown"}
    >
      <ul className="braft-line-heights-wrap">
        {props.lineHeights.map((item, index) => {
          return (
            <li
              key={index}
              className={item === currentLineHeight ? 'active' : null}
              data-size={item}
              onClick={(e) => {
                props.editor.setValue(ContentUtils.toggleSelectionLineHeight(props.editorState, e.currentTarget.dataset.size, props.lineHeights))
                props.editor.requestFocus()
              }}
            >{item}</li>
          )
        })}
      </ul>
    </DropDown>
  )

}