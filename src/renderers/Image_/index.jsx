import React from 'react'
import { EditorState, SelectionState } from 'draft-js'
import { setBlockData } from 'draftjs-utils'

export default class Image extends React.Component {

  state = {
    showToolbar: false
  }

  render () {

    const { showToolbar } = this.state
    const { mediaData } = this.props
    const { url, width, height, alignment } = mediaData
    const float = this.props.block.getData().get('float')

    let imageStyles = {}
    let clearFix = false

    if (float) {
      //alignment = null
    } else if (alignment === 'left') {
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
      <div className="braft-media-embeder">
        <div
          style={imageStyles}
          className="braft-embed-image"
          onMouseOver={() => this.showToolbar()}
          onMouseLeave={() => this.hideToolbar()}
        >
          {showToolbar && (
          <div data-float={float} data-align={alignment} className="braft-embed-image-toolbar">
              {
                //<a data-float="left" onClick={() => this.setImageFloat('left')}>&#xe91e;</a>
                //<a data-float="right" onClick={() => this.setImageFloat('right')}>&#xe914;</a>
              }
              <a data-align="left" onClick={() => this.setImageAlignment('left')}>&#xe027;</a>
              <a data-align="center" onClick={() => this.setImageAlignment('center')}>&#xe028;</a>
              <a data-align="right" onClick={() => this.setImageAlignment('right')}>&#xe029;</a>
              <a onClick={() => this.resetSize()}>&#xe042;</a>
          </div>
          )}
          <img ref={instance => this.imageRef = instance} src={url} width={width} height={height} />
        </div>
        {clearFix && <div className="clearfix" style={{clear:'both'}}></div>}
      </div>
    )

  }

  setSize (size) {

  }

  resetSize () {
    const { entityKey, contentState, editorState, onChange } = this.props
    const { naturalWidth: width, naturalHeight: height } = this.imageRef
    contentState.mergeEntityData(entityKey,{ width, height })
    onChange(EditorState.push(editorState, contentState, 'change-block-data'))
  }

  setImageFloat (float) {

    const { block, editorState, onChange } = this.props
    const blockData = block.getData()
    const lastFloat = blockData.get('float')

    if (lastFloat === float) {
      float = null
    }

    SelectionState.createEmpty(block.getKey())
    setImmediate(() => {
      onChange(setBlockData(editorState, { float }))
    })

  }

  setImageAlignment (alignment) {

    let lastAlignment = this.props.mediaData.alignment

    if (lastAlignment === alignment) {
      alignment = null
    }

    const { entityKey, contentState, editorState, onChange } = this.props
    contentState.mergeEntityData(entityKey,{ alignment })
    onChange(EditorState.push(editorState, contentState, 'change-block-data'))

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