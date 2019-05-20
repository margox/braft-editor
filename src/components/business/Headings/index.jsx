import './style.scss'
import React from 'react'
import { getHeadings } from 'configs/maps'
import DropDown from 'components/common/DropDown'

export default (props) => {

  let dropDownInstance = null

  const headings = getHeadings(props.language).filter(item => props.headings.indexOf(item.key) !== -1)
  const currentHeadingIndex = headings.findIndex((item) => item.command === props.current)
  const caption = headings[currentHeadingIndex] ? headings[currentHeadingIndex].title : props.language.controls.normal

  return (
    <DropDown
      caption={caption}
      autoHide={true}
      getContainerNode={props.getContainerNode}
      title={props.language.controls.headings}
      arrowActive={currentHeadingIndex === 0}
      ref={(instance) => dropDownInstance = instance}
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
                onClick={() => {props.onChange(item.command, item.type),dropDownInstance.hide()}}
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