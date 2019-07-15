'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    return(<table className='table' onBlur={this.props.onBlur} onFocus={this.props.onFocus} onChange={this.props.onChange}>
           <tbody>
           {this.props.table.map((row,i) => <Row key={i} row={row} onChange={this.props.onChange.bind(null,i)}
            onFocus={this.props.onFocus.bind(null,i)}/>)}
           </tbody></table>);
  }
}
