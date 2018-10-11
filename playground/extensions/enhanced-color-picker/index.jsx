import './styles.scss'
import React from 'react'
import { SketchPicker } from 'react-color'

const getColorPicker = (superProps) => ({ onChange: originOnChange, color, presetColors, ...props }) => {

  const onChange = (colorObject) => {
    originOnChange(colorObject.hex, false)
    superProps.onChange && superProps.onChange(colorObject.hex)
  }

  const clearColor = () => originOnChange(color, false)
  const closePicker = () => originOnChange(null, true)

  color = color || presetColors[0]

  return (
    <div className={`braft-color-picker ${superProps.theme}-theme`}>
      <SketchPicker color={color} presetColors={presetColors} onChangeComplete={onChange} {...props}/>
      <footer className="footer">
        <button className="button control-item button-clear" onClick={clearColor} disabled={!color}>{superProps.clearButtonText}</button>
        <button className="button control-item button-close" onClick={closePicker}>{superProps.closeButtonText}</button>
      </footer>
    </div>
  )

}

export default (options) => {

  options = {
    theme: 'dark',
    clearButtonText: '清除',
    closeButtonText: '关闭',
    ...options
  }

  return {
    type: 'prop-interception',
    interceptor: (editorProps, editor) => {
      editorProps.colorPicker = getColorPicker(options)
      editorProps.colorPickerTheme = options.theme
      editorProps.colorPickerAutoHide = false
      return editorProps
    }
  }

}