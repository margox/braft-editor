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
              data-index={index}
              data-color={item.replace('#', '')}
              onClick={this.handleChange}
            >
            </li>
          )
        })}
      </ul>
    )

  }

  handleChange = (e) => {
    this.props.onChange(e.currentTarget.dataset.color)
  }

}