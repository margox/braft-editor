import React from 'react';
import PropTypes from 'prop-types';

import { showModal } from 'components/common/Modal';

import './style.scss';

const playViaModal = (title, component, language) =>
  showModal({
    title,
    component,
    language,
    showFooter: false,
  });

const typeIconsMap = {
  video: 'bfi-film',
  audio: 'bfi-music',
  embed: 'bfi-code',
};

const PlayerModal = ({
  title,
  type,
  language,
  name,
  url,
  poster,
  children,
  onRemove,
}) => {
  return (
    <div className={`bf-player-holder ${type}`}>
      <div className="icon-badge">
        <i className={typeIconsMap[type]} />
        <span className="text">{language.media[type]}</span>
      </div>
      <button onMouseDown={onRemove} className="button-remove">
        <i className="bfi-close" />
      </button>
      <button
        onMouseDown={() =>
          playViaModal(name ? `${title}:${name}` : title, children, language)
        }
        className="button-play"
      >
        <i className="bfi-play_arrow" />
      </button>
      {name ? <h5 className="bf-name">{name}</h5> : null}
      <h6 className="bf-url">{url}</h6>
      {poster ? (
        <div
          className="bf-poster"
          style={{ backgroundImage: `url(${poster})` }}
        />
      ) : null}
    </div>
  );
};

PlayerModal.propTypes = {
  title: PropTypes.any,
  type: PropTypes.any,
  language: PropTypes.any,
  name: PropTypes.any,
  url: PropTypes.any,
  poster: PropTypes.any,
  children: PropTypes.any,
  onRemove: PropTypes.any,
};

export default PlayerModal;
