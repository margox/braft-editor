import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import ColorPicker from 'components/common/ColorPicker'
import { BaseUtils, ContentUtils } from 'braft-utils'

export default class TextColor extends React.Component {

  state = {
    colorType: 'color'
  }

  dropDownComponentId = 'BRAFT-DROPDOWN-' + BaseUtils.UniqueIndex()

  render () {

    let captionStyle = {}
    let currentColor = null
    let { colorType } = this.state

    this.props.colors.forEach((color) => {
      let color_id = color.replace('#', '')
      if (ContentUtils.selectionHasInlineStyle(this.props.editorState, 'COLOR-' + color_id)) {
        captionStyle.color = color
        colorType === 'color' && (currentColor = color)
      }

      if (ContentUtils.selectionHasInlineStyle(this.props.editorState, 'BGCOLOR-' + color_id)) {
        captionStyle.backgroundColor = color
        colorType === 'backgroundColor' && (currentColor = color)
      }

    })

    const caption = (
      <i style={captionStyle} className="braft-icon-text-color">
        <span className="path1"></span>
        <span className="path2"></span>
      </i>
    )

    return (
      <DropDown
        caption={caption}
        hoverTitle={this.props.language.controls.color}
        showDropDownArrow={false}
        viewWrapper={this.props.viewWrapper}
        editorHeight={this.props.editorHeight}
        componentId={this.dropDownComponentId}
        ref={(instance) => this.dropDownComponent = instance}
        className={"control-item dropdown text-color-dropdown"}
      >
        <div className="braft-text-color-picker-wrap">
          <div className="braft-color-switch-buttons" style={this.props.disableTextBackgroundColor ? {display: 'none'} : {}}>
            <button
              type="button"
              data-type="color"
              data-keep-active={true}
              data-braft-component-id={this.dropDownComponentId}
              className={colorType === 'color' ? 'active' : ''}
              onClick={this.switchColorType}
            >{this.props.language.controls.textColor}</button>
            <button
              type="button"
              data-type="backgroundColor"
              data-keep-active={true}
              data-braft-component-id={this.dropDownComponentId}
              className={colorType === 'backgroundColor' ? 'active' : ''}
              onClick={this.switchColorType}
            >{this.props.language.controls.backgroundColor}</button>
          </div>
          <ColorPicker
            width={200}
            language={this.props.language}
            current={currentColor}
            disableAlpha={true}
            colors={this.props.colors}
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
      this.props.editor.setValue(ContentUtils.toggleSelectionColor(this.props.editorState, color, this.props.colors))
    } else {
      this.props.editor.setValue(ContentUtils.toggleSelectionBackgroundColor(this.props.editorState, color, this.props.colors))
    }

    this.dropDownComponent.hide()
    this.props.editor.requestFocus()

  }

}