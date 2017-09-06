import React from 'react'
import { Modifier, EditorState, SelectionState, RichUtils, AtomicBlockUtils } from 'draft-js'
import { setBlockData, getSelectionEntity } from 'draftjs-utils'

export default class EditorController extends React.Component{

  triggerChange = (editorState) => {
    this.onChange(editorState)
    return this
  }

  getEntityData = (type) => {

    const entityKey = getSelectionEntity(this.editorState)

    if (entityKey) {
      let entity = this.contentState.getEntity(entityKey)
      if (entity && entity.get('type') === type) {
        let { href, target } = entity.getData()
        return { href, target }
      } else {
        return {}
      }
    } else {
      return {}
    }

  }

  setDataForSelectedBlock = (blockData) => {
    return this.triggerChange(setBlockData(this.editorState, blockData))
  }

  getSelectiondBlock = () => {
    return this.contentState.getBlockForKey(this.selectionState.getAnchorKey())
  }

  getSelectionBlockData = (name) => {
    const blockData = this.getSelectiondBlock().getData()
    return name ? blockData.get(name) : blockData
  }

  getSelectionBlockType = () => {
    return this.getSelectiondBlock().getType()
  }

  selectBlock = (block) => {

    const blockKey = block.getKey()

    return this.triggerChange(EditorState.forceSelection(this.editorState, new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: block.getLength()
    })))

  }

  selectNextBlock = (block) => {
    const nextBlock = this.contentState.getBlockAfter(block.getKey())
    return this.triggerChange(nextBlock ? this.selectBlock(nextBlock) : this.editorState)
  }

  removeBlock = (block) => {

    let nextContentState, nextEditorState
    const blockKey = block.getKey()

    nextContentState = Modifier.removeRange(this.contentState, new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: block.getLength()
    }), 'backward')

    nextContentState = Modifier.setBlockType(nextContentState, nextContentState.getSelectionAfter(), 'unstyled')
    nextEditorState = EditorState.push(this.editorState, nextContentState, 'remove-range')
    nextEditorState = EditorState.forceSelection(nextEditorState, nextContentState.getSelectionAfter())

    return this.triggerChange(nextEditorState)

  }

  getCurrentInlineStyle = () => {
    return this.editorState.getCurrentInlineStyle()
  }

  insertText = (text) => {

    const currentSelectedBlockType = this.getSelectionBlockType()

    if(currentSelectedBlockType === 'atomic') {
      return this
    }

    if (!this.selectionState.isCollapsed()) {
      return this.triggerChange(EditorState.push(this.editorState, Modifier.replaceText(
        this.contentState, this.selectionState, text
      ), 'replace-text'))
    } else {
      return this.triggerChange(EditorState.push(this.editorState, Modifier.insertText(
        this.contentState, this.selectionState, text
      ), 'insert-text'))
    }

  }

  replaceText = (text) => this.insertText(text)

  selectionCollapsed = () => {
    return this.selectionState.isCollapsed()
  }

  selectionHasInlineStyle = (style) => {
    return this.getCurrentInlineStyle().has(style.toUpperCase())
  }

  toggleInlineStyleForSelection = (style, stylesToBeRemoved = []) => {

    if (this.selectionState.isCollapsed()) {
      return this
    }

    style = style.toUpperCase()
    stylesToBeRemoved = stylesToBeRemoved.filter(item => item !== style)

    const currentInlineStyle = this.editorState.getCurrentInlineStyle()
    const nextContentState = stylesToBeRemoved.length ? stylesToBeRemoved.reduce((contentState, item) => {
      return Modifier.removeInlineStyle(contentState, this.selectionState, item) 
    }, this.contentState) : this.contentState

    const nextEditorState = stylesToBeRemoved.length ? EditorState.push(this.editorState, nextContentState, 'change-inline-style') : this.editorState
    return this.triggerChange(RichUtils.toggleInlineStyle(nextEditorState, style))

  }

  toggleBlockTypeForSelection = (blockType) => {
    return this.triggerChange(RichUtils.toggleBlockType(this.editorState, blockType))
  }

  toggleSelectionAlignment = (alignment) => {
    return this.setDataForSelectedBlock({
      textAlign: this.getSelectionBlockData('textAlign') !== alignment ? alignment : undefined
    })
  }

  toggleSelectionColor = (color) => {
    return this.toggleInlineStyleForSelection('COLOR-' + color.replace('#', ''), this.colorList.map(item => 'COLOR-' + item.replace('#', '').toUpperCase()))
  }

  toggleSelectionBackgroundColor = (color) => {
    return this.toggleInlineStyleForSelection('BGCOLOR-' + color.replace('#', ''), this.colorList.map(item => 'BGCOLOR-' + item.replace('#', '').toUpperCase()))
  }

  toggleSelectionFontSize = (fontSize) => {
    return this.toggleInlineStyleForSelection('FONTSIZE-' + fontSize, this.fontSizeList.map(item => 'FONTSIZE-' + item))
  }

  toggleSelectionFontFamily = (fontFamily) => {
    return this.toggleInlineStyleForSelection('FONTFAMILY-' + fontFamily, this.fontFamilyList.map(item => 'FONTFAMILY-' + item.name.toUpperCase()))
  }

  insertMedias = (medias = []) => {

    if (!medias.length) {
      return this
    }

    if (this.getSelectionBlockType() === 'atomic') {
      this.selectNextBlock()
    }

    const newEditorState = medias.reduce((editorState, media) => {
      const { url, name, type, meta } = media
      const contentStateWithEntity = editorState.getCurrentContent().createEntity(type, 'IMMUTABLE', { url, name, type, meta })
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
      return AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ')
    }, this.editorState)

    return this.triggerChange(newEditorState)

  }

  setMediaData = (entityKey, data) => {
    return this.triggerChange(EditorState.push(this.editorState, this.contentState.mergeEntityData(entityKey, data), 'change-block-data'))
  }

  removeMedia = (mediaBlock) => {
    return this.removeBlock(mediaBlock)
  }

  setMediaPosition = (mediaBlock, position) => {

    let newPosition = {}
    const { float, alignment } = position

    if (typeof float !== 'undefined') {
      newPosition.float = mediaBlock.getData().get('float') === float ? null : float
    }

    if (typeof alignment !== 'undefined') {
      newPosition.alignment = mediaBlock.getData().get('alignment') === alignment ? null : alignment
    }

    return this.selectBlock(mediaBlock).setDataForSelectedBlock(newPosition)

  }

  toggleSelectionLink = (href, target) => {

    if (this.selectionState.isCollapsed() || this.getSelectionBlockType() === 'atomic') {
      return this
    }

    if (!href || href.trim() === '') {
      this.triggerChange(RichUtils.toggleLink(this.editorState, this.selectionState, null))
      return this
    }

    const nextContentState = this.contentState.createEntity('LINK', 'MUTABLE', { href, target })
    const entityKey = nextContentState.getLastCreatedEntityKey()

    let nextEditorState = EditorState.set(this.editorState, {
      currentContent: nextContentState
    })

    nextEditorState = RichUtils.toggleLink(nextEditorState, this.selectionState, entityKey)
    nextEditorState = EditorState.forceSelection(nextEditorState, this.selectionState.merge({
      anchorOffset: this.selectionState.getEndOffset(), 
      focusOffset: this.selectionState.getEndOffset()
    }))
    nextEditorState = EditorState.push(nextEditorState, Modifier.insertText(
      nextEditorState.getCurrentContent(), nextEditorState.getSelection(), ' '
    ), 'insert-text')

    return this.triggerChange(nextEditorState)

  }

  undo = () => {
    return this.triggerChange(EditorState.undo(this.editorState))
  }

  redo = () => {
    return this.triggerChange(EditorState.redo(this.editorState))
  }

  focus = () => {
    this.draftInstance.focus()
    return this
  }

  blur = () => {
    this.draftInstance.blur()
    return this
  }

}