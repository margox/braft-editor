/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { ContentUtils } from 'braft-utils';

import PlayerModal from 'components/business/PlayerModal';

import './style.scss';

const Embed = ({ mediaData, language, editor, editorState, block }) => {
  const { name, url, meta } = mediaData;

  const removeEmbed = () => {
    editor.setValue(ContentUtils.removeBlock(editorState, block));
  };
  return (
    <div className="bf-embed-wrap">
      <PlayerModal
        type="embed"
        onRemove={removeEmbed}
        poster={meta ? meta.poster || '' : ''}
        language={language}
        url={url}
        name={name}
        title={language.videoPlayer.embedTitle}
      >
        <div
          className="bf-embed-player"
          dangerouslySetInnerHTML={{ __html: url }}
        />
      </PlayerModal>
    </div>
  );
};

Embed.propTypes = {
  mediaData: PropTypes.any,
  language: PropTypes.any,
  editor: PropTypes.any,
  editorState: PropTypes.any,
  block: PropTypes.any,
};

export default Embed;
