import React from 'react';

import { furiganaStyle, formStyle, formTextStyle, formWrapperStyle } from '../styles';

const postStyle = Object.assign({}, furiganaStyle, {
  borderBottom: 'none',
  margin: 0,
});

const addressFormStyle = Object.assign({}, formStyle, {
  height: '36px',
  padding: '4px',
});

const addressTextStyle = Object.assign({}, formTextStyle, {
  fontSize: '0.8em',
});

export default (props = {}) => (
  <div style={formWrapperStyle}>
    <div style={furiganaStyle}>ふりがな&#09;{props.kana}</div>
    <div style={addressFormStyle}>
      <p style={postStyle}>現住所&#09;〒&#09;{props.post}</p>
      <p style={addressTextStyle}>{props.address}</p>
    </div>
  </div>
);
