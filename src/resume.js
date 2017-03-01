import React from 'react';

import Profile from './components/profile';
import List from './components/list';
import Appeals from './components/appeals';
import CommuteTime from './components/commuteTime';
import Family from './components/family';
import Options from './components/options';

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
  background: '#fff',
};

const bottomBlock = {
  marginTop: '48px',
  boxSizing: 'border-box',
};

const appealBlock = {
  boxSizing: 'border-box',
  border: '1px solid #000',
  height: '128px',
};

const familyBlock = {
  boxSizing: 'border-box',
  border: '1px solid #000',
  height: '128px',
};

export default props => (
  <div style={pageStyle}>
    <div style={blockStyle}>
      <Profile {...props.profile} />
      <List items={props.careers.slice(0, 16)} rowCount={16} title="学歴・経歴" />
    </div>

    <div style={blockStyle}>
      <List items={props.careers.slice(16)} rowCount={6} title="学歴・経歴" />

      <div style={bottomBlock}>
        <List items={props.licenses} rowCount={7} title="免許・資格" />
        <div style={appealBlock}>
          <Appeals appeals={props.appeals} />
        </div>
        <div style={familyBlock}>
          <CommuteTime {...props.commuteTime} />
          <Family {...props.family} />
        </div>

        <Options options={props.options} />
      </div>
    </div>
  </div>
);
