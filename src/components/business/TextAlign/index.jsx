/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ContentUtils } from 'braft-utils';
import mergeClassNames from '@maximusft/mergeclassnames';

import ControlGroup from 'components/business/ControlGroup';

class TextAlign extends React.Component {
  state = {
    currentAlignment: undefined,
  };

  UNSAFE_componentWillReceiveProps(next) {
    this.setState({
      currentAlignment: ContentUtils.getSelectionBlockData(
        next.editorState,
        'textAlign',
      ),
    });
  }

  setAlignment = (event) => {
    let { alignment } = event.currentTarget.dataset;
    const hookReturns = this.props.hooks(
      'toggle-text-alignment',
      alignment,
    )(alignment);

    if (this.props.textAligns.indexOf(hookReturns) > -1) {
      alignment = hookReturns;
    }

    this.props.editor.setValue(
      ContentUtils.toggleSelectionAlignment(this.props.editorState, alignment),
    );
    this.props.editor.requestFocus();
  };

  render() {
    const textAlignmentTitles = [
      this.props.language.controls.alignLeft,
      this.props.language.controls.alignCenter,
      this.props.language.controls.alignRight,
      this.props.language.controls.alignJustify,
    ];

    return (
      <ControlGroup>
        {this.props.textAligns.map((item, index) => (
          <button
            type="button"
            key={uuidv4()}
            data-title={textAlignmentTitles[index]}
            data-alignment={item}
            className={mergeClassNames(
              'control-item button',
              item === this.state.currentAlignment && 'active',
            )}
            onClick={this.setAlignment}
          >
            <i className={`bfi-align-${item}`} />
          </button>
        ))}
      </ControlGroup>
    );
  }
}

TextAlign.propTypes = {
  textAligns: PropTypes.any,
  editor: PropTypes.any,
  language: PropTypes.any,
  hooks: PropTypes.any,
  editorState: PropTypes.any,
};

export default TextAlign;
