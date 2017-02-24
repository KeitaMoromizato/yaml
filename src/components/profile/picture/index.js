import React from 'react';

const pictureContainerStyle = {
  height: `${48 + 80}px`,
  display: '-webkit-flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const pictureStyle = {
  width: `${40 * 2}px`,
  height: `${36 * 2}px`,
  border: '1px dotted #000',
  boxSizing: 'border-box',
};

export default props => (
  <div style={pictureContainerStyle}>
    <div style={pictureStyle}>
    </div>
  </div>
);
