import React from 'react'
import { Modifier, EditorState, RichUtils } from 'draft-js'
import { getSelectedBlocksMetadata, setBlockData } from 'draftjs-utils'

export default class TextAlign extends React.Component {

  state = {
    currentAlignment: undefined
  }

  componentWillReceiveProps (next) {

    if (this.props.editorState !== next.editorState) {
      this.setState({
        currentAlignment: next.editorController.getBlockData('textAlign')
      })
    }

  }

  setAlignment = (e) => {
    this.props.editorController.toggleAlignment(e.target.dataset.alignment)
  }

  render () {

    const { currentAlignment } = this.state
    const { language } = this.props
    const textAlignmentTitles = [
      language.controls.alignLeft,
      language.controls.alignCenter,
      language.controls.alignRight,
      language.controls.alignJustify
    ]

    return (
      <div className="control-item-group">
        {
          ['left', 'center', 'right', 'justify'].map((item, index) => {
            return (
              <button
                key={index}
                title={textAlignmentTitles[index]}
                data-alignment={item}
                className={'control-item button ' + (item === currentAlignment ? 'active' : null)}
                onClick={this.setAlignment}
              >
                <i className={"icon-align-" + item}></i>
              </button>
            )
          })
        }
      </div>
    )

  }

}