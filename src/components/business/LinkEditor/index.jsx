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
    const { editorState, contentState, selection, language, viewWrapper } = this.props
    const caption = <i className="icon-link"></i>
    const currentSelectedBlockKey = selection.getAnchorKey()
    const currentSelectedBlockType = contentState.getBlockForKey(currentSelectedBlockKey).getType()
    const textSelected = !selection.isCollapsed() && currentSelectedBlockType !== 'atomic'

    return (
      <div className="control-item-group">
        <DropDown
          caption={caption}
          hoverTitle={language.controls.link}
          hideOnBlur={false}
          viewWrapper={viewWrapper}
          showDropDownArrow={false}
          disabled={!textSelected}
          ref={(instance) => this.dropDownComponent = instance}
          className={"control-item dropdown link-editor-dropdown"}
        >
          <div className="link-editor">
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
                <i className="icon-close"></i>
                <span>{language.linkEditor.removeLink}</span>
              </a>
              <button onClick={this.handleConfirm} className="primary pull-right">{language.base.confirm}</button>
              <button onClick={this.handleCancel} className="default pull-right">{language.base.cancel}</button>
            </div>
          </div>
        </DropDown>
        <button
          title={language.controls.unlink}
          className="control-item button"
          onClick={this.handleUnlink}
          disabled={!textSelected || !href}
        >
          <i className="icon-link-off"></i>
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
      href: e.target.value
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

    const { editorState, selection, onChange } = this.props

    this.dropDownComponent.hide()
    onChange(RichUtils.toggleLink(editorState, selection, null))

  }

  handleConfirm = () => {

    const { href, target } = this.state

    if (href.trim().length === 0) {
      this.handleUnlink()
      return false
    }

    const { editorState, contentState, onChange, selection } = this.props
    const currentContent = contentState.createEntity('LINK', 'MUTABLE', { href, target })
    const entityKey = currentContent.getLastCreatedEntityKey()

    let newEditorState = EditorState.set(editorState, { currentContent })
    newEditorState = RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey)
    newEditorState = EditorState.forceSelection(newEditorState, selection.merge({
      anchorOffset: selection.getEndOffset(), 
      focusOffset: selection.getEndOffset()
    }))
    newEditorState = EditorState.push(newEditorState, Modifier.insertText(
      newEditorState.getCurrentContent(), newEditorState.getSelection(), ' '
    ), 'insert-text')

    onChange(newEditorState)

    this.dropDownComponent.hide()

  }

}