import React from 'react'
import { showModal } from 'components/common/Modal'
import './style.scss'

const playViaModal = (title, component, language) => showModal({
  title: title,
  component: component,
  language: language,
  footer: null
})

// const typeIconsMap = {
//   'video': 'bfi-film',
//   'audio': 'bfi-music',
//   'embed': 'bfi-code',
// }

export default ({title, language, name, url, poster, children}) => {

  return (
    <div className="bf-player-holder">
      <button onClick={() => playViaModal(name ? `${title}:${name}` : title, children, language)} className="button-play">
        <i className="bfi-play_arrow"></i>
      </button>
      <h5>{name}</h5>
      <h6>{url}</h6>
      {poster ? (
        <div className="bf-poster">
          <img src={poster} alt={name} />
        </div>
      ) : null}
    </div>
  )

}