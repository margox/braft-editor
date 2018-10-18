import React from 'react'

export default (props) => {

  if (React.Fragment) {
    return <React.Fragment>{props.children}</React.Fragment>
  } else {
    return <div className="control-item-group">{props.children}</div>
  }

}