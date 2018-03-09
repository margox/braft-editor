import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'

export default (props) => {

  let caption = null
  let currentBorder = null
  let { defaultCaption, editor, language, borders, viewWrapper, editorHeight } = props

  borders.find((item,index) => {
    if (editor.selectionHasInlineStyle('BORDER-' + item.name)) {
      caption = item.name
      currentBorder = index
      return true
    }
    return false
  })

  caption = caption || defaultCaption || language.controls.border

  return (
    <DropDown
      caption={caption}
      viewWrapper={viewWrapper}
      editorHeight={editorHeight}
      hoverTitle={language.controls.border}
      className={"control-item dropdown braft-border-dropdown"}
    >
      <ul className="braft-borders-wrap">
        {borders.map((item, index) => {
          return (
            <li
              key={index}
              className={index === currentBorder ? 'active' : null}
              data-name={item.name}
              onClick={(e) => editor.toggleSelectionBorder(e.currentTarget.dataset.name)}
            >
              <span className={'border-' + item.name.toLowerCase()}></span>
            </li>
          )
        })}
      </ul>
    </DropDown>
  )

}