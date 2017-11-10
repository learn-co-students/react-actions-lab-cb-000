'use strict';

function addColumn (e) {
  e.preventDefault();

	const x = this.state.table.map(function(row) {
    return row.push('');
  })

  debugger
  this.setState({
    table: updatedTable
  })
}

function addRow (e) {
	
}

function changeCell (rowIndex, columnIndex, e) {
  
}

function focusCell (rowIndex, columnIndex) {
  
}

function blurCell () {
  
}

function removeRow(e) {
 
}

function removeColumn (e) {
  
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
