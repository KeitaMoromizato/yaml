import React from 'react';

import Profile from './components/profile';
import List from './components/list';

const pageStyle = {
  width: `${257 * 4}px`,
  height: `${182 * 4}px`,
  background: '#fff',
};

const blockStyle = {
  width: `${(257 * 2) - 34}px`,
  height: '100%',
  border: '1px solid #888',
  padding: '16px',
  float: 'left',
};

const appealBlock = {
  marginTop: '48px',
};

export default props => (
  <div style={pageStyle}>
    <div style={blockStyle}>
      <Profile {...props.profile} />
      <List items={props.careers.slice(0, 16)} rowCount={16} title="学歴・経歴" />
    </div>

    <div style={blockStyle}>
      <List items={props.careers.slice(16)} rowCount={6} title="学歴・経歴" />

      <div style={appealBlock}>
        <List items={props.licenses} rowCount={7} title="免許・資格" />
      </div>
    </div>
  </div>
);
