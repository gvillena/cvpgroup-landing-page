import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ScrollLink } from 'react-scroll';

const Link = (props) => {
  return (
    <ReactRouterLink {...props}>
      {props.children}
    </ReactRouterLink>
  )
}

export default ScrollLink(Link);