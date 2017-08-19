import { SelectionState, EditorState, Modifier, RichUtils } from 'draft-js'
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey'

export const checkReturn = (editorState, event) => {

  const contentState = editorState.getCurrentContent() 
  const currentSelectedBlockKey = editorState.getSelection().getAnchorKey()

  if (currentSelectedBlockKey) {

    const currentSelectedBlock = contentState.getBlockForKey(currentSelectedBlockKey)
    const currentSelectedBlockType = currentSelectedBlock.getType().toLowerCase()

    if (currentSelectedBlockType === 'unordered-list-item' || currentSelectedBlockType === 'ordered-list-item') {

      if (currentSelectedBlock.getLength() === 0) {
        return RichUtils.toggleBlockType(editorState, 'unstyled')
      }

      return false

    }

    return false

  }

  return false

}

export const selectBlock = (editorState, block) => {

  const blockKey = block.getKey()
  const targetRange = new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: block.getLength()
  })

  return EditorState.forceSelection(editorState, targetRange)

}

export const selectNextBlock = (editorState, blockKey) => {

  let nextBlock = editorState.getCurrentContent().getBlockAfter(blockKey)
  return nextBlock ? selectBlock(editorState, nextBlock) : editorState

}

export const removeBlock = (editorState, block) => {

  const content = editorState.getCurrentContent()
  const blockKey = block.getKey()
  const targetRange = new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: block.getLength()
  })
  const editorStateAfterRemoved = Modifier.removeRange(content, targetRange, 'backward');
  const resetBlock = Modifier.setBlockType(
    editorStateAfterRemoved,
    editorStateAfterRemoved.getSelectionAfter(),
    'unstyled',
  )

  return EditorState.forceSelection(EditorState.push(editorState, resetBlock, 'remove-range'), resetBlock.getSelectionAfter())

}
