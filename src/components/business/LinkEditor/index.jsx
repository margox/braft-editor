import './style.scss'
import React from 'react'
import { RichUtils, EditorState, Modifier } from 'draft-js'
import { getSelectionText, getEntityRange, getSelectionEntity } from 'draftjs-utils'
import Switch from 'components/common/Switch'
import DropDown from 'components/common/DropDown'

export default class LinkEditor extends React.Component {

  state = {
    href: '',
    target: ''
  }

  dropDownComponent = null

  componentWillReceiveProps (next) {

    const { contentState, editorState: nextEditorState } = next

    if (nextEditorState && this.props.editorState !== nextEditorState) {
      let entityKey = getSelectionEntity(nextEditorState)
      if (entityKey) {
        let currentEntity = contentState.getEntity(entityKey)
        if (currentEntity && currentEntity.get('type') === 'LINK') {
          let { href, target } = currentEntity.getData()
          this.setState({ href, target })
        } else {
          this.setState({
            href: '',
            target: ''
          })
        }
      } else {
        this.setState({
          href: '',
          target: ''
        })
      }
    }

  }

  render () {

    const { href, target } = this.state
    const { editorState, contentState, selection } = this.props
    const caption = <i className="icon-link"></i>

    return (
      <div className="control-item-group">
        <DropDown
          caption={caption}
          hoverTitle={'添加链接'}
          hideOnBlur={false}
          showDropDownArrow={false}
          ref={(instance) => this.dropDownComponent = instance}
          className={"control-item dropdown link-editor-dropdown"}
        >
          <div className="link-editor">
            <div className="input-group">
              <input
                type="text"
                value={href}
                spellCheck={false}
                placeholder="键入链接地址"
                onChange={(e) => {
                  this.setState({
                    href: e.target.value
                  })
                }}
              />
            </div>
            <div className="switch-group">
              <Switch
                active={target === '_blank'}
                onClick={() => {
                  this.setState({
                    target: target === '_blank' ? '' : '_blank'
                  })
                }}
              />
              <label>在新窗口打开此链接</label>
            </div>
            <div className="buttons">
              <a onClick={() => this.handleUnlink()} className="primary pull-left" href="javascript:void(0);">
                <i className="icon-close"></i>
                <span>移除链接</span>
              </a>
              <button onClick={() => this.handleConfirm()} className="primary pull-right">确定</button>
              <button onClick={() => this.handleCancel()} className="default pull-right">取消</button>
            </div>
          </div>
        </DropDown>
        <button
          title={'移除链接'}
          className="control-item button"
          onClick={() => this.handleUnlink()}
        >
          <i className="icon-link-off"></i>
        </button>
      </div>
    )

  }

  handleCancel () {
    this.dropDownComponent.hide()
  }

  handleUnlink () {

    const { editorState, selection, onChange } = this.props

    this.dropDownComponent.hide()
    onChange(RichUtils.toggleLink(editorState, selection, null))

  }

  handleConfirm () {

    const { href, target } = this.state
    const { editorState, contentState, onChange } = this.props
    const currentContent = contentState.createEntity('LINK', 'MUTABLE', { href, target })
    const entityKey = currentContent.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(editorState,{ currentContent })

    this.dropDownComponent.hide()
    onChange(RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey))

  }

}