/* eslint-disable no-underscore-dangle */
import { ContentUtils, ColorUtils } from 'braft-utils';
import { RichUtils, Modifier, EditorState, ContentState } from 'draft-js';
import getFragmentFromSelection from 'draft-js/lib/getFragmentFromSelection';
import { handleNewLine } from 'draftjs-utils';

export const keyCommandHandlers = (command, editorState, editor) => {
  if (
    editor.editorProps.handleKeyCommand &&
    editor.editorProps.handleKeyCommand(command, editorState, editor) ===
      'handled'
  ) {
    return 'handled';
  }

  if (command === 'braft-save') {
    if (editor.editorProps.onSave) {
      editor.editorProps.onSave(editorState);
    }
    return 'handled';
  }

  const { controls, excludeControls } = editor.editorProps;
  const allowIndent =
    (controls.indexOf('text-indent') !== 0 ||
      controls.find((item) => item.key === 'text-indent')) &&
    excludeControls.indexOf('text-indent') === -1;
  const cursorStart = editorState.getSelection().getStartOffset();
  const cursorEnd = editorState.getSelection().getEndOffset();
  const cursorIsAtFirst = cursorStart === 0 && cursorEnd === 0;

  if (command === 'backspace') {
    if (
      editor.editorProps.onDelete &&
      editor.editorProps.onDelete(editorState) === false
    ) {
      return 'handled';
    }

    const blockType = ContentUtils.getSelectionBlockType(editorState);

    if (allowIndent && cursorIsAtFirst && blockType !== 'code-block') {
      editor.setValue(ContentUtils.decreaseSelectionIndent(editorState));
    }
  }

  if (command === 'tab') {
    const blockType = ContentUtils.getSelectionBlockType(editorState);

    if (blockType === 'code-block') {
      editor.setValue(
        ContentUtils.insertText(
          editorState,
          ' '.repeat(editor.editorProps.codeTabIndents),
        ),
      );
      return 'handled';
    }
    if (
      blockType === 'ordered-list-item' ||
      blockType === 'unordered-list-item'
    ) {
      const newEditorState = RichUtils.onTab(event, editorState, 4);
      if (newEditorState !== editorState) {
        editor.setValue(newEditorState);
      }
      return 'handled';
    }
    if (blockType !== 'atomic' && allowIndent && cursorIsAtFirst) {
      editor.setValue(ContentUtils.increaseSelectionIndent(editorState));
      return 'handled';
    }
  }

  const nextEditorState = ContentUtils.handleKeyCommand(editorState, command);

  if (nextEditorState) {
    editor.setValue(nextEditorState);
    return 'handled';
  }

  return 'not-handled';
};

export const returnHandlers = (event, editorState, editor) => {
  if (
    editor.editorProps.handleReturn &&
    editor.editorProps.handleReturn(event, editorState, editor) === 'handled'
  ) {
    return 'handled';
  }

  const currentBlock = ContentUtils.getSelectionBlock(editorState);
  const currentBlockType = currentBlock.getType();

  if (
    currentBlockType === 'unordered-list-item' ||
    currentBlockType === 'ordered-list-item'
  ) {
    if (currentBlock.getLength() === 0) {
      editor.setValue(
        ContentUtils.toggleSelectionBlockType(editorState, 'unstyled'),
      );
      return 'handled';
    }

    return 'not-handled';
  }
  if (currentBlockType === 'code-block') {
    if (
      event.which === 13 &&
      (event.getModifierState('Shift') ||
        event.getModifierState('Alt') ||
        event.getModifierState('Control'))
    ) {
      editor.setValue(
        ContentUtils.toggleSelectionBlockType(editorState, 'unstyled'),
      );
      return 'handled';
    }

    return 'not-handled';
  }
  if (currentBlockType === 'blockquote') {
    if (event.which === 13) {
      if (
        event.getModifierState('Shift') ||
        event.getModifierState('Alt') ||
        event.getModifierState('Control')
      ) {
        // eslint-disable-next-line no-param-reassign
        event.which = 0;
      } else {
        editor.setValue(RichUtils.insertSoftNewline(editorState));
        return 'handled';
      }
    }
  }

  const nextEditorState = handleNewLine(editorState, event);

  if (nextEditorState) {
    editor.setValue(nextEditorState);
    return 'handled';
  }

  return 'not-handled';
};

export const beforeInputHandlers = (chars, editorState, editor) => {
  if (
    editor.editorProps.handleBeforeInput &&
    editor.editorProps.handleBeforeInput(chars, editorState, editor) ===
      'handled'
  ) {
    return 'handled';
  }

  return 'not-handled';
};

