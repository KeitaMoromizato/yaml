import React from 'react';

import Name from './name';
import DateOfBirth from './dateOfBirth';
import Gender from './gender';
import Picture from './picture';
import Address from './address';
import Tel from './tel';

const wrapperStyle = {
  width: '100%',
  boxSizing: 'border-box',
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

const headerContainerStyle = {
  height: '48px',
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
  lineHeight: '48px',
  height: '48px',
};

const dateString = (d => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`)(new Date());

export default props => (
  <div style={wrapperStyle}>
    <div style={flexContainerStyle}>
      <div style={leftStyle}>
        <div style={headerContainerStyle}>
          <h1 style={titleStyle}>履歴書</h1>
          <p style={dateStyle}>{dateString} 現在</p>
        </div>

        <Name {...props.name} />
        <div style={flexContainerStyle}>
          <DateOfBirth {...props.dateOfBirth} />
          <Gender gender={props.gender} />
        </div>

        <Address {...props.address} />
        <Address {...props.subAddress} />
      </div>

      <div style={rightStyle}>
        <Picture {...props.picture} />
        <Tel tel={props.tel} />
        <Tel tel={props.subTel} />
      </div>
    </div>
  </div>
);
