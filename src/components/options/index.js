import React from 'react';

const renderRow = row => (
  <tr>
    <td>{row}</td>
  </tr>
);

export default props => (
  <div>
    <table>
      <tbody>
        <tr>
          <th>本人希望記入欄</th>
        </tr>
      </tbody>

      {props.options.map(text => renderRow(text))}
    </table>
  </div>
);
