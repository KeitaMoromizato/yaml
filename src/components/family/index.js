import React from 'react';

export default props => (
  <div>
    <div>{props.dependant}人</div>
    <div>
      <div>{props.spouse ? '有' : '無'}</div>
      <div>{props.supportingDuty ? '有' : '無'}</div>
    </div>
  </div>
);
