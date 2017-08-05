import './style.scss'
import React from 'react'
import { headings } from 'maps/controls'
import DropDown from 'components/common/DropDown'

export default class Headings extends React.Component {

  render () {

    const { current, onChange } = this.props

    let currentHeadingIndex = headings.findIndex((item) => item.command === current)
    let caption = headings[currentHeadingIndex] ? headings[currentHeadingIndex].title : '常规'
    let isFirstItemActive = currentHeadingIndex === 0

    return (
      <DropDown
        caption={caption}
        hoverTitle={'标题'}
        arrowActive={isFirstItemActive}
        className={"control-item dropdown headings-dropdown"}
      >
        <ul className="menu">
          {
            headings.map((item, index) => {
              let isActive = current === item.command
              return (
                <li
                  key={index}
                  className={"menu-item" + (isActive ? ' active' : '')}
                  onClick={() => onChange(item.command, item.type)}
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

}