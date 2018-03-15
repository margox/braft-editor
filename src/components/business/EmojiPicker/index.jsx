import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'

export default (props) => {

  let { defaultCaption, onChange, language, emojis, viewWrapper, editor, editorHeight } = props
  let caption = defaultCaption || language.controls.emoji

  return (
    <DropDown
      caption={caption}
      showDropDownArrow={false}
      viewWrapper={viewWrapper}
      editorHeight={editorHeight}
      hoverTitle={language.controls.emoji}
      className={"control-item dropdown braft-emoji-dropdown"}
    >
      <div className="braft-emojis-wrap">
        <ul className="braft-emojis">
          {emojis.map((item, index) => {
            return (
              <li
                key={index}
                data-emoji={item}
                onClick={(e) => {
                  editor.insertText(e.currentTarget.dataset.emoji)
                  editor.requestFocus()
                }}
              >{item}</li>
            )
          })}
        </ul>
      </div>
    </DropDown>
  )

}