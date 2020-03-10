import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ContentUtils } from 'braft-utils';

import DropDown from 'components/common/DropDown';

import './style.scss';

const toggleLetterSpacing = (event, props) => {
  let letterSpacing = event.currentTarget.dataset.size;
  const hookReturns = props.hooks(
    'toggle-letter-spacing',
    letterSpacing,
  )(letterSpacing);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(hookReturns)) {
    letterSpacing = hookReturns;
  }

  props.editor.setValue(
    ContentUtils.toggleSelectionLetterSpacing(props.editorState, letterSpacing),
  );
  props.editor.requestFocus();
  return true;
};

const LetterSpacing = (props) => {
  let caption = null;
  let currentLetterSpacing = null;
  let dropDownInstance = null;

  props.letterSpacings.find((item) => {
    if (
      ContentUtils.selectionHasInlineStyle(
        props.editorState,
        `LETTERSPACING-${item}`,
      )
    ) {
      caption = item;
      currentLetterSpacing = item;
      return true;
    }
    return false;
  });

  return (
    <DropDown
      autoHide
      caption={caption || props.defaultCaption}
      getContainerNode={props.getContainerNode}
      title={props.language.controls.letterSpacing}
      // eslint-disable-next-line no-return-assign
      ref={(instance) => (dropDownInstance = instance)}
      className="control-item dropdown bf-letter-spacing-dropdown"
    >
      <ul className="bf-letter-spacings">
        {props.letterSpacings.map((item) => {
          return (
            <li
              key={uuidv4()}
              role="presentation"
              className={item === currentLetterSpacing ? 'active' : null}
              data-size={item}
              onClick={(event) => {
                toggleLetterSpacing(event, props);
                dropDownInstance.hide();
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </DropDown>
  );
};

LetterSpacing.propTypes = {
  headings: PropTypes.any,
  letterSpacings: PropTypes.any,
  current: PropTypes.any,
  onChange: PropTypes.any,
  editorState: PropTypes.any,
  defaultCaption: PropTypes.any,
  getContainerNode: PropTypes.any,
  language: PropTypes.any,
};

export default LetterSpacing;
