import './style.scss'
import React from 'react'
import { RichUtils, EditorState, Modifier } from 'draft-js'
import Switch from 'components/common/Switch'
import DropDown from 'components/common/DropDown'

export default class LinkEditor extends React.Component {

  state = {
    link: null,
    target: null
  }

  render () {

    const { link, target } = this.state
    const { editorState, selection } = this.props
    const caption = <i className="icon-link"></i>

    return (
      <DropDown
        caption={caption}
        disabled={selection.isisCollapsed()}
        className={"control-item dropdown link-editor-dropdown"}
      >
        <div className="link-editor">
          <input
            type="text"
            value={link}
            placeholder="LINK URL"
            onChange={(e) => {
              this.setState({
                link: e.target.value
              })
            }}
          />
          
        </div>
      </DropDown>
    )

  }

  handleConfirm () {



  }

}