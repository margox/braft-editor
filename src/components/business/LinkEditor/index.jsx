import './style.scss'
import React from 'react'
import Switch from 'components/common/Switch'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'

export default class LinkEditor extends React.Component {

  state = {
    href: '',
    target: ''
  }

  dropDownComponent = null

  componentWillReceiveProps (next) {

    const { href, target } = ContentUtils.getSelectionEntityData(next.editorState, 'LINK')
    this.setState({
      href: href || '',
      target: target || ''
    })

  }

  render () {

    const { href, target } = this.state
    const caption = <i className='bfi-link'></i>
    const textSelected = !ContentUtils.isSelectionCollapsed(this.props.editorState) && ContentUtils.getSelectionBlockType(this.props.editorState) !== 'atomic'

    return (
      <div className='control-item-group'>
        <DropDown
          caption={caption}
          title={this.props.language.controls.link}
          autoHide={false}
          containerNode={this.props.containerNode}
          showArrow={false}
          disabled={!textSelected}
          ref={(instance) => this.dropDownComponent = instance}
          className={'control-item dropdown link-editor-dropdown'}
        >
          <div className='bf-link-editor'>
            <div className='input-group'>
              <input
                type='text'
                value={href}
                spellCheck={false}
                placeholder={this.props.language.linkEditor.inputPlaceHolder}
                onKeyDown={this.handeKeyDown}
                onChange={this.inputLink}
              />
            </div>
            <div className='switch-group'>
              <Switch
                active={target === '_blank'}
                onClick={this.setTarget}
              />
              <label>{this.props.language.linkEditor.openInNewWindow}</label>
            </div>
            <div className='buttons'>
              <a onClick={this.handleUnlink} className='primary pull-left' href='javascript:void(0);'>
                <i className='bfi-close'></i>
                <span>{this.props.language.linkEditor.removeLink}</span>
              </a>
              <button type='button' onClick={this.handleConfirm} className='primary pull-right'>{this.props.language.base.confirm}</button>
              <button type='button' onClick={this.handleCancel} className='default pull-right'>{this.props.language.base.cancel}</button>
            </div>
          </div>
        </DropDown>
        <button
          type='button'
          data-title={this.props.language.controls.unlink}
          className='control-item button'
          onClick={this.handleUnlink}
          disabled={!textSelected || !href}
        >
          <i className='bfi-link-off'></i>
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
    this.props.editor.setValue(ContentUtils.toggleSelectionLink(this.props.editorState, false))
  }

  handleConfirm = () => {

    let { href, target } = this.state
    const hookReturns = this.props.hooks('toggle-link', { href, target })({ href, target })

    this.dropDownComponent.hide()
    this.props.editor.requestFocus()

    if (hookReturns === false) {
      return false
    }

    if (hookReturns) {
      typeof hookReturns.href === 'string' && (href = hookReturns.href)
      typeof hookReturns.target === 'string' && (target = hookReturns.target)
    }

    this.props.editor.setValue(ContentUtils.toggleSelectionLink(this.props.editorState, href, target))

  }

}