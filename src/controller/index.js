import React from 'react'
import { Modifier, EditorState, SelectionState, RichUtils, AtomicBlockUtils } from 'draft-js'
import { setBlockData, getSelectionEntity, removeAllInlineStyles } from 'draftjs-utils'

export default class EditorController extends React.Component{

  applyChange = (editorState) => {
    this.onChange(editorState)
    return this
  }

  selectionCollapsed = () => {
    return this.selectionState.isCollapsed()
  }

  selectBlock = (block) => {

    const blockKey = block.getKey()

    return this.applyChange(EditorState.forceSelection(this.editorState, new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: block.getLength()
    })))

  }

  selectNextBlock = (block) => {
    const nextBlock = this.contentState.getBlockAfter(block.getKey())
    return nextBlock ? this.selectBlock(nextBlock) : this.applyChange(this.editorState)
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

    return this.applyChange(nextEditorState)

  }

  getSelectionBlock = () => {
    return this.contentState.getBlockForKey(this.selectionState.getAnchorKey())
  }

  setSelectionBlockData = (blockData) => {
    return this.applyChange(setBlockData(this.editorState, blockData))
  }

  getSelectionBlockData = (name) => {
    const blockData = this.getSelectionBlock().getData()
    return name ? blockData.get(name) : blockData
  }

  getSelectionBlockType = () => {
    return this.getSelectionBlock().getType()
  }

  toggleSelectionBlockType = (blockType) => {
    return this.applyChange(RichUtils.toggleBlockType(this.editorState, blockType))
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
    return this.applyChange(RichUtils.toggleInlineStyle(nextEditorState, style))

  }

  removeSelectionInlineStyles = () => {
    return this.applyChange(removeAllInlineStyles(this.editorState))
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

  toggleSelectionLineHeight = (lineHeight) => {
    return this.toggleSelectionInlineStyle('LINEHEIGHT-' + lineHeight, this.lineHeightList.map(item => 'LINEHEIGHT-' + item))
  }

  toggleSelectionFontFamily = (fontFamily) => {
    return this.toggleSelectionInlineStyle('FONTFAMILY-' + fontFamily, this.fontFamilyList.map(item => 'FONTFAMILY-' + item.name.toUpperCase()))
  }

  toggleSelectionLetterSpacing = (letterSpacing) => {
    return this.toggleSelectionInlineStyle('LETTERSPACING-' + letterSpacing, this.letterSpacingList.map(item => 'LETTERSPACING-' + item))
  }

  toggleSelectionIndent = (indent) => {
    return this.toggleSelectionInlineStyle('INDENT-' + indent, this.indentList.map(item => 'INDENT-' + item))
  }

  insertHorizontalLine = () => {

    if (!this.selectionState.isCollapsed() || this.getSelectionBlockType() === 'atomic') {
      return this
    }

    const contentStateWithEntity = this.editorState.getCurrentContent().createEntity('HR', 'IMMUTABLE', {})
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(this.editorState, entityKey, ' ')

    return this.applyChange(newEditorState)

  }

  toggleSelectionLink = (href, target) => {

    let entityData = { href, target }

    if (this.selectionState.isCollapsed() || this.getSelectionBlockType() === 'atomic') {
      return this
    }

    if (href === false) {
      this.applyChange(RichUtils.toggleLink(this.editorState, this.selectionState, null))
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

    return this.applyChange(nextEditorState)

  }

  insertText = (text, replace = true) => {

    const currentSelectedBlockType = this.getSelectionBlockType()

    if (currentSelectedBlockType === 'atomic') {
      return this
    }

    if (!this.selectionState.isCollapsed()) {
      return replace ? this.applyChange(EditorState.push(this.editorState, Modifier.replaceText(
        this.contentState, this.selectionState, text
      ), 'replace-text')) : this
    } else {
      return this.applyChange(EditorState.push(this.editorState, Modifier.insertText(
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
      this.selectNextBlock(this.getSelectionBlock())
    }

    const newEditorState = medias.reduce((editorState, media) => {
      const { url, name, type, meta } = media
      const contentStateWithEntity = editorState.getCurrentContent().createEntity(type, 'IMMUTABLE', { url, name, type, meta })
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
      return AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ')
    }, this.editorState)

    return this.applyChange(newEditorState)

  }

  setMediaData = (entityKey, data) => {
    return this.applyChange(EditorState.push(this.editorState, this.contentState.mergeEntityData(entityKey, data), 'change-block-data'))
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

  clear = () => {

    const contentState = this.editorState.getCurrentContent()
    const firstBlock = contentState.getFirstBlock()
    const lastBlock = contentState.getLastBlock()

    const allSelected = new SelectionState({
      anchorKey: firstBlock.getKey(),
      anchorOffset: 0,
      focusKey: lastBlock.getKey(),
      focusOffset: lastBlock.getLength(),
      hasFocus: true
    })

    this.editorState = EditorState.push(
      this.editorState,
      Modifier.removeRange(contentState, allSelected, 'backward'),
      'remove-range'
    )

    return this.applyChange(this.editorState)

  }

  undo = () => {
    return this.applyChange(EditorState.undo(this.editorState))
  }

  redo = () => {
    return this.applyChange(EditorState.redo(this.editorState))
  }

  focus = () => {
    this.draftInstance && this.draftInstance.focus()
    return this
  }

  blur = () => {
    this.draftInstance && this.draftInstance.blur()
    return this
  }

  requestFocus = () => {
    window.setImmediate(() => {
      this.focus()
    })
  }

  requestBlur = () => {
    window.setImmediate(() => {
      this.blur()
    })
  }

}