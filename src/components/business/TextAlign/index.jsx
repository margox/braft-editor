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
        currentAlignment: getSelectedBlocksMetadata(next.editorState).get('textAlign')
      })
    }

  }

  setAlignment = (e) => {

    const { alignment } = e.target.dataset
    const { editorState, onChange } = this.props
    const { currentAlignment } = this.state

    if (alignment !== currentAlignment) {
      onChange(setBlockData(editorState, {
        'textAlign': alignment
      }))
    } else {
      onChange(setBlockData(editorState, {
        'textAlign': undefined
      }))
    }

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