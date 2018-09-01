import './style.scss'
import React from 'react'
import { getHeadings } from 'configs/maps'
import DropDown from 'components/common/DropDown'

export default (props) => {

  const headings = getHeadings(props.language)
  const currentHeadingIndex = headings.findIndex((item) => item.command === props.current)
  const caption = headings[currentHeadingIndex] ? headings[currentHeadingIndex].title : props.language.controls.normal

  return (
    <DropDown
      caption={caption}
      containerNode={props.containerNode}
      title={props.language.controls.headings}
      arrowActive={currentHeadingIndex === 0}
      className={'control-item dropdown headings-dropdown'}
    >
      <ul className='menu'>
        {
          headings.map((item, index) => {
            let isActive = props.current === item.command
            return (
              <li
                key={index}
                className={'menu-item' + (isActive ? ' active' : '')}
                onClick={() => props.onChange(item.command, item.type)}
              >
                {item.text}
              </li>
            )
          })
        }
      </ul>
    </DropDown>
  )

}