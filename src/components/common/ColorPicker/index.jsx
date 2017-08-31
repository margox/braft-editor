import './style.scss'
import React from 'react'

export default class ColorPicker extends React.Component{

  render () {

    const { current, colors, tempColors, onChange, language } = this.props

    return (
      <div className="braft-color-list-wrap">
        <ul className="braft-color-list">
          {colors.map((item, index) => {
            let className = item === current ? 'color-item active' : 'color-item'
            return (
              <li
                key={index}
                title={item}
                className={className}
                style={{color: item}}
                data-color={item.replace('#', '')}
                onClick={this.handleChange}
              >
              </li>
            )
          })}
        </ul>
        {tempColors.length ? <div className="braft-color-list-split-line"><span>{language.controls.tempColors}</span></div> : null}
        {tempColors.length ? <ul className="braft-color-list">
          {tempColors.map((item, index) => {
            let className = item === current ? 'color-item active' : 'color-item'
            return (
              <li
                key={index}
                title={item}
                className={className}
                style={{color: item}}
                data-color={item.replace('#', '')}
                onClick={this.handleChange}
              >
              </li>
            )
          })}
        </ul> : null}
      </div>
    )

  }

  handleChange = (e) => {
    this.props.onChange(e.currentTarget.dataset.color)
  }

}