'use strict';

function addColumn (ev) {
  ev.preventDefault();
  let array = [];
  this.state.table.forEach(function(arr,i){
    arr.push('');
    array.push(arr);
  });
  this.setState({table:array});
}

function addRow (ev) {
  ev.preventDefault();
  let array = this.state.table;
  array.push(['','']);
  this.setState({table:array});
}

function changeCell (rowIndex, columnIndex, ev) {
  let array = this.state.table;
  array[rowIndex][columnIndex] = ev.target.value;
  this.setState({table:array});
}

function focusCell (rowIndex, columnIndex) {
  this.setState({focused:[rowIndex,columnIndex]});
}

function blurCell () {
  this.setState({focused:null});
}

function removeRow (ev) {
  ev.preventDefault();
  if (this.state.table.length > 1) {
    let array = this.state.table;
    array.pop();
    this.setState({table:array});
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  let array = this.state.table;
  let removed = false;
  array.forEach(function(arr,i){
    if(arr.length > 1){
      removed = true;
      arr.pop();
    }
  });
  if (removed) {
    this.setState({table:array});
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
