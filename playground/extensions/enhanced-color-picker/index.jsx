import './styles.scss'
import React from 'react'
import { SketchPicker } from 'react-color'

export default ({ onChange: originOnChange, ...props }) => {

  const onChange = (colorObject) => originOnChange(colorObject.hex, true)

  return (
    <div className="braft-color-picker">
      <SketchPicker onChangeComplete={onChange} {...props}/>
    </div>
  )

}