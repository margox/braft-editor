import { Modifier, EditorState, SelectionState, RichUtils, AtomicBlockUtils } from 'draft-js'
import { setBlockData, getSelectionEntity } from 'draftjs-utils'

export default class EditorController {

  constructor (editorState) {

    this.editorState = editorState
    this.contentState = editorState.getCurrentContent()
    this.selectionState = editorState.getSelection()

  }

  setEditorState (editorState) {

    this.editorState = editorState
    this.contentState = editorState.getCurrentContent()
    this.selectionState = editorState.getSelection()
    return this

  }

  setBraftInstance (braftInstance) {
    this.braftInstance = braftInstance
  }

  triggerChange (editorState) {

    this.setEditorState(editorState)
    this.onChange(editorState)
    return this

  }

  checkReturn = (event) => {

    const currentBlock = this.getBlock()
    const currentBlockType = currentBlock.getType()

    if (currentBlockType === 'unordered-list-item' || currentBlockType === 'ordered-list-item') {
      if (currentBlock.getLength() === 0) {
        this.toggleBlock('unstyled')
        return true
      }
      return false
    }

    return false

  }

  getEntityData (type) {

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

  setBlockData (blockData) {
    return this.triggerChange(setBlockData(this.editorState, blockData))
  }

  getBlock () {
    return this.contentState.getBlockForKey(this.selectionState.getAnchorKey())
  }

  getBlockData (name) {
    const blockData = this.getBlock().getData()
    return name ? blockData.get(name) : blockData
  }

  getBlockType () {
    return this.getBlock().getType()
  }

  selectBlock (block) {

    const blockKey = block.getKey()

    return this.triggerChange(EditorState.forceSelection(this.editorState, new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: block.getLength()
    })))

  }

  selectNextBlock (block) {
    const nextBlock = this.contentState.getBlockAfter(block.getKey())
    return this.triggerChange(nextBlock ? this.selectBlock(nextBlock) : this.editorState)
  }

  removeBlock (block) {

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

  getStyles () {
    return this.editorState.getCurrentInlineStyle()
  }

  insertText (text) {

    const currentSelectedBlockType = this.getBlockType()

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

  isSelectionCollapsed () {
    return this.selectionState.isCollapsed()
  }

  hasStyle (style) {
    return this.getStyles().has(style.toUpperCase())
  }

  toggleStyle (style, stylesToBeRemoved = []) {

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

  toggleBlock (blockType) {
    return this.triggerChange(RichUtils.toggleBlockType(this.editorState, blockType))
  }

  toggleAlignment (alignment) {
    return this.setBlockData({
      textAlign: this.getBlockData('textAlign') !== alignment ? alignment : undefined
    })
  }

  setColorList (colorList = []) {
    this.colorList = colorList
    return this
  }

  setFontSizeList (fontSizeList = []) {
    this.fontSizeList = fontSizeList
    return this
  }

  setFontFamilyList (fontFamilyList = []) {
    this.fontFamilyList = fontFamilyList
    return this
  }

  toggleColor (color) {
    return this.toggleStyle('COLOR-' + color.replace('#', ''), this.colorList.map(item => 'COLOR-' + item.replace('#', '').toUpperCase()))
  }

  toggleBackgroundColor (color) {
    return this.toggleStyle('BGCOLOR-' + color.replace('#', ''), this.colorList.map(item => 'BGCOLOR-' + item.replace('#', '').toUpperCase()))
  }

  toggleFontSize (fontSize) {
    return this.toggleStyle('FONTSIZE-' + fontSize, this.fontSizeList.map(item => 'FONTSIZE-' + item))
  }

  toggleFontFamily (fontFamily) {
    return this.toggleStyle('FONTFAMILY-' + fontFamily, this.fontFamilyList.map(item => 'FONTFAMILY-' + item.name.toUpperCase()))
  }

  insertMedias (medias = []) {

    if (!medias.length) {
      return this
    }

    if (this.getBlockType() === 'atomic') {
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

  setMediaData (entityKey, data) {
    return this.triggerChange(EditorState.push(this.editorState, this.contentState.mergeEntityData(entityKey, data), 'change-block-data'))
  }

  removeMedia (mediaBlock) {
    return this.removeBlock(mediaBlock)
  }

  setMediaPosition (mediaBlock, position) {

    let newPosition = {}
    const { float, alignment } = position

    if (typeof float !== 'undefined') {
      newPosition.float = mediaBlock.getData().get('float') === float ? null : float
    }

    if (typeof alignment !== 'undefined') {
      newPosition.alignment = mediaBlock.getData().get('alignment') === alignment ? null : alignment
    }

    return this.selectBlock(mediaBlock).setBlockData(newPosition)

  }

  toggleLink (href, target) {

    if (this.selectionState.isCollapsed() || this.getBlockType() === 'atomic') {
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

  undo () {
    return this.triggerChange(EditorState.undo(this.editorState))
  }

  redo () {
    return this.triggerChange(EditorState.redo(this.editorState))
  }

  focus () {
    this.braftInstance.focus()
    return this
  }

  blur () {
    this.braftInstance.blur()
    return this
  }

}