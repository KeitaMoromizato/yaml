import React from 'react';

const furiganaStyle = {
  width: '100%',
  borderBottom: '1px dotted #888',
  fontSize: '0.6em',
  padding: '4px',
};

const formStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '1.6em',
};

const formTextStyle = {
  margin: 0,
};

const formWrapperStyle = {
  marginTop: '8px',
  border: '1px solid #000',
  borderBottom: 'none',
};

const formLabelStyle = {
  fontSize: '0.6em',
};

export default props => (
  <div style={formWrapperStyle}>
    <div style={furiganaStyle}>ふりがな  {props.kana}</div>
    <div style={formStyle}>
      <p style={formTextStyle}><span style={formLabelStyle}>氏名</span>  {props.name}</p>
    </div>
  </div>
);
