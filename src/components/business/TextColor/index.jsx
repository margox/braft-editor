import './style.scss'
import React from 'react'
import DropDown from 'components/common/DropDown'
import BuiltinColorPicker from 'components/common/ColorPicker'
import { ContentUtils } from 'braft-utils'

export default class TextColor extends React.Component {

  state = {
    colorType: 'color'
  }

  render () {

    let captionStyle = {}
    let currentColor = null
    let { colorType } = this.state

    const selectionStyles = this.props.editorState.getCurrentInlineStyle().toJS()

    selectionStyles.forEach(style => {

      if (style.indexOf('COLOR-') === 0) {
        captionStyle.color = '#' + style.split('-')[1]
        colorType === 'color' && (currentColor = captionStyle.color)
      }

      if (style.indexOf('BGCOLOR-') === 0) {
        captionStyle.backgroundColor = '#' + style.split('-')[1]
        colorType === 'background-color' && (currentColor = captionStyle.backgroundColor)
      }

    })

    const caption = (
      <i style={captionStyle} className='bfi-text-color'>
        <span className='path1'></span>
        <span className='path2'></span>
      </i>
    )

    const ColorPicker = this.props.colorPicker || BuiltinColorPicker

    return (
      <DropDown
        caption={caption}
        title={this.props.language.controls.color}
        showArrow={false}
        autoHide={this.props.autoHide}
        theme={this.props.theme}
        getContainerNode={this.props.getContainerNode}
        ref={(instance) => this.dropDownInstance = instance}
        className={'control-item dropdown text-color-dropdown'}
      >
        <div className='bf-text-color-picker-wrap'>
          <div className='bf-color-switch-buttons' style={this.props.enableBackgroundColor ? {} : {display: 'none'}}>
            <button
              type='button'
              data-type='color'
              className={colorType === 'color' ? 'active' : ''}
              onClick={this.switchColorType}
            >{this.props.language.controls.textColor}</button>
            <button
              type='button'
              data-type='background-color'
              className={colorType === 'background-color' ? 'active' : ''}
              onClick={this.switchColorType}
            >{this.props.language.controls.backgroundColor}</button>
          </div>
          <ColorPicker
            width={200}
            color={currentColor}
            disableAlpha={true}
            presetColors={this.props.colors}
            onChange={this.toggleColor}
          />
        </div>
      </DropDown>
    )

  }

  switchColorType = ({ currentTarget }) => {
    this.setState({
      colorType: currentTarget.dataset.type
    })
  }

  toggleColor = (color, closePicker) => {

    if (color) {

      const hookReturns = this.props.hooks(`toggle-text-${this.state.colorType}`, color)(color)

      if (hookReturns === false) {
        return false
      }

      if (typeof hookReturns === 'string') {
        color =  hookReturns
      }

      if (this.state.colorType === 'color') {
        this.props.editor.setValue(ContentUtils.toggleSelectionColor(this.props.editorState, color))
      } else {
        this.props.editor.setValue(ContentUtils.toggleSelectionBackgroundColor(this.props.editorState, color))
      }

    }

    if (closePicker) {
      this.dropDownInstance.hide()
      this.props.editor.requestFocus()
    }

  }

}