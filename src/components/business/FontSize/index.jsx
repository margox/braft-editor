import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ContentUtils } from 'braft-utils';

import DropDown from 'components/common/DropDown';

import './style.scss';

const toggleFontSize = (event, props) => {
  let fontSize = event.currentTarget.dataset.size;
  const hookReturns = props.hooks('toggle-font-size', fontSize)(fontSize);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(fontSize)) {
    fontSize = hookReturns;
  }

  props.editor.setValue(
    ContentUtils.toggleSelectionFontSize(props.editorState, fontSize),
  );
  props.editor.requestFocus();
  return true;
};

const FontSize = (props) => {
  let caption = null;
  let currentFontSize = null;
  let dropDownInstance = null;

  props.fontSizes.find((item) => {
    if (
      ContentUtils.selectionHasInlineStyle(
        props.editorState,
        `FONTSIZE-${item}`,
      )
    ) {
      caption = item;
      currentFontSize = item;
      return true;
    }
    return false;
  });

  return (
    <DropDown
      autoHide
      caption={caption || props.defaultCaption}
      getContainerNode={props.getContainerNode}
      title={props.language.controls.fontSize}
      // eslint-disable-next-line no-return-assign
      ref={(instance) => (dropDownInstance = instance)}
      className="control-item dropdown bf-font-size-dropdown"
    >
      <ul className="bf-font-sizes">
        {props.fontSizes.map((item) => {
          return (
            <li
              key={uuidv4()}
              role="presentation"
              className={item === currentFontSize ? 'active' : null}
              data-size={item}
              onClick={(event) => {
                toggleFontSize(event, props);
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

FontSize.propTypes = {
  fontSizes: PropTypes.any,
  editorState: PropTypes.any,
  defaultCaption: PropTypes.any,
  getContainerNode: PropTypes.any,
  language: PropTypes.any,
};

export default FontSize;
