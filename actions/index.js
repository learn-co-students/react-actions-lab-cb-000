'use strict';

function addColumn (ev) {
  console.log("adding column")

  var temp = this.state.table.map(function(row){
    return(
      ['', ...row]
    )
  })
  this.setState({
    table: temp
  })
  ev.preventDefault();
}

function addRow (ev) {
  console.log("adding row")
  ev.preventDefault();
  var temp = this.state.table ;
  var times
  !!temp[0] ? times = temp[0].length : times = 1
  var temp2 = [] ;
  for(var i = 0; i < times; i++){
    temp2.push(' ')
  }
  temp.push(temp2) ;
  this.setState({
    table: temp
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  console.log(ev) ;
  console.log(ev.target.value)
  console.log(rowIndex) ;
  console.log(columnIndex) ;
  var temp = this.state.table ;
  temp[rowIndex][columnIndex] = ev.target.value
  this.setState({
    table: temp
  })
  ev.preventDefault();


}

function focusCell (rowIndex, columnIndex) {
  console.log(`${rowIndex} - ${columnIndex}`)
  this.setState({
    focused: `${rowIndex} - ${columnIndex}`
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault();
  console.log("removing row") ;
  if(this.state.table.length < 2){
    console.log("do not do that")
  }
  else{
    var temp = this.state.table
    temp.pop() ;
    this.setState({table: temp})
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  if(this.state.table[0].length < 2){
    console.log("do not do that")
  }
  else{
    var temp = this.state.table ;
    temp.forEach(function(row){
      row.pop() ;
    })
    this.setState({table: temp})
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
