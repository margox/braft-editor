import { SelectionState, EditorState } from 'draft-js';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';

export const selectBlock = (editorState, blockKey) => {

  const offsetKey = DraftOffsetKey.encode(blockKey, 0, 0)
  const element = document.querySelector('[data-offset-key="' + offsetKey + '"]')
  const selection = window.getSelection()
  const range = document.createRange()

  range.setStart(element, 0)
  range.setEnd(element, 0)

  selection.removeAllRanges()
  selection.addRange(range)

  return EditorState.forceSelection(editorState, new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 0,
    isBackward: false,
  }))

}

export const selectNextBlock = (editorState, blockKey) => {

  const offsetKey = DraftOffsetKey.encode(blockKey, 0, 0)
  const element = document.querySelector('[data-offset-key="' + offsetKey + '"]').nextSibling
  const selection = window.getSelection()
  const range = document.createRange()

  range.setStart(element, 0)
  range.setEnd(element, 0)

  selection.removeAllRanges()
  selection.addRange(range)

  return EditorState.forceSelection(editorState, new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 0,
    isBackward: false,
  }))

}

export const removeBlock = (editorState, blockKey) => {

  const contentState = editorState.getCurrentContent()
  const blockMap = contentState.getBlockMap()
  const newBlockMap = blockMap.remove(blockKey)
  const newContentState = contentState.merge({
    blockMap: newBlockMap
  })

  return EditorState.push(editorState, newContentState, 'remove-range')

}