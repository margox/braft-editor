import React from 'react'
import { Modifier, EditorState, SelectionState, RichUtils, AtomicBlockUtils } from 'draft-js'
import { setBlockData, getSelectionEntity } from 'draftjs-utils'

export default class EditorController extends React.Component{

  triggerChange = (editorState) => {
    this.onChange(editorState)
    return this
  }

  selectionCollapsed = () => {
    return this.selectionState.isCollapsed()
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

  getSelectionBlock = () => {
    return this.contentState.getBlockForKey(this.selectionState.getAnchorKey())
  }

  setSelectionBlockData = (blockData) => {
    return this.triggerChange(setBlockData(this.editorState, blockData))
  }

  getSelectionBlockData = (name) => {
    const blockData = this.getSelectionBlock().getData()
    return name ? blockData.get(name) : blockData
  }

  getSelectionBlockType = () => {
    return this.getSelectionBlock().getType()
  }

  toggleSelectionBlockType = (blockType) => {
    return this.triggerChange(RichUtils.toggleBlockType(this.editorState, blockType))
  }

  getSelectionEntityData = (type) => {

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

  getSelectionInlineStyle = () => {
    return this.editorState.getCurrentInlineStyle()
  }

  selectionHasInlineStyle = (style) => {
    return this.getSelectionInlineStyle().has(style.toUpperCase())
  }

  toggleSelectionInlineStyle = (style, stylesToBeRemoved = []) => {

    if (this.selectionState.isCollapsed()) {
      return this
    }

    style = style.toUpperCase()
    stylesToBeRemoved = stylesToBeRemoved.filter(item => item !== style)

    const currentInlineStyle = this.getSelectionInlineStyle()
    const nextContentState = stylesToBeRemoved.length ? stylesToBeRemoved.reduce((contentState, item) => {
      return Modifier.removeInlineStyle(contentState, this.selectionState, item) 
    }, this.contentState) : this.contentState

    const nextEditorState = stylesToBeRemoved.length ? EditorState.push(this.editorState, nextContentState, 'change-inline-style') : this.editorState
    return this.triggerChange(RichUtils.toggleInlineStyle(nextEditorState, style))

  }

  toggleSelectionAlignment = (alignment) => {
    return this.setSelectionBlockData({
      textAlign: this.getSelectionBlockData('textAlign') !== alignment ? alignment : undefined
    })
  }

  toggleSelectionColor = (color) => {
    return this.toggleSelectionInlineStyle('COLOR-' + color.replace('#', ''), this.colorList.map(item => 'COLOR-' + item.replace('#', '').toUpperCase()))
  }

  toggleSelectionBackgroundColor = (color) => {
    return this.toggleSelectionInlineStyle('BGCOLOR-' + color.replace('#', ''), this.colorList.map(item => 'BGCOLOR-' + item.replace('#', '').toUpperCase()))
  }

  toggleSelectionFontSize = (fontSize) => {
    return this.toggleSelectionInlineStyle('FONTSIZE-' + fontSize, this.fontSizeList.map(item => 'FONTSIZE-' + item))
  }

  toggleSelectionFontFamily = (fontFamily) => {
    return this.toggleSelectionInlineStyle('FONTFAMILY-' + fontFamily, this.fontFamilyList.map(item => 'FONTFAMILY-' + item.name.toUpperCase()))
  }

  toggleSelectionLink = (href, target) => {

    let entityData = { href, target }

    if (this.selectionState.isCollapsed() || this.getSelectionBlockType() === 'atomic') {
      return this
    }

    if (href === false) {
      this.triggerChange(RichUtils.toggleLink(this.editorState, this.selectionState, null))
      return this
    }

    if (href === null) {
      delete entityData.href
    }

    const nextContentState = this.contentState.createEntity('LINK', 'MUTABLE', entityData)
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

  insertText = (text, replace = true) => {

    const currentSelectedBlockType = this.getSelectionBlockType()

    if (currentSelectedBlockType === 'atomic') {
      return this
    }

    if (!this.selectionState.isCollapsed()) {
      return replace ? this.triggerChange(EditorState.push(this.editorState, Modifier.replaceText(
        this.contentState, this.selectionState, text
      ), 'replace-text')) : this
    } else {
      return this.triggerChange(EditorState.push(this.editorState, Modifier.insertText(
        this.contentState, this.selectionState, text
      ), 'insert-text'))
    }

  }

  replaceText = (text) => this.insertText(text)

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

    return this.selectBlock(mediaBlock).setSelectionBlockData(newPosition)

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