import React from 'react';

const labelStyle = {
  fontSize: '0.4em',
  padding: '4px 0 4px 4px',
  margin: 0,
};

const wrapperStyle = {
  height: '100%',
  width: '104px',
  boxSizing: 'border-box',
  borderBottom: '1px solid #000',
};

export default props => (
  <div style={wrapperStyle}>
    <p style={labelStyle}>通勤時間</p>
    <p>{props.hour}時間{props.minutes}分</p>
  </div>
);
