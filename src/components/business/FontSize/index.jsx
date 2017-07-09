import './style.scss'
import React from 'react'
import { Modifier, EditorState, RichUtils } from 'draft-js'
import fontSizes from 'configs/fontSizes'
import DropDown from 'components/common/DropDown'

export default class FontSize extends React.Component {

  render () {

    let caption = null
    let currentFontSize = null
    let { currentInlineStyles, onChange } = this.props

    fontSizes.find((item) => {
      if (currentInlineStyles.has('FONTSIZE-' + item)) {
        caption = item + 'px'
        currentFontSize = item
        return true
      }
      return false
    })

    console.log(fontSizes)

    caption = caption || 'Size'

    return (
      <DropDown
        caption={caption}
        className={"control-item dropdown font-sizes-dropdown"}
      >
        <ul className="font-sizes-wrap">
          {fontSizes.map((item, index) => {
            return (
              <li
                key={index}
                className={item === currentFontSize ? 'active' : null}
                onClick={() => this.toggleFontSize(item)}
              >
                {item + 'px'}
              </li>
            )
          })}
        </ul>
      </DropDown>
    )

  }

  toggleFontSize (fontSize) {

    const toggledFontSize = 'FONTSIZE-' + fontSize
    const { editorState } = this.props
    const selection = editorState.getSelection();
    const nextContentState = fontSizes.reduce((contentState, item, index) => {
      return Modifier.removeInlineStyle(contentState, selection, 'FONTSIZE-' + item) 
    }, editorState.getCurrentContent())

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    )

    const currentStyle = editorState.getCurrentInlineStyle();

    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, fontSize) => {
        return RichUtils.toggleInlineStyle(state, fontSize)
      }, nextEditorState)
    }

    if (!currentStyle.has(toggledFontSize)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledFontSize
      );
    }

    this.props.onChange(nextEditorState)

  }

}