'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    return (
      <tr className='row'>
        {
          this.props.row.map((cell, index) => {
            return <Cell key={index} onChange={this.props.onChange.bind(null, index)} cell={cell} onFocus={this.props.onFocus.bind(null, index)} />
          })
        }
      </tr>
    )
  }
}
