import { SelectionState, EditorState, Modifier } from 'draft-js';

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