import React from 'react';

const pictureContainerStyle = {
  padding: 'auto',
  marginTop: '35px',
  height: '80px',
};

const pictureStyle = {
  width: `${40 * 2}px`,
  height: `${36 * 2}px`,
  border: '1px dotted #000',
  margin: 'auto',
  boxSizing: 'border-box',
};

export default props => (
  <div style={pictureContainerStyle}>
    <div style={pictureStyle}>
    </div>
  </div>
);
