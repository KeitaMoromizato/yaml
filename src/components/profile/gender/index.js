import React from 'react';

import { formTextStyle, formWrapperStyle } from '../styles';

const style = Object.assign({}, formWrapperStyle, {
  width: '60px',
  float: 'left',
  borderLeft: 'none',
  height: '48px',
});

const textStyle = Object.assign({}, formTextStyle, {
  margin: 'auto',
  lineHeight: '48px',
  textAlign: 'center',
});

export default props => (
  <div style={style}>
    <p style={textStyle}>{props.gender}</p>
  </div>
);
