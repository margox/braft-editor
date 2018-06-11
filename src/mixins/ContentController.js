import React from 'react'
import { Modifier, EditorState, SelectionState, RichUtils, AtomicBlockUtils } from 'draft-js'
import { setBlockData, getSelectionEntity, removeAllInlineStyles } from 'draftjs-utils'
import { detectColorsFromHTML, detectColorsFromRaw } from 'helpers/colors'

export default Component => class extends Component {

  applyChange = (editorState) => {
    this.onChange(editorState)
    return this
  }

  selectionCollapsed = () => {
    return this.state.selectionState.isCollapsed()
  }

  selectBlock = (block) => {

    const blockKey = block.getKey()

    return this.applyChange(EditorState.forceSelection(this.state.editorState, new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: block.getLength()
    })))

  }

  selectNextBlock = (block) => {
    const nextBlock = this.state.contentState.getBlockAfter(block.getKey())
    return nextBlock ? this.selectBlock(nextBlock) : this.applyChange(this.state.editorState)
  }

  removeBlock = (block, lastSelection = null) => {

    let nextContentState, nextEditorState
    const blockKey = block.getKey()

    nextContentState = Modifier.removeRange(this.state.contentState, new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: block.getLength()
    }), 'backward')

    nextContentState = Modifier.setBlockType(nextContentState, nextContentState.getSelectionAfter(), 'unstyled')
    nextEditorState = EditorState.push(this.state.editorState, nextContentState, 'remove-range')
    nextEditorState = EditorState.forceSelection(nextEditorState, lastSelection || nextContentState.getSelectionAfter())

    return this.applyChange(nextEditorState)

  }

  getSelectionBlock = () => {
    return this.state.contentState.getBlockForKey(this.state.selectionState.getAnchorKey())
  }

  setSelectionBlockData = (blockData) => {
    return this.applyChange(setBlockData(this.state.editorState, blockData))
  }

  getSelectionBlockData = (name) => {
    const blockData = this.getSelectionBlock().getData()
    return name ? blockData.get(name) : blockData
  }

  getSelectionBlockType = () => {
    return this.getSelectionBlock().getType()
  }

  getSelectionText = () => {

    if (this.state.selectionState.isCollapsed() || this.getSelectionBlockType() === 'atomic') {
      return ''
    }

    const anchorKey = this.state.selectionState.getAnchorKey()
    const currentContentBlock = this.state.contentState.getBlockForKey(anchorKey)
    const start = this.state.selectionState.getStartOffset()
    const end = this.state.selectionState.getEndOffset()

    return currentContentBlock.getText().slice(start, end);

  }

  toggleSelectionBlockType = (blockType) => {
    return this.applyChange(RichUtils.toggleBlockType(this.state.editorState, blockType))
  }

  getSelectionEntityData = (type) => {

    const entityKey = getSelectionEntity(this.state.editorState)

    if (entityKey) {
      let entity = this.state.contentState.getEntity(entityKey)
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
    return this.state.editorState.getCurrentInlineStyle()
  }

  selectionHasInlineStyle = (style) => {
    return this.getSelectionInlineStyle().has(style.toUpperCase())
  }

  toggleSelectionInlineStyle = (style, stylesToBeRemoved = []) => {

    if (this.state.selectionState.isCollapsed()) {
      return this
    } 
     
    style = style.toUpperCase()
    stylesToBeRemoved = stylesToBeRemoved.filter(item => item !== style)

    const currentInlineStyle = this.getSelectionInlineStyle()
    const nextContentState = stylesToBeRemoved.length ? stylesToBeRemoved.reduce((contentState, item) => {
      return Modifier.removeInlineStyle(contentState, this.state.selectionState, item) 
    }, this.state.contentState) : this.state.contentState

    const nextEditorState = stylesToBeRemoved.length ? EditorState.push(this.state.editorState, nextContentState, 'change-inline-style') : this.state.editorState
    return this.applyChange(RichUtils.toggleInlineStyle(nextEditorState, style))

  }

  removeSelectionInlineStyles = () => {
    return this.applyChange(removeAllInlineStyles(this.state.editorState))
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

    if (!this.state.selectionState.isCollapsed() || this.getSelectionBlockType() === 'atomic') {
      return this
    }

    const contentStateWithEntity = this.state.contentState.createEntity('HR', 'IMMUTABLE', {})
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(this.state.editorState, entityKey, ' ')

    return this.applyChange(newEditorState)

  }

  toggleSelectionLink = (href, target) => {

    let entityData = { href, target }

    if (this.state.selectionState.isCollapsed() || this.getSelectionBlockType() === 'atomic') {
      return this
    }

    if (href === false) {
      this.applyChange(RichUtils.toggleLink(this.state.editorState, this.state.selectionState, null))
      return this
    }

    if (href === null) {
      delete entityData.href
    }

    try {

      const nextContentState = this.state.contentState.createEntity('LINK', 'MUTABLE', entityData)
      const entityKey = nextContentState.getLastCreatedEntityKey()

      let nextEditorState = EditorState.set(this.state.editorState, {
        currentContent: nextContentState
      })

      nextEditorState = RichUtils.toggleLink(nextEditorState, this.state.selectionState, entityKey)
      nextEditorState = EditorState.forceSelection(nextEditorState, this.state.selectionState.merge({
        anchorOffset: this.state.selectionState.getEndOffset(), 
        focusOffset: this.state.selectionState.getEndOffset()
      }))

      nextEditorState = EditorState.push(nextEditorState, Modifier.insertText(
        nextEditorState.getCurrentContent(), nextEditorState.getSelection(), ' '
      ), 'insert-text')

      return this.applyChange(nextEditorState)

    } catch (error) {
      console.warn(error)
    }

  }

  insertText = (text, replace = true) => {

    const currentSelectedBlockType = this.getSelectionBlockType()

    if (currentSelectedBlockType === 'atomic') {
      return this
    }

    if (!this.state.selectionState.isCollapsed()) {
      return replace ? this.applyChange(EditorState.push(this.state.editorState, Modifier.replaceText(
        this.state.contentState, this.state.selectionState, text
      ), 'replace-text')) : this
    } else {
      return this.applyChange(EditorState.push(this.state.editorState, Modifier.insertText(
        this.state.contentState, this.state.selectionState, text
      ), 'insert-text'))
    }

  }

  replaceText = (text) => this.insertText(text)

  insertHTML = (htmlString) => {

    if (!htmlString) {
      return this
    }

    try {

      const rawContent = this.convertHTML(htmlString)
      const { blockMap } = rawContent
      const tempColors = detectColorsFromHTML(htmlString)

      this.addTempColors(tempColors)
      this.requestFocus()

      return this.focus().applyChange(
        EditorState.push(this.state.editorState, Modifier.replaceWithFragment(
          this.state.contentState, this.state.selectionState, blockMap
        ), 'insert-fragment')
      )

    } catch (error) {
      return this
    }

  }

  insertMedias = (medias = []) => {

    if (!medias.length) {
      return this
    }

    if (this.getSelectionBlockType() === 'atomic') {
      this.selectNextBlock(this.getSelectionBlock())
    }

    const newEditorState = medias.reduce((editorState, media) => {
      const { url, name, type, meta } = media
      const contentStateWithEntity = this.contentState.createEntity(type, 'IMMUTABLE', { url, name, type, meta })
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
      return AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ')
    }, this.state.editorState)

    return this.applyChange(newEditorState)

  }

  setMediaData = (entityKey, data) => {
    return this.applyChange(EditorState.push(this.state.editorState, this.state.contentState.mergeEntityData(entityKey, data), 'change-block-data'))
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

    const firstBlock = this.state.contentState.getFirstBlock()
    const lastBlock = this.state.contentState.getLastBlock()

    const allSelected = new SelectionState({
      anchorKey: firstBlock.getKey(),
      anchorOffset: 0,
      focusKey: lastBlock.getKey(),
      focusOffset: lastBlock.getLength(),
      hasFocus: true
    })

    this.state.editorState = EditorState.push(
      this.state.editorState,
      Modifier.removeRange(this.state.contentState, allSelected, 'backward'),
      'remove-range'
    )

    return this.applyChange(this.state.editorState)

  }

  undo = () => {
    return this.applyChange(EditorState.undo(this.state.editorState))
  }

  redo = () => {
    return this.applyChange(EditorState.redo(this.state.editorState))
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
    window.setImmediate(this.focus)
  }

  requestBlur = () => {
    window.setImmediate(this.blur)
  }

}