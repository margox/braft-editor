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
