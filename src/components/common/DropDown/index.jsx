import './style.scss'
import React from 'react'
import ResponsiveHelper from 'helpers/responsive'
import { UniqueIndex } from 'utils/base'

export default class DropDown extends React.Component {

  constructor (props) {

    super(props)
    this.state = {
      active: false,
      offset: 0
    }
    this.responsiveResolveId = null
    this.dropDownConentElement = null
    this.componentId = 'BRAFT-DROPDOWN-' + UniqueIndex()

  }

  componentDidMount () {

    this.fixDropDownPosition()

    document.body.addEventListener('click', (event) => {
      this.registerEvent(event)
    }, false)

    this.responsiveResolveId = ResponsiveHelper.resolve((event) => {
      this.fixDropDownPosition(event)
    })

  }

  componentWillUnmount () {

    document.body.removeEventListener('click', (event) => {
      this.registerEvent(event)
    }, false)

    ResponsiveHelper.unresolve(this.responsiveResolveId)

  }

  render () {

    const { active, offset } = this.state
    const { caption, showDropDownArrow, arrowActive, className, children } = this.props

    return (
      <div id={this.componentId} className={"Braft-dropdown " + (active ? "active " : "") + className}>
        <button data-braft-component-id={this.componentId} className="dropdown-handler">
          <span>{caption}</span>
          {showDropDownArrow !== false && <i className="icon-drop-down"></i>}
        </button>
        <div style={{marginLeft: offset + 'px'}} ref={(instance) => this.dropDownConentElement = instance} className={"dropdown-content" + (arrowActive ? ' arrow-active' : '')}>{children}</div>
      </div>
    )

  }

  fixDropDownPosition (event) {
    const rect = this.dropDownConentElement.getBoundingClientRect()
    const viewWidth = document.body.getBoundingClientRect().width
    const right = viewWidth - rect.right
    console.log(right)
    if (right < 10) {
      this.setState({
        offset: (right - 10) * -1
      })
    } else if (rect.left < 10) {
      this.setState({
        offset: rect.left - 10
      })
    }
  }

  registerEvent (event) {

    let { hideOnBlur } = this.props
    let active = false
    if (event.target.dataset.braftComponentId === this.componentId) {
      active = !this.state.active
    } else if (hideOnBlur === false) {
      active = this.state.active
    }
    this.setState({ active })

  }

  show () {
    this.setState({
      active: true
    })
  }

  hide () {
    this.setState({
      active: false
    })
  }


}