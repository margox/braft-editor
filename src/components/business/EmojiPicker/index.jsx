import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'

export default class Emojis extends React.Component {

  state = {
    page: 0
  }

  render () {

    let { defaultCaption, onChange, language, emojis, viewWrapper } = this.props
    let caption = defaultCaption || language.controls.emoji

    return (
      <DropDown
        caption={caption}
        showDropDownArrow={false}
        viewWrapper={viewWrapper}
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
                  onClick={this.insertEmoji}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </DropDown>
    )

  }

  insertEmoji = (e) => {
    this.props.editorController.insertText(e.target.dataset.emoji)
  }

}