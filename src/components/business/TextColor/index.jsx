import './style.scss'
import React from 'react'
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
    let { editor, language, colors, tempColors, viewWrapper, editorHeight, allowSetTextBackgroundColor } = this.props

    ;[ ...colors, ...tempColors ].forEach((color) => {
      let color_id = color.replace('#', '')
      if (editor.selectionHasInlineStyle('COLOR-' + color_id)) {
        captionStyle.color = color
        colorType === 'color' && (currentColor = color)
      }

      if (editor.selectionHasInlineStyle('BGCOLOR-' + color_id)) {
        captionStyle.backgroundColor = color
        colorType === 'backgroundColor' && (currentColor = color)
      }

    })

    let caption = (
      <i style={captionStyle} className="braft-icon-text-color">
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
        editorHeight={editorHeight}
        componentId={this.dropDownComponentId}
        ref={(instance) => this.dropDownComponent = instance}
        className={"control-item dropdown text-color-dropdown"}
      >
        <div className="braft-text-color-picker-wrap">
          <div className="braft-color-switch-buttons" style={allowSetTextBackgroundColor ? {} : {display: 'none'}}>
            <button
              type="button"
              data-type="color"
              data-keep-active={true}
              data-braft-component-id={this.dropDownComponentId}
              className={colorType === 'color' ? 'active' : ''}
              onClick={this.switchColorType}
            >{language.controls.textColor}</button>
            <button
              type="button"
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
      colorType: e.currentTarget.dataset.type
    })

  }

  toggleColor = (color) => {

    if (this.state.colorType === 'color') {
      this.props.editor.toggleSelectionColor(color)
    } else {
      this.props.editor.toggleSelectionBackgroundColor(color)
    }

    this.dropDownComponent.hide()
    this.props.editor.requestFocus()

  }

}