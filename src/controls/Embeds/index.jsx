import React from 'react'
import DropDown from 'components/common/DropDown'
import LinkEditor from 'components/business/LinkEditor'

export default class Embeds extends React.Component {

  constructor (props) {

    super(props)
    this.hideLinkEditorDropDown = () => {
      this.linkEditorDropDown.hide()
    }

  }

  render () {

    return (
      <div className="control-item-group">
        <DropDown
          hideOnBlur={false}
          showDropDownArrow={false}
          caption={<i className="icon-link"></i>}
          className="control-item dropdown link-editor-dropdown"
          ref={(instance) => this.linkEditorDropDown = instance}
        >
          <LinkEditor
            onConfirm={this.hideLinkEditorDropDown}
            onCancel={this.hideLinkEditorDropDown}
            onClear={this.hideLinkEditorDropDown}
          />
        </DropDown>
      </div>
    )

  }

}
