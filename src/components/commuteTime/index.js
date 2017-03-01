import React from 'react';

const labelStyle = {
  fontSize: '0.4em',
  padding: '4px 0 4px 4px',
  margin: 0,
};

const formTextStyle = {
  margin: 0,
  marginRight: '16px',
  textAlign: 'right',
};

const wrapperStyle = {
  height: '40px',
  width: '100%',
  boxSizing: 'border-box',
  borderBottom: '1px solid #000',
};

export default props => (
  <div style={wrapperStyle}>
    <p style={labelStyle}>通勤時間</p>
    <p style={formTextStyle}>{props.hour || '0'}時間&#09;{props.minutes}分</p>
  </div>
);
