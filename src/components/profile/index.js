import React from 'react';

import Name from './name';
import DateOfBirth from './dateOfBirth';
import Gender from './gender';
import Picture from './picture';

const wrapperStyle = {
  width: '100%',
};

const flexContainerStyle = {
  display: '-webkit-flex',
};

const leftStyle = {
  WebkitFlexGrow: 2,
  display: 'inline-block',
};

const rightStyle = {
  WebkitFlexGrow: 1,
  display: 'inline-block',
};

const titleStyle = {
  fontSize: '1.4em',
  fontWeight: 'normal',
  display: 'inline',
};

const dateStyle = {
  float: 'right',
  fontSize: '0.6em',
  margin: 0,
  lineHeight: '1.4em',
  height: '1.4em',
  vericalAlign: 'bottom',
};

const dateString = (d => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`)(new Date());

export default props => (
  <div style={wrapperStyle}>
    <div style={flexContainerStyle}>
      <div style={leftStyle}>
        <div>
          <h1 style={titleStyle}>履歴書</h1>
          <p style={dateStyle}>{dateString} 現在</p>
        </div>

        <Name {...props.name} />
        <div style={flexContainerStyle}>
          <DateOfBirth {...props.dateOfBirth} />
          <Gender gender={props.gender} />
        </div>
      </div>

      <div style={rightStyle}>
        <Picture />
      </div>
    </div>
  </div>
);
