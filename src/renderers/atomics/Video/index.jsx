/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import { ContentUtils } from 'braft-utils';

import PlayerModal from 'components/business/PlayerModal';

import './style.scss';

const Video = ({ mediaData, language, editor, editorState, block }) => {
  const { url, name, meta } = mediaData;
  const { poster = '' } = meta;

  const removeVideo = () => {
    editor.setValue(ContentUtils.removeBlock(editorState, block));
  };

  return (
    <div className="bf-video-wrap">
      <PlayerModal
        type="video"
        onRemove={removeVideo}
        poster={poster}
        language={language}
        url={url}
        name={name}
        title={language.videoPlayer.title}
      >
        <div className="bf-video-player">
          <video controls poster={poster}>
            <source src={url} />
          </video>
        </div>
      </PlayerModal>
    </div>
  );
};

Video.propTypes = {
  mediaData: PropTypes.any,
  language: PropTypes.any,
  editor: PropTypes.any,
  editorState: PropTypes.any,
  block: PropTypes.any,
};

export default Video;
