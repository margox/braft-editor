import { SelectionState, EditorState, Modifier } from 'draft-js'
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey'

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
