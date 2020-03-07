import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ContentUtils } from 'braft-utils';

import DropDown from 'components/common/DropDown';

import './style.scss';

const toggleLineHeight = (event, props) => {
  let lineHeight = event.currentTarget.dataset.size;
  const hookReturns = props.hooks('toggle-line-height', lineHeight)(lineHeight);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(hookReturns)) {
    lineHeight = hookReturns;
  }

  props.editor.setValue(
    ContentUtils.toggleSelectionLineHeight(props.editorState, lineHeight),
  );
  props.editor.requestFocus();
  return true;
};

const LineHeight = (props) => {
  let caption = null;
  let currentLineHeight = null;
  const dropDownInstance = React.createRef();

  props.lineHeights.find((item) => {
    if (
      ContentUtils.selectionHasInlineStyle(
        props.editorState,
        `LINEHEIGHT-${item}`,
      )
    ) {
      caption = item;
      currentLineHeight = item;
      return true;
    }
    return false;
  });

  return (
    <DropDown
      autoHide
      caption={caption || props.defaultCaption}
      getContainerNode={props.getContainerNode}
      title={props.language.controls.lineHeight}
      ref={dropDownInstance}
      className="control-item dropdown bf-line-height-dropdown"
    >
      <ul className="bf-line-heights">
        {props.lineHeights.map((item) => {
          return (
            <li
              key={uuidv4()}
              role="presentation"
              className={item === currentLineHeight ? 'active' : null}
              data-size={item}
              onClick={(event) => {
                toggleLineHeight(event, props);
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

LineHeight.propTypes = {
  headings: PropTypes.any,
  lineHeights: PropTypes.any,
  current: PropTypes.any,
  onChange: PropTypes.any,
  editorState: PropTypes.any,
  defaultCaption: PropTypes.any,
  getContainerNode: PropTypes.any,
  language: PropTypes.any,
};

export default LineHeight;
