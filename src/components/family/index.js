import React from 'react';

const wrapperStyle = {
  height: '80px',
  width: '100%',
  display: '-webkit-flex',
  WebkitFlexWrap: 'wrap',
};

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

const fullStyle = {
  width: '100%',
  borderBottom: '1px solid #000',
};

const smallStyle = {
  width: '50%',
};

export default props => (
  <div style={wrapperStyle}>
    <div style={fullStyle}>
      <p style={labelStyle}>扶養家族</p>
      <p style={formTextStyle}>{props.dependant}人</p>
    </div>
    <div style={smallStyle}>
      <p style={labelStyle}>配偶者</p>
      <p style={formTextStyle}>{props.spouse ? '有' : '無'}</p>
    </div>
    <div style={smallStyle}>
      <p style={labelStyle}>配偶者の不要義務</p>
      <p style={formTextStyle}>{props.supportingDuty ? '有' : '無'}</p>
    </div>
  </div>
);
