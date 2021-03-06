import React from 'react';

import { formStyle, formTextStyle, formWrapperStyle, formLabelStyle } from '../styles';

const dateOfBirthFormStyle = Object.assign({}, formWrapperStyle, {
  height: '32px',
  WebkitFlexGrow: 2,
  display: 'inline-block',
});

const dateOfBirthTextStyle = Object.assign({}, formTextStyle, {
  lineHeight: '32px',
});

const culcOld = (birth) => {
  const now = new Date();
  const year = now.getFullYear() - birth.year;

  const beforeBirthDay = (now.getMonth() + 1 < birth.month) ||
    ((now.getMonth() + 1 === birth.month) && (now.getDate() < birth.date));

  return beforeBirthDay ? year - 1 : year;
};

export default (props) => {
  const birthText = `${props.year}年${props.month}月${props.date}日 (満${culcOld(props)}才)`;

  return (
    <div style={dateOfBirthFormStyle}>
      <div style={formStyle}>
        <p style={dateOfBirthTextStyle}><span style={formLabelStyle}>生年月日</span>{birthText}</p>
      </div>
    </div>
  );
};
