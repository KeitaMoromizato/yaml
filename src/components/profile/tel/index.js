import React from 'react';

import { furiganaStyle, formTextStyle, formWrapperStyle } from '../styles';

const telLabelStyle = Object.assign({}, furiganaStyle, {
  margin: 0,
  borderBottom: 'none',
});

const telWrapperStyle = Object.assign({}, formWrapperStyle, {
  height: `${62}px`,
  lineHeight: `${62 - 16}px`,
});

export default props => (
  <div style={telWrapperStyle}>
    <p style={telLabelStyle}>電話</p>
    <p style={formTextStyle}>
      {props.tel}
    </p>
  </div>
);
