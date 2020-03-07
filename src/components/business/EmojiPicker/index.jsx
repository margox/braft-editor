import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ContentUtils } from 'braft-utils';

import DropDown from 'components/common/DropDown';

import './style.scss';

const insertEmoji = (event, props) => {
  let emoji = event.currentTarget.dataset.emoji;
  const hookReturns = props.hooks('insert-emoji', emoji)(emoji);

  if (hookReturns === false) {
    return false;
  }

  if (typeof hookReturns === 'string') {
    emoji = hookReturns;
  }

  props.editor.setValue(ContentUtils.insertText(props.editorState, emoji));
  props.editor.requestFocus();

  return true;
};

const EmojiPicker = (props) => {
  return (
    <DropDown
      caption={props.defaultCaption}
      autoHide
      showArrow={false}
      getContainerNode={props.getContainerNode}
      title={props.language.controls.emoji}
      className="control-item dropdown bf-emoji-dropdown"
    >
      <div className="bf-emojis-wrap">
        <ul className="bf-emojis">
          {props.emojis.map((item) => {
            return (
              <li
                key={uuidv4()}
                data-emoji={item}
                onClick={(event) => insertEmoji(event, props)}
                role="presentation"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </DropDown>
  );
};

EmojiPicker.propTypes = {
  defaultCaption: PropTypes.any,
  getContainerNode: PropTypes.any,
  emojis: PropTypes.any,
  language: PropTypes.any,
};

export default EmojiPicker;
