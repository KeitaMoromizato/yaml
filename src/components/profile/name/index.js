import React from 'react';

import { furiganaStyle, formStyle, formTextStyle, formWrapperStyle, formLabelStyle } from '../styles';

export default props => (
  <div style={formWrapperStyle}>
    <div style={furiganaStyle}>ふりがな&#09;{props.kana}</div>
    <div style={formStyle}>
      <p style={formTextStyle}><span style={formLabelStyle}>氏名</span>{props.name}</p>
    </div>
  </div>
);
