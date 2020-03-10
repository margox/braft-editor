import React from 'react';
import PropTypes from 'prop-types';

const viewLink = (event, link) => {
  // When pressing the Ctrl / command key, click to open the url in the link text
  if (event.getModifierState('Control') || event.getModifierState('Meta')) {
    const tempLink = document.createElement('a');
    tempLink.href = link;
    tempLink.target = event.currentTarget.target;
    tempLink.click();
  }
};

const Link = (props) => {
  const { children, entityKey, contentState } = props;
  const { href, target } = contentState.getEntity(entityKey).getData();

  return (
    <span className="bf-link-wrap">
      <a
        onClick={(event) => viewLink(event, href)}
        className="bf-link"
        href={href}
        target={target}
      >
        {children}
      </a>
    </span>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  entityKey: PropTypes.any,
  contentState: PropTypes.any,
};

export default Link;
