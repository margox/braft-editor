import './style.scss'
import React from 'react'
import { List } from 'immutable'
import { EditorState } from 'draft-js'
import { setBlockData } from 'draftjs-utils'
import { selectBlock, removeBlock } from 'utils/editor'

export default class Image extends React.Component {

  state = {
    toolbarVisbile: false,
    toolbarOffset: 0
  }

  render () {

    const { mediaData } = this.props
    const { toolbarVisbile, toolbarOffset } = this.state
    const blockData = this.props.block.getData()

    let float = blockData.get('float')
    let alignment = blockData.get('alignment')
    let { url, link, width, height } = mediaData
    let imageStyles = {}
    let clearFix = false

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
          onMouseOver={this.showToolbar}
          onMouseLeave={this.hideToolbar}
        >
          {toolbarVisbile && (
          <div
            style={{marginLeft: toolbarOffset}}
            ref={instance => this.toolbarElement = instance}
            data-float={float}
            data-alignment={alignment}
            className="braft-embed-image-toolbar"
          >
            <a data-float="left" onClick={this.setImageFloat}>&#xe91e;</a>
            <a data-float="right" onClick={this.setImageFloat}>&#xe914;</a>
            <a data-alignment="left" onClick={this.setImageAlignment}>&#xe027;</a>
            <a data-alignment="center" onClick={this.setImageAlignment}>&#xe028;</a>
            <a data-alignment="right" onClick={this.setImageAlignment}>&#xe029;</a>
            <a onClick={this.removeImage}>&#xe9ac;</a>
            <i style={{marginLeft: toolbarOffset * -1}} className="braft-embed-image-toolbar-arrow"></i>
          </div>
          )}
          <img
            ref={instance => this.imageElement = instance}
            src={url} width={width} height={height}
          />
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

  removeImage = (e) => {

    const { block, getEditorState, onChange } = this.props
    onChange(removeBlock(getEditorState(), block))

  }

  setImageFloat = (e) => {

    let { float } = e.currentTarget.dataset
    const { block, getEditorState, contentState, onChange } = this.props
    const blockData = block.getData()
    const lastFloat = blockData.get('float')

    if (lastFloat === float) {
      float = null
    }

    onChange(setBlockData(selectBlock(getEditorState(), block), { float }))

  }

  setImageAlignment = (e) => {

    let { alignment } = e.currentTarget.dataset
    const { block, getEditorState, contentState, onChange } = this.props
    const blockData = block.getData()
    const lastAlignment = blockData.get('alignment')

    if (lastAlignment === alignment) {
      alignment = null
    }

    onChange(setBlockData(selectBlock(getEditorState(), block), { alignment }))

  }

  showToolbar = () => {

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

  hideToolbar = () => {
    this.setState({
      toolbarVisbile: false
    })
  }

}