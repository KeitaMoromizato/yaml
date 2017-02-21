import React from 'react';

import Name from './name';

const wrapperStyle = {
  width: '100%'
};

const leftStyle = {
  width: `${120 * 3- 2}px`,
  display: 'inline-block',
};

const rightStyle = {
  width: `${120 - 2}px`,
  border: '1px solid #888',
  display: 'inline-block',
};

const titleStyle = {
  fontSize: '1.4em',
  fontWeight: 'normal',
  display: 'inline',
};

const dateStyle = {
  float: 'right',
  fontSize: '0.6em',
  margin: 0,
  lineHeight: '1.4em',
  height: '1.4em',
  vericalAlign: 'bottom',
};

const dateString = (d => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`)(new Date());

export default props => (
  <div style={wrapperStyle}>
    <div style={leftStyle}>
      <h1 style={titleStyle}>履歴書</h1>
      <p style={dateStyle}>{dateString} 現在</p>

      <Name {...props.name} />
    </div>

    <div style={rightStyle}>
    </div>
  </div>
);
