'use strict';

import React from 'react';

export default class Cell extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    var rowIndex = this.props.rowIndex ;
    var columnIndex = this.props.columnIndex ;
    return (
      <td className='cell'>
        <input value={this.props.cell} onFocus={this.props.doFocus(rowIndex, columnIndex)} onChange={ev => this.props.doChange(rowIndex, columnIndex, ev)} />
      </td>
    )
  }
}
