'use strict';

import React from 'react';
import actions from '../actions';
import Table from './Table';

export default class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      table: [[' ']],
      focused: null
    };
    this.addColumn = actions.addColumn.bind(this) ;
    this.addRow = actions.addRow.bind(this) ;
    this.removeColumn = actions.removeColumn.bind(this);
    this.removeRow = actions.removeRow.bind(this);
    this.handleChange = actions.changeCell.bind(this);
    this.handleFocus = actions.focusCell.bind(this);
    this.handleBlur = actions.blurCell.bind(this);
  }

  render () {
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button onClick={event => this.addColumn(event)}>Add Column</button>
          {' '}
          <button onClick={event => this.addRow(event)}>Add Row</button>
          {' '}
          <button onClick={event => this.removeColumn(event)} >Remove Column</button>
          {' '}
          <button onClick={event => this.removeRow(event)} >Remove Row</button>
        </div>

        <Table cells={this.state.table} doBlur={this.handleBlur} doFocus={this.handleFocus} doChange={this.handleChange} />

        <div className='spreadsheet__focused' id="focused">
        </div>
      </div>
    );
  }
}
//<Table cells={this.state.table} onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange} />
