import './style.scss'
import React from 'react'

export default class ColorPicker extends React.Component{

  render () {

    const { current, colors, onChange } = this.props

    return (
      <ul className="braft-color-list">
        {colors.map((item, index) => {
          let className = index === current ? 'color-item active' : 'color-item'
          return (
            <li
              key={index}
              title={item}
              className={className}
              style={{color: item}}
              onClick={() => this.handleChange(index)}
            >
            </li>
          )
        })}
      </ul>
    )

  }

  handleChange (index) {
    this.props.onChange(index)
  }

}