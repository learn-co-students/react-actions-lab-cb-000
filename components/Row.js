'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    return(
      <tr className='row'>
      {
        this.props.row.map((cell,i) => <Cell cell={cell} key={i} onChange={this.props.onChange.bind(null,i)}
        onFocus={this.props.onFocus.bind(null,i)} />)
      }
      </tr>);
  }
}
