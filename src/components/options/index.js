import React from 'react';

const tableStyle = {
  width: '100%',
  border: '1px solid #000',
  boxSizing: 'border-box',
  borderCollapse: 'collapse',
  fontSize: '0.6em',
};

const rowStyle = {
  height: '17px',
  borderBottom: '1px solid #000',
};

const cellStyle = {
  height: '17px',
  lineHeight: '17px',
  textAlign: 'left',
  paddingLeft: '4px',
};

const Row = props => (
  <tr style={rowStyle}>
    <td style={cellStyle}>{props.row}</td>
  </tr>
);

export default props => (
  <table style={tableStyle}>
    <tbody>
      <tr style={rowStyle}>
        <th style={cellStyle}>本人希望記入欄</th>
      </tr>
      {Array.from(Array(props.rowCount)).map((_, i) => <Row key={i} row={props.options[i]} />)}

    </tbody>
  </table>
);
