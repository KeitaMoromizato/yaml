import React from 'react';

import { furiganaStyle, formTextStyle, formWrapperStyle } from '../styles';

const telLabelStyle = Object.assign({}, furiganaStyle, {
  margin: 0,
  borderBottom: 'none',
});

const telWrapperStyle = Object.assign({}, formWrapperStyle, {
  height: `${53}px`,
  lineHeight: `${53 - 16}px`,
  borderLeft: 'none',
});

const telTextStyle = Object.assign({}, formTextStyle, {
  textAlign: 'center',
});

export default props => (
  <div style={telWrapperStyle}>
    <p style={telLabelStyle}>電話</p>
    <p style={telTextStyle}>
      {props.tel}
    </p>
  </div>
);
