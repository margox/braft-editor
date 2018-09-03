import React from 'react'
import { ContentUtils } from 'braft-utils'

export default class TextAlign extends React.Component {

  state = {
    currentAlignment: undefined
  }

  componentWillReceiveProps (next) {
    this.setState({
      currentAlignment: ContentUtils.getSelectionBlockData(next.editorState, 'textAlign')
    })
  }

  setAlignment = (event) => {

    let { alignment } = event.currentTarget.dataset
    const hookReturns = this.props.hooks('toggle-text-alignment', alignment)(alignment)

    if (this.props.textAligns.indexOf(hookReturns) > -1) {
      alignment = hookReturns
    }

    this.props.editor.setValue(ContentUtils.toggleSelectionAlignment(this.props.editorState, alignment))
    this.props.editor.requestFocus()

  }

  render () {

    const textAlignmentTitles = [
      this.props.language.controls.alignLeft,
      this.props.language.controls.alignCenter,
      this.props.language.controls.alignRight,
      this.props.language.controls.alignJustify
    ]

    return (
      <div className='control-item-group'>
        {
          this.props.textAligns.map((item, index) => {
            return (
              <button
                type='button'
                key={index}
                data-title={textAlignmentTitles[index]}
                data-alignment={item}
                className={'control-item button ' + (item === this.state.currentAlignment ? 'active' : null)}
                onClick={this.setAlignment}
              >
                <i className={'bfi-align-' + item}></i>
              </button>
            )
          })
        }
      </div>
    )

  }

}