export const compositionStartHandler = (_, editor) => {
  const { editorState } = editor.state;
  const selectedBlocks = ContentUtils.getSelectedBlocks(editorState);

  if (selectedBlocks && selectedBlocks.length > 1) {
    const nextEditorState = EditorState.push(
      editorState,
      Modifier.removeRange(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        'backward',
      ),
      'remove-range',
    );

    editor.setValue(nextEditorState);
  }
};

export const dropHandlers = (selectionState, dataTransfer, editor) => {
  if (editor.editorProps.readOnly || editor.editorProps.disabled) {
    return 'handled';
  }

  if (window && window.__BRAFT_DRAGING__IMAGE__) {
    let nextEditorState = EditorState.forceSelection(
      editor.state.editorState,
      selectionState,
    );
    nextEditorState = ContentUtils.insertMedias(nextEditorState, [
      window.__BRAFT_DRAGING__IMAGE__.mediaData,
    ]);
    nextEditorState = ContentUtils.removeBlock(
      nextEditorState,
      window.__BRAFT_DRAGING__IMAGE__.block,
      nextEditorState.getSelection(),
    );

    window.__BRAFT_DRAGING__IMAGE__ = null;

    editor.lockOrUnlockEditor(true);
    editor.setValue(nextEditorState);

    return 'handled';
  }
  if (!dataTransfer || !dataTransfer.getText()) {
    return 'handled';
  }

  return 'not-handled';
};

export const handleFiles = (files, editor) => {
  const { pasteImage, validateFn, imagePasteLimit } = {
    ...editor.constructor.defaultProps.media,
    ...editor.editorProps.media,
  };

  if (pasteImage) {
    files.slice(0, imagePasteLimit).forEach((file) => {
      if (file && file.type.indexOf('image') > -1 && editor.braftFinder) {
        const validateResult = validateFn ? validateFn(file) : true;
        if (validateResult instanceof Promise) {
          validateResult.then(() => {
            editor.braftFinder.uploadImage(file, (image) => {
              if (editor.isLiving) {
                editor.setValue(
                  ContentUtils.insertMedias(editor.state.editorState, [image]),
                );
              }
            });
          });
        } else if (validateResult) {
          editor.braftFinder.uploadImage(file, (image) => {
            if (editor.isLiving) {
              editor.setValue(
                ContentUtils.insertMedias(editor.state.editorState, [image]),
              );
            }
          });
        }
      }
    });
  }

  if (files[0] && files[0].type.indexOf('image') > -1 && pasteImage) {
    return 'handled';
  }

  return 'not-handled';
};

export const droppedFilesHandlers = (selectionState, files, editor) => {
  if (
    editor.editorProps.handleDroppedFiles &&
    editor.editorProps.handleDroppedFiles(selectionState, files, editor) ===
      'handled'
  ) {
    return 'handled';
  }

  return handleFiles(files, editor);
};

export const pastedFilesHandlers = (files, editor) => {
  if (
    editor.editorProps.handlePastedFiles &&
    editor.editorProps.handlePastedFiles(files, editor) === 'handled'
  ) {
    return 'handled';
  }

  return handleFiles(files, editor);
};

export const copyHandlers = (event, editor) => {
  const blockMap = getFragmentFromSelection(editor.state.editorState);

  if (blockMap && blockMap.toArray) {
    try {
      const tempContentState = ContentState.createFromBlockArray(
        blockMap.toArray(),
      );
      const tempEditorState = EditorState.createWithContent(tempContentState);
      const clipboardData =
        event.clipboardData ||
        window.clipboardData ||
        event.originalEvent.clipboardData;

      tempEditorState.setConvertOptions(
        editor.state.editorState.convertOptions,
      );

      clipboardData.setData('text/html', tempEditorState.toHTML());
      clipboardData.setData('text/plain', tempEditorState.toText());

      event.preventDefault();
    } catch (error) {
      console.warn(error);
    }
  }
};

export const pastedTextHandlers = (text, html, editorState, editor) => {
  if (
    editor.editorProps.handlePastedText &&
    editor.editorProps.handlePastedText(text, html, editorState, editor) ===
      'handled'
  ) {
    return 'handled';
  }

  if (!html || editor.editorProps.stripPastedStyles) {
    return false;
  }

  const tempColors = ColorUtils.detectColorsFromHTMLString(html);

  editor.setState(
    {
      tempColors: [...editor.state.tempColors, ...tempColors]
        .filter((item) => editor.editorProps.colors.indexOf(item) === -1)
        .filter((item, index, array) => array.indexOf(item) === index),
    },
    () => {
      editor.setValue(ContentUtils.insertHTML(editorState, html, 'paste'));
    },
  );

  return 'handled';
};
