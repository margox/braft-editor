import './style.scss'
import React from 'react'
import { Modifier, EditorState, RichUtils } from 'draft-js'
import { getSelectionEntity } from 'draftjs-utils'
import { UniqueIndex } from 'utils/base'
import DropDown from 'components/common/DropDown'
import ColorPicker from 'components/common/ColorPicker'

export default class TextColor extends React.Component {

  state = {
    colorType: 'color',
    entityKey: null,
    color: null,
    backgroundColor: null
  }

  dropDownId = 'BRAFT-DROPDOWN-' + UniqueIndex()

  componentWillReceiveProps (next) {

    const { contentState, editorState: nextEditorState } = next

    if (nextEditorState && this.props.editorState !== nextEditorState) {
      let entityKey = getSelectionEntity(nextEditorState)
      if (entityKey) {
        let currentEntity = contentState.getEntity(entityKey)
        if (currentEntity && currentEntity.get('type') === 'COLORED-TEXT') {
          let { color, backgroundColor } = currentEntity.getData()
          this.setState({ color, backgroundColor, entityKey })
        } else {
          this.setState({
            color: null,
            backgroundColor: null,
            entityKey: null
          })
        }
      } else {
        this.setState({
          color: null,
          backgroundColor: null,
          entityKey: null
        })
      }
    }

  }

  render () {

    let captionStyle = {}
    let currentIndex = null
    let { colorType, color, backgroundColor } = this.state
    let { onChange, language, colors, viewWrapper } = this.props

    colors.forEach((item, index) => {

      if (item === color) {
        captionStyle.color = item
        colorType === 'color' && (currentIndex = index)
      }

      if (item === backgroundColor) {
        captionStyle.backgroundColor = item
        colorType === 'backgroundColor' && (currentIndex = index)
      }

    })

    let caption = (
      <i
        style={captionStyle}
        className="icon-text-color"
      >
        <span className="path1"></span>
        <span className="path2"></span>
      </i>
    )

    return (
      <DropDown
        caption={caption}
        hoverTitle={language.controls.color}
        showDropDownArrow={false}
        viewWrapper={viewWrapper}
        componentId={this.dropDownId}
        ref={(instance) => this.dropDownComponent = instance}
        className={"control-item dropdown text-color-dropdown"}
      >
        <div className="braft-text-color-picker-wrap">
          <div className="braft-color-switch-buttons">
            <button
              data-type="color"
              data-keep-active={true}
              data-braft-component-id={this.dropDownId}
              className={colorType === 'color' ? 'active' : ''}
              onClick={this.switchColorType}
            >{language.controls.textColor}</button>
            <button
              data-type="backgroundColor"
              data-keep-active={true}
              data-braft-component-id={this.dropDownId}
              className={colorType === 'backgroundColor' ? 'active' : ''}
              onClick={this.switchColorType}
            >{language.controls.backgroundColor}</button>
          </div>
          <ColorPicker
            width={200}
            current={currentIndex}
            disableAlpha={true}
            colors={colors}
            onChange={this.toggleColor}
          />
        </div>
      </DropDown>
    )

  }

  switchColorType = (e) => {
    this.setState({
      colorType: e.target.dataset.type
    })
  }

  toggleColor = (newColor) => {

    const { colorType, color, backgroundColor, entityKey } = this.state
    const { editorState, contentState, selection, onChange, forceRender } = this.props

    let newEditorState = editorState
    const entityData = {}
    if (colorType === 'color') {
      entityData.color = newColor === color ? null : newColor
    } else {
      entityData.backgroundColor = newColor === color ? null : newColor
    }

    if (!entityKey) {
      const newContentState = contentState.createEntity('COLORED-TEXT', 'MUTABLE', entityData)
      let entityKey = newContentState.getLastCreatedEntityKey()
      newEditorState = EditorState.set(editorState, {
        currentContent: Modifier.applyEntity(newContentState, selection, entityKey)
      })
    } else {
      const newContentState = contentState.mergeEntityData(entityKey, entityData)
      newEditorState = EditorState.push(editorState, newContentState, 'change-block-data')
    }

    this.dropDownComponent.hide()
    onChange(newEditorState)
    setImmediate(forceRender)

  }

  toggleColorOld = (color) => {

    const prefix = this.state.colorType === 'color' ? 'COLOR-' : 'BGCOLOR-'
    const toggledColor = prefix + color
    const { editorState, selection, currentInlineStyle, colors } = this.props
    const nextContentState = colors.reduce((contentState, item, index) => {
      return Modifier.removeInlineStyle(contentState, selection, prefix + item.replace('#', '')) 
    }, editorState.getCurrentContent())

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    )

    if (selection.isCollapsed()) {
      nextEditorState = currentInlineStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color)
      }, nextEditorState)
    }

    if (!currentInlineStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      );
    }

    this.props.onChange(nextEditorState)
    this.dropDownComponent.hide()

  }

}