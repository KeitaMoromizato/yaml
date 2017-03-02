import React from 'react';
import { readFileSync } from 'fs';

const pictureContainerStyle = {
  height: `${48 + 80}px`,
  display: '-webkit-flex',
  WebkitJustifyContent: 'center',
  alignItems: 'center',
};

const pictureStyle = {
  width: `${80}px`,
  height: `${80}px`,
};

const noPictureStyle = {
  width: `${80}px`,
  height: `${80}px`,
  border: '1px dotted #000',
  boxSizing: 'border-box',
};

export default props => (
  <div style={pictureContainerStyle}>
    {props.path ?
      <img src={`data:image/png;base64, ${readFileSync(props.path).toString('base64')}`} alt="" style={pictureStyle} />
      : <div style={noPictureStyle} />
    }
  </div>
);
