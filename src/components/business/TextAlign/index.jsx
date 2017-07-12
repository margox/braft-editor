import React from 'react'
import { Modifier, EditorState, RichUtils } from 'draft-js'
import { getSelectedBlocksMetadata, setBlockData } from 'draftjs-utils'

const textAlignments = ['left', 'center', 'right', 'justify']

export default class TextAlign extends React.Component {

  state = {
    currentAlignment: undefined
  }

  componentWillReceiveProps (next) {

    if (this.props.editorState !== next.editorState) {
      this.setState({
        currentAlignment: getSelectedBlocksMetadata(next.editorState).get('text-align')
      })
    }

  }

  setAlignment (alignment) {

    const { editorState, onChange } = this.props
    const { currentAlignment } = this.state

    if (alignment !== currentAlignment) {
      onChange(setBlockData(editorState, {
        'text-align': alignment
      }))
    } else {
      onChange(setBlockData(editorState, {
        'text-align': undefined
      }))
    }

  }

  render () {

    const { currentAlignment } = this.state

    return (
      <div className="pull-left">
        {
          textAlignments.map((item, index) => {
            return (
              <button
                key={index}
                className={'control-item button ' + (item === currentAlignment ? 'active' : null)}
                onClick={() => this.setAlignment(item)}
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