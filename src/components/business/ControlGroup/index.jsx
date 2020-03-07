import React from 'react';
import PropTypes from 'prop-types';

const ControlGroup = ({ children }) => (
  <div className="control-item-group">{children}</div>
);

ControlGroup.propTypes = {
  children: PropTypes.any,
};

export default ControlGroup;
