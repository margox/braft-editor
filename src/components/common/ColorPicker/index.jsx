import './style.scss'
import React from 'react'

export default (props) => {

  const { current, colors } = props

  return (
    <div className='braft-color-list-wrap'>
      <ul className='braft-color-list'>
        {colors.map((item, index) => {
          let className = item === current ? 'color-item active' : 'color-item'
          return (
            <li
              key={index}
              title={item}
              className={className}
              style={{color: item}}
              data-color={item.replace('#', '')}
              onClick={(e) => props.onChange(e.currentTarget.dataset.color)}
            >
            </li>
          )
        })}
      </ul>
    </div>
  )

}