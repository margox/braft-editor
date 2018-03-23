import './style.scss'
import React from 'react'
import Switch from 'components/common/Switch'
import DropDown from 'components/common/DropDown'

export default class LinkEditor extends React.Component {

  state = {
    href: '',
    target: ''
  }

  dropDownComponent = null

  componentWillReceiveProps (next) {

    const { href, target } = next.editor.getSelectionEntityData('LINK')
    this.setState({
      href: href || '',
      target: target || ''
    })

  }

  render () {

    const { href, target } = this.state
    const { editor, language, viewWrapper } = this.props
    const caption = <i className="braft-icon-link"></i>
    const textSelected = !editor.selectionCollapsed() && editor.getSelectionBlockType() !== 'atomic'

    return (
      <div className="control-item-group">
        <DropDown
          caption={caption}
          hoverTitle={language.controls.link}
          autoHide={false}
          viewWrapper={viewWrapper}
          showDropDownArrow={false}
          disabled={!textSelected}
          ref={(instance) => this.dropDownComponent = instance}
          className={"control-item dropdown link-editor-dropdown"}
        >
          <div className="braft-link-editor">
            <div className="input-group">
              <input
                type="text"
                value={href}
                spellCheck={false}
                placeholder={language.linkEditor.inputPlaceHolder}
                onKeyDown={this.handeKeyDown}
                onChange={this.inputLink}
              />
            </div>
            <div className="switch-group">
              <Switch
                active={target === '_blank'}
                onClick={this.setTarget}
              />
              <label>{language.linkEditor.openInNewWindow}</label>
            </div>
            <div className="buttons">
              <a onClick={this.handleUnlink} className="primary pull-left" href="javascript:void(0);">
                <i className="braft-icon-close"></i>
                <span>{language.linkEditor.removeLink}</span>
              </a>
              <button type="button" onClick={this.handleConfirm} className="primary pull-right">{language.base.confirm}</button>
              <button type="button" onClick={this.handleCancel} className="default pull-right">{language.base.cancel}</button>
            </div>
          </div>
        </DropDown>
        <button
          type="button"
          title={language.controls.unlink}
          className="control-item button"
          onClick={this.handleUnlink}
          disabled={!textSelected || !href}
        >
          <i className="braft-icon-link-off"></i>
        </button>
      </div>
    )

  }

  handeKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleConfirm()
      e.preventDefault()
      return false
    }
  }

  inputLink = (e) => {
    this.setState({
      href: e.currentTarget.value
    })
  }

  setTarget = () => {
    this.setState({
      target: this.state.target === '_blank' ? '' : '_blank'
    })
  }

  handleCancel = () => {
    this.dropDownComponent.hide()
  }

  handleUnlink = () => {
    this.dropDownComponent.hide()
    this.props.editor.toggleSelectionLink(false)
  }

  handleConfirm = () => {

    const { href, target } = this.state
    this.props.editor.toggleSelectionLink(href, target)
    this.dropDownComponent.hide()
    this.props.editor.requestFocus()

  }

}