import './style.scss'
import React from 'react'
import { Modifier, EditorState, RichUtils } from 'draft-js'
import fontFamilies from 'configs/fontFamilies'
import DropDown from 'components/common/DropDown'

export default class FontFamily extends React.Component {

  render () {

    let caption = null
    let currentIndex = null
    let { defaultCaption, currentInlineStyle, onChange } = this.props

    fontFamilies.find((item, index) => {
      if (currentInlineStyle.has('FONTFAMILY-' + index)) {
        caption = item.name
        currentIndex = index
        return true
      }
      return false
    })

    let isFirstItemActive = currentIndex === 0

    caption = caption || defaultCaption || 'Font Family'

    return (
      <DropDown
        caption={caption}
        hoverTitle="字体"
        arrowActive={isFirstItemActive}
        className={"control-item dropdown font-family-dropdown"}
      >
        <ul className="menu">
          {fontFamilies.map((item, index) => {
            return (
              <li
                key={index}
                className={"menu-item " + (index === currentIndex ? 'active' : '')}
                data-index={index}
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

    const fontFamily = e.target.dataset.index
    const toggledFontFamily = 'FONTFAMILY-' + fontFamily
    const { editorState, selection, currentInlineStyle } = this.props
    const nextContentState = fontFamilies.reduce((contentState, item, index) => {
      return Modifier.removeInlineStyle(contentState, selection, 'FONTFAMILY-' + index) 
    }, editorState.getCurrentContent())

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    )

    if (selection.isCollapsed()) {
      nextEditorState = currentInlineStyle.reduce((state, fontFamily) => {
        return RichUtils.toggleInlineStyle(state, fontFamily)
      }, nextEditorState)
    }

    if (!currentInlineStyle.has(toggledFontFamily)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledFontFamily
      );
    }

    this.props.onChange(nextEditorState)

  }

}