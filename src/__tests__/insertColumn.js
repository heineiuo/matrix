'use strict';

import fs from 'fs'

var matrix2d = require('../matrix2d')

var matrix = new matrix2d()

var consoleMatrix = ()=> {
  matrix.state.matrix.forEach((row, index)=>{
    console.log(`${index}: ${JSON.stringify(row)}`)
  })
  console.log('--------------')
}


var initCount = 100
var count = 100

var insert = ()=> {
  if (count > 0){

    matrix.insertColumn(matrix.state.matrix[0].length-1, (index)=> {
      return Math.random()
    })

    count --
    insert()
  }

}


insert()
