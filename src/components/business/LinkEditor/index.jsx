import './style.scss'
import React from 'react'
import { RichUtils, EditorState, Modifier } from 'draft-js'
import Switch from 'components/common/Switch'
import DropDown from 'components/common/DropDown'

export default class LinkEditor extends React.Component {

  state = {
    link: '',
    openInNewWindow: false
  }

  componentWillReceiveProps (props) {

  }

  render () {

    const { link, openInNewWindow } = this.state
    const { editorState, contentState, selection } = this.props
    const caption = <i className="icon-link"></i>

    return (
      <DropDown
        caption={caption}
        disabled={selection.isCollapsed()}
        hideOnBlur={false}
        className={"control-item dropdown link-editor-dropdown"}
      >
        <div className="link-editor">
          <div className="input-group">
            <input
              type="text"
              value={link}
              spellCheck={false}
              placeholder="LINK URL"
              onChange={(e) => {
                this.setState({
                  link: e.target.value
                })
              }}
            />
          </div>
          <div className="switch-group">
            <Switch
              active={openInNewWindow}
              onClick={() => {
                this.setState({
                  openInNewWindow: !openInNewWindow
                })
              }}
            />
            <label>Open this link in new window</label>
          </div>
          <div className="buttons">
            <a className="primary pull-left" href="javascript:void(0);">
              <i className="icon-delete"></i>
              <span>Unink</span>
            </a>
            <button className="primary pull-right">Confirm</button>
            <button className="ghost pull-right">Cancel</button>
          </div>
        </div>
      </DropDown>
    )

  }

  handleConfirm () {

  }

}