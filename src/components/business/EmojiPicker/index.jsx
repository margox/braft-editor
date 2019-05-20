import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

const insertEmoji = (event, props) => {

  let emoji = event.currentTarget.dataset.emoji
  const hookReturns = props.hooks('insert-emoji', emoji)(emoji)

  if (hookReturns === false) {
    return false
  }

  if (typeof hookReturns === 'string') {
    emoji = hookReturns
  }

  props.editor.setValue(ContentUtils.insertText(props.editorState, emoji))
  props.editor.requestFocus()

}

export default (props) => {

  return (
    <DropDown
      caption={props.defaultCaption}
      autoHide={true}
      showArrow={false}
      getContainerNode={props.getContainerNode}
      title={props.language.controls.emoji}
      className={'control-item dropdown bf-emoji-dropdown'}
    >
      <div className='bf-emojis-wrap'>
        <ul className='bf-emojis'>
          {props.emojis.map((item, index) => {
            return (
              <li
                key={index}
                data-emoji={item}
                onClick={(event) => insertEmoji(event, props)}
              >{item}</li>
            )
          })}
        </ul>
      </div>
    </DropDown>
  )

}