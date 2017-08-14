import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { UniqueIndex } from 'utils/base'

const $ = window.$ || document.querySelector.bind(document)

export default class ImageToolBar extends React.Component {

  componentId = 'BRAFT-MODAL-' + UniqueIndex()
  rootElement = $('#' + this.componentId)
  state = {
    visible: false,
    linkEditorVisible: false
  }

  componentDidMount () {

    if (this.props.visible) {
      this.setState({
        visible: true
      })
    }

    if (!this.rootElement) {
      this.rootElement = document.createElement('div')
      this.rootElement.id = this.componentId
      this.rootElement.className = 'braft-image-toolbar-root'
      document.body.appendChild(this.rootElement)
    }

  }

  componentWillReceiveProps (next) {

    if (this.props.visible && !next.visible) {
      this.unrenderComponent()
    } else if (this.props.visible || next.visible) {
      this.renderComponent(next)
    }

  }

  render () {
    return null
  }

  handleTransitionEnd = () => {
    if (!this.rootElement.classList.contains('active')) {
      ReactDOM.unmountComponentAtNode(this.rootElement)
    }
  }

  unrenderComponent () {
    this.rootElement.classList.remove('active')
  }

  renderComponent (props) {

    const { top, left, marginLeft, float, alignment, link } = props
    const { linkEditorVisible } = this.state

    const childComponent = (
      <div
        style={{marginLeft: toolbarOffset}}
        ref={instance => this.toolbarElement = instance}
        data-float={float}
        data-alignment={alignment}
        className="braft-embed-image-toolbar"
      >
        {(link || linkEditorVisible) && (
          <div onClick={this.preventDefault} className="braft-embed-image-link-editor">
            <input type="text" placeholder="输入链接后回车" onClick={this.handleLinkInputClick} onKeyDown={this.setImageLink} defaultValue={link}/>
          </div>
        )}
        <a data-type="float" data-value="left" onClick={this.handleChange}>&#xe91e;</a>
        <a data-type="float" data-value="right" onClick={this.handleChange}>&#xe914;</a>
        <a data-type="alignment" data-value="left" onClick={this.handleChange}>&#xe027;</a>
        <a data-type="alignment" data-value="center" onClick={this.handleChange}>&#xe028;</a>
        <a data-type="alignment" data-value="right" onClick={this.handleChange}>&#xe029;</a>
        <a onClick={this.toggleLinkEditor}>&#xe91a;</a>
        <a onClick={this.handleRemove}>&#xe9ac;</a>
        <i style={{marginLeft: toolbarOffset * -1}} className="braft-embed-image-toolbar-arrow"></i>
      </div>
    )

    ReactDOM.render(childComponent, this.rootElement)
    setImmediate(() => {
      this.rootElement.classList.add('active')
    })

  }

  toggleLinkEditor = () => {
    this.setState({
      linkEditorVisible: !this.state.linkEditorVisible
    })
  }

  handleRemove = () => {
    this.props.onRemove()
  }

  handleChange = (e) => {
    const { type, value } = e.currentTarget
    this.props.onChange(type, value)
  }

  setImageLink = (e) => {

    if (e.keyCode !== 13) {
      return
    }

    this.props.onChange('link', e.currentTarget.value)

  }

}