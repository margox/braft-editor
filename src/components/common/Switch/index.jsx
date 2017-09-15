import './style.scss'
import React from 'react'

export default (props) => {

  const { active, onClick, className } = props

  return (
    <div onClick={() => onClick()} className={"switch-button " + className + (active ? ' active' : '')}></div>
  )

}
