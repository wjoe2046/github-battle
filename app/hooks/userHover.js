import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

export default function useHover() {
  const [hovering, setHovering] = React.useState(false);

  const onMouseOver = () => setHovering(true);
  const onMouseOut = () => setHovering(false);

  return [
    hovering,
    {
      onMouseOut,
      onMouseOver,
    },
  ];
}
