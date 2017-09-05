import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'

export default class FontSize extends React.Component {

  render () {

    let caption = null
    let currentFontSize = null
    let { defaultCaption, editor, language, fontSizes, viewWrapper } = this.props

    fontSizes.find((item) => {
      if (editor.hasStyle('FONTSIZE-' + item)) {
        caption = item + 'px'
        currentFontSize = item
        return true
      }
      return false
    })

    caption = caption || defaultCaption || language.controls.fontSize

    return (
      <DropDown
        caption={caption}
        viewWrapper={viewWrapper}
        hoverTitle={language.controls.fontSize}
        className={"control-item dropdown braft-font-size-dropdown"}
      >
        <ul className="braft-font-sizes-wrap">
          {fontSizes.map((item, index) => {
            return (
              <li
                key={index}
                className={item === currentFontSize ? 'active' : null}
                data-size={item}
                onClick={this.toggleFontSize}
              >
                {item + 'px'}
              </li>
            )
          })}
        </ul>
      </DropDown>
    )

  }

  toggleFontSize = (e) => {
    this.props.editor.toggleFontSize(e.target.dataset.size)
  }

}