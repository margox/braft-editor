import './style.scss'
import React from 'react'
import Switch from 'components/common/Switch'
import DropDown from 'components/common/DropDown'
import ControlGroup from 'components/business/ControlGroup'
import { ContentUtils } from 'braft-utils'

export default class LinkEditor extends React.Component {

  constructor (props) {

    super(props)

    this.state = {
      text: '',
      href: '',
      target: props.defaultLinkTarget || '',
      textSelected: false
    }

  }

  dropDownInstance = null

  componentWillReceiveProps (nextProps) {

    const { href, target } = ContentUtils.getSelectionEntityData(nextProps.editorState, 'LINK')
    const textSelected = !ContentUtils.isSelectionCollapsed(this.props.editorState) && ContentUtils.getSelectionBlockType(this.props.editorState) !== 'atomic'

    let selectedText = ''

    if (textSelected) {
      selectedText = ContentUtils.getSelectionText(this.props.editorState)
    }

    this.setState({
      textSelected: textSelected,
      text: selectedText,
      href: href || '',
      target: typeof target === 'undefined' ? (nextProps.defaultLinkTarget || '') : (target || '')
    })

  }

  render () {

    const { allowInsertLinkText } = this.props
    const { text, href, target, textSelected } = this.state
    const caption = <i className='bfi-link'></i>

    return (
      <ControlGroup>
        <DropDown
          key={0}
          caption={caption}
          title={this.props.language.controls.link}
          autoHide={true}
          getContainerNode={this.props.getContainerNode}
          showArrow={false}
          ref={(instance) => this.dropDownInstance = instance}
          className={'control-item dropdown link-editor-dropdown'}
        >
          <div className='bf-link-editor'>
            {allowInsertLinkText ? <div className='input-group'>
              <input
                type='text'
                value={text}
                spellCheck={false}
                disabled={textSelected}
                placeholder={this.props.language.linkEditor.textInputPlaceHolder}
                onKeyDown={this.handeKeyDown}
                onChange={this.handleTnputText}
              />
            </div> : null}
            <div className='input-group'>
              <input
                type='text'
                value={href}
                spellCheck={false}
                placeholder={this.props.language.linkEditor.linkInputPlaceHolder}
                onKeyDown={this.handeKeyDown}
                onChange={this.handleInputLink}
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
              <a onClick={this.handleUnlink} className='primary button-remove-link pull-left' href='javascript:void(0);'>
                <i className='bfi-close'></i>
                <span>{this.props.language.linkEditor.removeLink}</span>
              </a>
              <button type='button' onClick={this.handleConfirm} className='primary pull-right'>{this.props.language.base.confirm}</button>
              <button type='button' onClick={this.handleCancel} className='default pull-right'>{this.props.language.base.cancel}</button>
            </div>
          </div>
        </DropDown>
        <button
          key={1}
          type='button'
          data-title={this.props.language.controls.unlink}
          className='control-item button'
          onClick={this.handleUnlink}
          disabled={!textSelected || !href}
        >
          <i className='bfi-link-off'></i>
        </button>
      </ControlGroup>
    )

  }

  handeKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleConfirm()
      e.preventDefault()
      return false
    }
  }

  handleTnputText = (e) => {
    this.setState({
      text: e.currentTarget.value
    })
  }

  handleInputLink = (e) => {
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
    this.dropDownInstance.hide()
  }

  handleUnlink = () => {
    this.dropDownInstance.hide()
    this.props.editor.setValue(ContentUtils.toggleSelectionLink(this.props.editorState, false))
  }

  handleConfirm = () => {

    let { text, href, target, textSelected } = this.state
    const hookReturns = this.props.hooks('toggle-link', { href, target })({ href, target })

    this.dropDownInstance.hide()
    this.props.editor.requestFocus()

    if (hookReturns === false) {
      return false
    }

    if (hookReturns) {
      typeof hookReturns.href === 'string' && (href = hookReturns.href)
      typeof hookReturns.target === 'string' && (target = hookReturns.target)
    }

    if (textSelected) {
      if (href) {
        this.props.editor.setValue(ContentUtils.toggleSelectionLink(this.props.editorState, href, target))
      } else {
        this.props.editor.setValue(ContentUtils.toggleSelectionLink(this.props.editorState, false))
      }
    } else {
      this.props.editor.setValue(ContentUtils.insertText(this.props.editorState, text || href, null, {
        type: 'LINK',
        data: { href, target }
      }))
    }

  }

}