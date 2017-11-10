'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    const { row } = this.props

    return (
      <tr className='row'>
        {
          row.map((cell, index) =>
            <Cell
              key={index}
              cell={cell}
              onChange={this.props.onChange.bind(null, index)}
              onFocus={this.props.onFocus.bind(null, index)}
            />
          )
        }
      </tr>
    )
  }
}
