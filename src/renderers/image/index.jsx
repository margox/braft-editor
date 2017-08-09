import React from 'react'
import { EditorState } from 'draft-js'

export default class Image extends React.Component {

  state = {
    showToolbar: false
  }

  render () {

    const { showToolbar } = this.state
    const { mediaData } = this.props
    const { url, width, height, alignment } = mediaData
    let imageStyles = {}
    let clearFix = false

    if (alignment === 'left') {
      imageStyles.float = 'left'
      clearFix = true
    } else if (alignment === 'right') {
      imageStyles.float = 'right'
      clearFix = true
    } else if (alignment === 'center') {
      imageStyles.textAlign = "center"
    } else {
      imageStyles.float = 'left'
      clearFix = true
    }

    return (
      <div
        className="braft-media-embeder"
        onMouseEnter={() => this.showToolbar()}
        onMouseLeave={() => this.hideToolbar()}
      >
        <div style={imageStyles} className="braft-embed-image">
          {showToolbar && (
            <div data-align={alignment} className="braft-embed-image-toolbar">
              <a data-align="left" onClick={() => this.setImageAlignment('left')}><i className="icon-align-left"></i></a>
              <a data-align="center" onClick={() => this.setImageAlignment('center')}><i className="icon-align-center"></i></a>
              <a data-align="right" onClick={() => this.setImageAlignment('right')}><i className="icon-align-right"></i></a>
            </div>
          )}
          <img src={url} width={width} height={height} />
        </div>
        {clearFix && <div className="clearfix" style={{clear:'both'}}></div>}
      </div>
    )

  }

  setImageAlignment (alignment) {

    let lastAlignment = this.props.mediaData.alignment

    if (lastAlignment === alignment) {
      alignment = null
    }

    const { block, contentState, getEditorState, onChange } = this.props
    const entityKey = block.getEntityAt(0)
    contentState.mergeEntityData(entityKey,{ alignment },)
    onChange(EditorState.push(getEditorState(), contentState, 'change-block-data'))

    this.setState({
      dummy: true
    })

  }

  showToolbar () {
    !this.state.showToolbar && this.setState({
      showToolbar: true
    })
  }

  hideToolbar () {
    this.setState({
      showToolbar: false
    })
  }

}