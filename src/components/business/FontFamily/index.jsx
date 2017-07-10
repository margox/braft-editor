import './style.scss'
import React from 'react'
import { Modifier, EditorState, RichUtils } from 'draft-js'
import fontFamilies from 'configs/fontFamilies'
import DropDown from 'components/common/DropDown'

export default class FontFamily extends React.Component {

  render () {

    let caption = null
    let currentIndex = null
    let { defaultCaption, currentInlineStyles, onChange } = this.props

    console.log(currentInlineStyles.toString())

    fontFamilies.find((item, index) => {
      if (currentInlineStyles.has('FONTFAMILY-' + index)) {
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
        arrowActive={isFirstItemActive}
        className={"control-item dropdown font-families-dropdown"}
      >
        <ul className="menu">
          {fontFamilies.map((item, index) => {
            return (
              <li
                key={index}
                className={"menu-item " + (index === currentIndex ? 'active' : '')}
                onClick={() => this.toggleFontFamily(index)}
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

  toggleFontFamily (fontFamily) {

    const toggledFontFamily = 'FONTFAMILY-' + fontFamily
    const { editorState } = this.props
    const selection = editorState.getSelection();
    const nextContentState = fontFamilies.reduce((contentState, item, index) => {
      return Modifier.removeInlineStyle(contentState, selection, 'FONTFAMILY-' + index) 
    }, editorState.getCurrentContent())

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    )

    const currentStyle = editorState.getCurrentInlineStyle();

    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, fontFamily) => {
        return RichUtils.toggleInlineStyle(state, fontFamily)
      }, nextEditorState)
    }

    if (!currentStyle.has(toggledFontFamily)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledFontFamily
      );
    }

    this.props.onChange(nextEditorState)

  }

}