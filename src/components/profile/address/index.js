import React from 'react';

import { furiganaStyle, formStyle, formTextStyle, formWrapperStyle } from '../styles';

const postStyle = Object.assign({}, furiganaStyle, {
  borderBottom: 'none',
});

export default props => (
  <div style={formWrapperStyle}>
    <div style={furiganaStyle}>ふりがな&#09;{props.kana}</div>
    <div style={formStyle}>
      <p style={postStyle}>現住所&#09;〒&#09;{props.post}</p>
      <p style={formTextStyle}>{props.address}</p>
    </div>
  </div>
);
