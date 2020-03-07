import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { getHeadings } from 'configs/maps';
import DropDown from 'components/common/DropDown';

import './style.scss';

const Headings = (props) => {
  const dropDownInstance = React.createRef();

  const headings = getHeadings(props.language).filter(
    (item) => props.headings.indexOf(item.key) !== -1,
  );
  const currentHeadingIndex = headings.findIndex(
    (item) => item.command === props.current,
  );
  const caption = headings[currentHeadingIndex]
    ? headings[currentHeadingIndex].title
    : props.language.controls.normal;

  return (
    <DropDown
      caption={caption}
      autoHide
      getContainerNode={props.getContainerNode}
      title={props.language.controls.headings}
      arrowActive={currentHeadingIndex === 0}
      ref={dropDownInstance}
      className="control-item dropdown headings-dropdown"
    >
      <ul className="menu">
        {headings.map((item) => {
          const isActive = props.current === item.command;
          return (
            <li
              key={uuidv4()}
              role="presentation"
              className={`menu-item${isActive ? ' active' : ''}`}
              onClick={() => {
                props.onChange(item.command, item.type);
                dropDownInstance.hide();
              }}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </DropDown>
  );
};

Headings.propTypes = {
  headings: PropTypes.any,
  current: PropTypes.any,
  onChange: PropTypes.any,
  editorState: PropTypes.any,
  defaultCaption: PropTypes.any,
  getContainerNode: PropTypes.any,
  language: PropTypes.any,
};

export default Headings;
