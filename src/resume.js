import React from 'react';

const style = {
  color: 'blue'
};

export default props => (
  <div>
    <h1 style={style}>{props.title}</h1>
  </div>
);
