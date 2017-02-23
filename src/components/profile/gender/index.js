import React from 'react';

import { formTextStyle, formWrapperStyle } from '../styles';

const style = Object.assign({}, formWrapperStyle, {
  WebkitFlexGrow: 2,
  display: 'inline-block',
  borderLeft: 'none',
  height: '32px',
});

const textStyle = Object.assign({}, formTextStyle, {
  margin: 'auto',
  lineHeight: '32px',
  textAlign: 'center',
  paddingLeft: 0,
});

export default props => (
  <div style={style}>
    <p style={textStyle}>{props.gender}</p>
  </div>
);
