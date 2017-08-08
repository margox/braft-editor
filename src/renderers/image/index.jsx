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

    return (
      <span
        className="braft-embed-image"
        onMouseEnter={() => this.showToolbar()}
        onMouseLeave={() => this.hideToolbar()}
      >
        {showToolbar && (
          <div className="braft-embed-image-toolbar">
            <a onClick={() => this.setImageAlignment('left')}>L</a>
            <a onClick={() => this.setImageAlignment('center')}>C</a>
            <a onClick={() => this.setImageAlignment('right')}>R</a>
          </div>
        )}
        <img src={url} width={width} height={height} />
      </span>
    )

  }

  setImageAlignment (alignment) {

    const { entityKey, contentState, editorState, onChange } = this.props
    contentState.mergeEntityData(entityKey,{ alignment },)
    onChange(EditorState.push(editorState, contentState, 'change-block-data'))

  }

  showToolbar () {
    this.setState({
      showToolbar: true
    })
  }

  hideToolbar () {
    this.setState({
      showToolbar: false
    })
  }

}