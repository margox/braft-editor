import './style.scss'
import React from 'react'
import { headings } from 'maps/controls'

export default class Headings extends React.Component {

  render () {

    const { current, onClick } = this.props

    return (
      <ul className="menu headings-list-menu">
        {
          headings.map((item, index) => {
            let isActive = current === item.command
            return (
              <li
                key={index}
                className={"menu-item" + (isActive ? ' active' : '')}
                onClick={() => onClick(item.command, item.type)}
              >
                {item.text}
              </li>
            )
          })
        }
      </ul>
    )

  }

}