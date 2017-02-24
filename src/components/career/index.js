import React from 'react';

const careerTableStyle = {
  width: '100%',
  border: '1px solid #000',
  borderTop: 'none',
  boxSizing: 'border-box',
  borderCollapse: 'collapse',
};

const rowStyle = {
  height: '32px',
  borderBottom: '1px solid #000',
};

const cellStyle = {
  height: '32px',
  lineHeight: '32px',
  textAlign: 'center',
};

const yearCellStyle = Object.assign({}, cellStyle, {
  width: '64px',
  borderRight: '1px dotted #000',
});

const monthCellStyle = Object.assign({}, cellStyle, {
  width: '32px',
  borderRight: '1px solid #000',
});

const dataCellStyle = Object.assign({}, cellStyle, {
  textAlign: 'left',
  paddingLeft: '8px',
});

const Row = props => (
  <tr style={rowStyle}>
    <td style={yearCellStyle}>{props.year}</td>
    <td style={monthCellStyle}>{props.month}</td>
    <td style={dataCellStyle}>{props.content}</td>
  </tr>
);

export default (props = []) => (
  <table style={careerTableStyle}>
    <tbody>
      <tr style={rowStyle}>
        <th style={yearCellStyle}>年</th>
        <th style={monthCellStyle}>月</th>
        <th style={cellStyle}>学歴・経歴</th>
      </tr>

      {props.careers.map(carrer => <Row {...carrer} />)}

    </tbody>
  </table>
);

