'use strict';

function addColumn (ev) {
  ev.preventDefault()
  var newTable = this.state.table
  for(var i = 0; i < newTable.length; i++){
    newTable[i].push("")
  }
  this.setState({
    table: newTable
  })
}

function addRow (ev) {
  ev.preventDefault()
  var newTable = this.state.table
  var row = []
  for(var i = 0; i < newTable[0].length; i ++){
    row.push("")
  }
  newTable.push(row)
  this.setState({
    table: newTable
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  var newTable = this.state.table
  newTable[rowIndex][columnIndex] = ev.target.value
  this.setState({
    table: newTable
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault()
  if (this.state.table.length > 1){
    var newTable = this.state.table
    newTable.pop()
    this.setState({
      table: newTable
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  var newTable = this.state.table
  if (this.state.table[0].length > 1){
    for(var i = 0; i < newTable.length; i++){
      newTable[i].pop()
    }
    this.setState({
      table: newTable
    })
  }
}

export default {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};