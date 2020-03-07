/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import { ContentUtils } from 'braft-utils';

import PlayerModal from 'components/business/PlayerModal';

import './style.scss';

const Audio = ({ mediaData, language, editor, editorState, block }) => {
  const { url, name, meta } = mediaData;
  const removeAudio = () => {
    editor.setValue(ContentUtils.removeBlock(editorState, block));
  };

  return (
    <div className="bf-audio-wrap">
      <PlayerModal
        type="audio"
        onRemove={removeAudio}
        poster={meta ? meta.poster || '' : ''}
        language={language}
        url={url}
        name={name}
        title={language.audioPlayer.title}
      >
        <div className="bf-audio-player">
          <audio controls src={url} />
        </div>
      </PlayerModal>
    </div>
  );
};

Audio.propTypes = {
  mediaData: PropTypes.any,
  language: PropTypes.any,
  editor: PropTypes.any,
  editorState: PropTypes.any,
  block: PropTypes.any,
};

export default Audio;
