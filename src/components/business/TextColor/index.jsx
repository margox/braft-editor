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
    let { editorController, language, colors, tempColors, viewWrapper } = this.props

    ;[ ...colors, ...tempColors ].forEach((color) => {
      let color_id = color.replace('#', '')
      if (editorController.hasStyle('COLOR-' + color_id)) {
        captionStyle.color = color
        colorType === 'color' && (currentColor = color)
      }

      if (editorController.hasStyle('BGCOLOR-' + color_id)) {
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

    if (this.state.colorType === 'color') {
      this.props.editorController.toggleColor(color)
    } else {
      this.props.editorController.toggleBackgroundColor(color)
    }

    this.dropDownComponent.hide()

  }

}