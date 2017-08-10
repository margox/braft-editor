import React from 'react'
import { EditorState, SelectionState, Modifier } from 'draft-js'
import { setBlockData } from 'draftjs-utils'
import { selectBlock, selectNextBlock, removeBlock } from 'utils/editor'

export default class Image extends React.Component {

  state = {
    toolbarVisbile: false,
    toolbarOffset: 0,
    tempWidth: null,
    tempHeight: null
  }

  render () {

    const { mediaData } = this.props
    const { toolbarVisbile, toolbarOffset, tempWidth, tempHeight } = this.state
    const float = this.props.block.getData().get('float')

    let { url, width, height, alignment } = mediaData
    let imageStyles = {}
    let clearFix = false

    width = tempWidth || width
    height = tempHeight || height

    if (float) {
      alignment = null
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
          {toolbarVisbile && (
          <div
            style={{marginLeft: toolbarOffset}}
            ref={instance => this.toolbarElement = instance}
            data-float={float}
            data-align={alignment}
            className="braft-embed-image-toolbar"
          >
              <a data-float="left" onClick={() => this.setImageFloat('left')}>&#xe91e;</a>
              <a data-float="right" onClick={() => this.setImageFloat('right')}>&#xe914;</a>
              <a data-align="left" onClick={() => this.setImageAlignment('left')}>&#xe027;</a>
              <a data-align="center" onClick={() => this.setImageAlignment('center')}>&#xe028;</a>
              <a data-align="right" onClick={() => this.setImageAlignment('right')}>&#xe029;</a>
              <a data-align="right" onClick={() => this.removeImage()}>&#xe9ac;</a>
              <i style={{marginLeft: toolbarOffset * -1}} className="braft-embed-image-toolbar-arrow"></i>
          </div>
          )}
          <img ref={instance => this.imageElement = instance} src={url} width={width} height={height} />
        </div>
        {clearFix && <div className="clearfix" style={{clear:'both'}}></div>}
      </div>
    )

  }

  calcToolbarOffset () {

    let viewWidth = document.body.getBoundingClientRect().width
    let toolbarRect = this.toolbarElement.getBoundingClientRect()
    let imageRect = this.imageElement.getBoundingClientRect()
    let right = imageRect.right - imageRect.width / 2 + toolbarRect.width / 2
    let left = imageRect.left + imageRect.width / 2 - toolbarRect.width / 2

    right = viewWidth - right

    if (right < 10) {
      return right - 10
    } else if (left < 10) {
      return left * -1 + 10
    } else {
      return 0
    }

  }

  setSize (size) {

    let { width, height } = size
    const { entityKey, contentState, editorState, onChange } = this.props
    contentState.mergeEntityData(entityKey,{ width, height })
    onChange(EditorState.push(editorState, contentState, 'change-block-data'))

  }

  resetSize () {

    const { entityKey, contentState, editorState, onChange } = this.props
    const { naturalWidth: width, naturalHeight: height } = this.imageElement

    contentState.mergeEntityData(entityKey,{ width, height })
    onChange(EditorState.push(editorState, contentState, 'change-block-data'))

  }

  removeImage () {

    const { block, getEditorState, onChange } = this.props
    onChange(removeBlock(getEditorState(), block.getKey()))

  }

  setImageFloat (float) {

    const { block, getEditorState, onChange } = this.props
    const blockData = block.getData()
    const blockKey = block.getKey()
    const lastFloat = blockData.get('float')

    if (lastFloat === float) {
      float = null
    }

    onChange(selectBlock(getEditorState(), blockKey))
    setImmediate(() => {
      onChange(setBlockData(getEditorState(), { float }))
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
    if (!this.state.toolbarVisbile) {
      this.setState({
        toolbarVisbile: true
      }, () => {
        this.setState({
          toolbarOffset: this.calcToolbarOffset()
        })
      })
    }
  }

  hideToolbar () {
    this.setState({
      toolbarVisbile: false
    })
  }

}