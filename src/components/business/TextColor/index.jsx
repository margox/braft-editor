import './style.scss'
import React from 'react'
import { Modifier, EditorState, RichUtils } from 'draft-js'
import { getSelectionEntity } from 'draftjs-utils'
import { UniqueIndex } from 'utils/base'
import DropDown from 'components/common/DropDown'
import ColorPicker from 'components/common/ColorPicker'

export default class TextColor extends React.Component {

  state = {
    colorType: 'color'
  }

  dropDownComponentId = 'BRAFT-DROPDOWN-' + UniqueIndex()

  render () {

    let captionStyle = {}
    let currentColor = null
    let { colorType } = this.state
    let { currentInlineStyle, onChange, language, colors, tempColors, viewWrapper } = this.props

    ;[ ...colors, ...tempColors ].forEach((color) => {
      let color_id = color.replace('#', '')
      if (currentInlineStyle.has('COLOR-' + color_id)) {
        captionStyle.color = color
        colorType === 'color' && (currentColor = color)
      }

      if (currentInlineStyle.has('BGCOLOR-' + color_id)) {
        captionStyle.backgroundColor = color
        colorType === 'backgroundColor' && (currentColor = color)
      }

    })

    let caption = (
      <i style={captionStyle} className="icon-text-color">
        <span className="path1"></span>
        <span className="path2"></span>
      </i>
    )

    return (
      <DropDown
        caption={caption}
        hoverTitle={language.controls.color}
        showDropDownArrow={false}
        viewWrapper={viewWrapper}
        componentId={this.dropDownComponentId}
        ref={(instance) => this.dropDownComponent = instance}
        className={"control-item dropdown text-color-dropdown"}
      >
        <div className="braft-text-color-picker-wrap">
          <div className="braft-color-switch-buttons">
            <button
              data-type="color"
              data-keep-active={true}
              data-braft-component-id={this.dropDownComponentId}
              className={colorType === 'color' ? 'active' : ''}
              onClick={this.switchColorType}
            >{language.controls.textColor}</button>
            <button
              data-type="backgroundColor"
              data-keep-active={true}
              data-braft-component-id={this.dropDownComponentId}
              className={colorType === 'backgroundColor' ? 'active' : ''}
              onClick={this.switchColorType}
            >{language.controls.backgroundColor}</button>
          </div>
          <ColorPicker
            width={200}
            language={language}
            current={currentColor}
            disableAlpha={true}
            colors={colors}
            tempColors={tempColors}
            onChange={this.toggleColor}
          />
        </div>
      </DropDown>
    )

  }

  switchColorType = (e) => {
    this.setState({
      colorType: e.target.dataset.type
    })
  }

  toggleColor = (color) => {

    const prefix = this.state.colorType === 'color' ? 'COLOR-' : 'BGCOLOR-'
    const toggledColor = prefix + color
    const { editorState, selection, currentInlineStyle, colors, tempColors } = this.props
    const nextContentState = [ ...colors, ...tempColors ].reduce((contentState, item, index) => {
      return Modifier.removeInlineStyle(contentState, selection, prefix + item.replace('#', '')) 
    }, editorState.getCurrentContent())

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    )

    if (selection.isCollapsed()) {
      nextEditorState = currentInlineStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color)
      }, nextEditorState)
    }

    if (!currentInlineStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      )
    }

    this.props.onChange(nextEditorState)
    this.dropDownComponent.hide()

  }

}