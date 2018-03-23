import React from 'react'

export default class TextAlign extends React.Component {

  state = {
    currentAlignment: undefined
  }

  componentWillReceiveProps (next) {
    this.setState({
      currentAlignment: next.editor.getSelectionBlockData('textAlign')
    })
  }

  setAlignment = (e) => {
    this.props.editor.toggleSelectionAlignment(e.currentTarget.dataset.alignment)
    this.props.editor.requestFocus()
  }

  render () {

    const { currentAlignment } = this.state
    const { language, textAlignOptions} = this.props
    const textAlignmentTitles = [
      language.controls.alignLeft,
      language.controls.alignCenter,
      language.controls.alignRight,
      language.controls.alignJustify
    ]

    return (
      <div className="control-item-group">
        {
          textAlignOptions.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                title={textAlignmentTitles[index]}
                data-alignment={item}
                className={'control-item button ' + (item === currentAlignment ? 'active' : null)}
                onClick={this.setAlignment}
              >
                <i className={"braft-icon-align-" + item}></i>
              </button>
            )
          })
        }
      </div>
    )

  }

}