import './style.scss'
import React from 'react'
import { Modifier, EditorState, RichUtils } from 'draft-js'
import DropDown from 'components/common/DropDown'

export default class FontFamily extends React.Component {

  render () {

    let caption = null
    let currentIndex = null
    let { defaultCaption, editorController, onChange, language, fontFamilies, viewWrapper } = this.props

    fontFamilies.find((item, index) => {
      if (editorController.hasStyle('FONTFAMILY-' + item.name)) {
        caption = item.name
        currentIndex = index
        return true
      }
      return false
    })

    let isFirstItemActive = currentIndex === 0
    caption = caption || defaultCaption || language.controls.fontFamily

    return (
      <DropDown
        caption={caption}
        viewWrapper={viewWrapper}
        hoverTitle={language.controls.fontFamily}
        arrowActive={isFirstItemActive}
        className={"control-item dropdown font-family-dropdown"}
      >
        <ul className="menu">
          {fontFamilies.map((item, index) => {
            return (
              <li
                key={index}
                className={"menu-item " + (index === currentIndex ? 'active' : '')}
                data-name={item.name}
                onClick={this.toggleFontFamily}
              >
                <span
                  style={{
                    fontFamily: item.family
                  }}
                >
                  {item.name}
                </span>
              </li>
            )
          })}
        </ul>
      </DropDown>
    )

  }

  toggleFontFamily = (e) => {
    this.props.editorController.toggleFontFamily(e.currentTarget.dataset.name)
  }

}