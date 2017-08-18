import './style.scss'
import React from 'react'
import { Modifier, EditorState, RichUtils } from 'draft-js'
import DropDown from 'components/common/DropDown'

export default class FontFamily extends React.Component {

  render () {

    let caption = null
    let currentIndex = null
    let { defaultCaption, currentInlineStyle, onChange, language, fontFamilies, viewWrapper } = this.props

    fontFamilies.find((item, index) => {
      if (currentInlineStyle.has('FONTFAMILY-' + item.name)) {
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

    const fontFamily = e.currentTarget.dataset.name
    const toggledFontFamily = 'FONTFAMILY-' + fontFamily
    const { editorState, selection, currentInlineStyle, fontFamilies } = this.props
    const nextContentState = fontFamilies.reduce((contentState, item) => {
      return Modifier.removeInlineStyle(contentState, selection, 'FONTFAMILY-' + item.name) 
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