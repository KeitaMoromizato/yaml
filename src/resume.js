import React from 'react';

const pageStyle = {
  width: `${257 * 3}px`,
  height: `${182 * 3}px`,
  border: '1px solid #888',
};

export default props => (
  <div style={pageStyle}>
    <h1 >{props.title}</h1>
  </div>
);
