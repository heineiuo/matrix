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