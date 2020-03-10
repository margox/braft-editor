import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ContentUtils } from 'braft-utils';

import DropDown from 'components/common/DropDown';

import './style.scss';

const toggleFontFamily = (event, props) => {
  let fontFamilyName = event.currentTarget.dataset.name;
  const hookReturns = props.hooks('toggle-font-family', fontFamilyName)(
    fontFamilyName,
    props.fontFamilies,
  );

  if (hookReturns === false) {
    return false;
  }

  if (typeof hookReturns === 'string') {
    fontFamilyName = hookReturns;
  }

  props.editor.setValue(
    ContentUtils.toggleSelectionFontFamily(props.editorState, fontFamilyName),
  );
  props.editor.requestFocus();
  return true;
};

const FontFamily = (props) => {
  let caption = null;
  let currentIndex = null;
  let dropDownInstance = null;

  props.fontFamilies.find((item, index) => {
    if (
      ContentUtils.selectionHasInlineStyle(
        props.editorState,
        `FONTFAMILY-${item.name}`,
      )
    ) {
      caption = item.name;
      currentIndex = index;
      return true;
    }
    return false;
  });

  return (
    <DropDown
      caption={caption || props.defaultCaption}
      getContainerNode={props.getContainerNode}
      title={props.language.controls.fontFamily}
      autoHide
      arrowActive={currentIndex === 0}
      // eslint-disable-next-line no-return-assign
      ref={(instance) => (dropDownInstance = instance)}
      className="control-item dropdown font-family-dropdown"
    >
      <ul className="menu">
        {props.fontFamilies.map((item, index) => {
          return (
            <li
              key={uuidv4()}
              role="presentation"
              className={`menu-item ${index === currentIndex ? 'active' : ''}`}
              data-name={item.name}
              onClick={(event) => {
                toggleFontFamily(event, props);
                dropDownInstance.hide();
              }}
            >
              <span style={{ fontFamily: item.family }}>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </DropDown>
  );
};

FontFamily.propTypes = {
  fontFamilies: PropTypes.any,
  editorState: PropTypes.any,
  defaultCaption: PropTypes.any,
  getContainerNode: PropTypes.any,
  language: PropTypes.any,
};

export default FontFamily;
