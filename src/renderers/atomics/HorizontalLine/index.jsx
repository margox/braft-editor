import React from 'react';
import PropTypes from 'prop-types';
import { ContentUtils } from 'braft-utils';

import './style.scss';

const HorizontalLine = ({ editorState, block, editor }) => {
  const removeHorizontalLine = () => {
    editor.setValue(ContentUtils.removeBlock(editorState, block));
  };

  return (
    <div className="bf-hr">
      <div className="bf-media-toolbar">
        <a role="presentation" onClick={removeHorizontalLine}>
          &#xe9ac;
        </a>
      </div>
    </div>
  );
};

HorizontalLine.propTypes = {
  editor: PropTypes.any,
  editorState: PropTypes.any,
  block: PropTypes.any,
};

export default HorizontalLine;
