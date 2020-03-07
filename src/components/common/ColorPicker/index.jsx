import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import './style.scss';

const ColorPicker = (props) => (
  <div className="bf-colors-wrap">
    <ul className="bf-colors">
      {props.presetColors.map((item) => {
        const className =
          props.color && item.toLowerCase() === props.color.toLowerCase()
            ? 'color-item active'
            : 'color-item';
        return (
          <li
            role="presentation"
            key={uuidv4()}
            title={item}
            className={className}
            style={{ color: item }}
            data-color={item.replace('#', '')}
            onClick={(e) => {
              props.onChange(e.currentTarget.dataset.color, true);
            }}
          />
        );
      })}
    </ul>
  </div>
);

ColorPicker.propTypes = {
  onChange: PropTypes.any,
  color: PropTypes.any,
  presetColors: PropTypes.any,
  hooks: PropTypes.any,
  editorState: PropTypes.any,
  colorPicker: PropTypes.any,
  autoHide: PropTypes.any,
  theme: PropTypes.any,
  getContainerNode: PropTypes.any,
  enableBackgroundColor: PropTypes.any,
};

export default ColorPicker;
