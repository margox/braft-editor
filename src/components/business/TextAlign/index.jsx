import React from 'react'
import { Modifier, EditorState, RichUtils } from 'draft-js'

const textAlignments = [
  'LEFT',
  'CENTER',
  'RIGHT',
  'JUSTIFY'
]

export default class TextAlign extends React.Component {

  render () {

    let currentAlignment = null
    let { currentInlineStyle, onChange } = this.props

    textAlignments.find((item) => {
      if (currentInlineStyle.has('TEXTALIGN-' + item)) {
        currentAlignment = item
        return true
      }
      return false
    })

    return (
      <div className="pull-left">
        {
          textAlignments.map((item, index) => {
            return (
              <button
                key={index}
                className={'control-item button ' + (item === currentAlignment ? 'active' : null)}
                onClick={() => this.toggleTextAlign(item)}
              >
                <i className={"icon-align-" + item.toLowerCase()}></i>
              </button>
            )
          })
        }
      </div>
    )

  }

  toggleTextAlign (textAlign) {

    const toggledTextAlign = 'TEXTALIGN-' + textAlign
    const { editorState, selection, currentInlineStyle } = this.props
    const nextContentState = textAlignments.reduce((contentState, item, index) => {
      return Modifier.removeInlineStyle(contentState, selection, 'TEXTALIGN-' + item) 
    }, editorState.getCurrentContent())

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-text-align'
    )

    if (selection.isCollapsed()) {
      nextEditorState = currentInlineStyle.reduce((state, textAlign) => {
        return RichUtils.toggleInlineStyle(state, textAlign)
      }, nextEditorState)
    }

    if (!currentInlineStyle.has(toggledTextAlign)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledTextAlign
      );
    }

    this.props.onChange(nextEditorState)

  }

}