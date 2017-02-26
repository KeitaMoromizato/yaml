import React from 'react';

const listStyle = {
  fontSize: '0.8em',
  paddingLeft: '16px',
  margin: 0,
  listStyleType: 'none',
};

const labelStyle = {
  fontSize: '0.4em',
  padding: '4px 0 4px 4px',
  margin: 0,
};

const wrapperStyle = {
  height: '100%',
  width: '312px',
  borderRight: '1px solid #000',
  boxSizing: 'border-box',
};

export default props => (
  <div style={wrapperStyle}>
    <p style={labelStyle}>志望動機・アピールポイントなど</p>
    <ul style={listStyle}>
      {props.appeals.map(appeal => <li>{appeal}</li>)}
    </ul>
  </div>
);
