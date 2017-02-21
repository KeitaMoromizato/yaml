import React from 'react';

import Profile from './components/profile';

const pageStyle = {
  width: `${257 * 4}px`,
  height: `${182 * 4}px`,
};

const blockStyle = {
  width: `${257 * 2 - 34}px`,
  height: '100%',
  border: '1px solid #888',
  padding: '16px',
  float: 'left',
};


export default props => (
  <div style={pageStyle}>
    <div style={blockStyle}>
      <Profile {...props.profile} />
    </div>

    <div style={blockStyle}>
    </div>
  </div>
);
