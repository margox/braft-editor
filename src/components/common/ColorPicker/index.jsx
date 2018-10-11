import './style.scss'
import React from 'react'

export default (props) => (
  <div className='bf-colors-wrap'>
    <ul className='bf-colors'>
      {props.presetColors.map((item, index) => {
        let className = item === props.color ? 'color-item active' : 'color-item'
        return (
          <li
            key={index}
            title={item}
            className={className}
            style={{color: item}}
            data-color={item.replace('#', '')}
            onClick={(e) => props.onChange(e.colorTarget.dataset.color)}
          >
          </li>
        )
      })}
    </ul>
  </div>
)