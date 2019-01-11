import React from 'react'
import { showModal } from 'components/common/Modal'
import './style.scss'

const playViaModal = (title, component, language) => showModal({
  title: title,
  component: component,
  language: language,
  showFooter: false
})

const typeIconsMap = {
  'video': 'bfi-film',
  'audio': 'bfi-music',
  'embed': 'bfi-code'
}

export default ({title, type, language, name, url, poster, children, onRemove}) => {

  return (
    <div className={`bf-player-holder ${type}`}>
      <div className="icon-badge">
        <i className={typeIconsMap[type]}></i>
        <span className="text">{language.media[type]}</span>
      </div>
      <button onMouseDown={onRemove} className="button-remove">
        <i className="bfi-close"></i>
      </button>
      <button onMouseDown={() => playViaModal(name ? `${title}:${name}` : title, children, language)} className="button-play">
        <i className="bfi-play_arrow"></i>
      </button>
      {name ? <h5 className="bf-name">{name}</h5> : null}
      <h6 className="bf-url">{url}</h6>
      {poster ? <div className="bf-poster" style={{backgroundImage: `url(${poster})`}}></div> : null}
    </div>
  )

}