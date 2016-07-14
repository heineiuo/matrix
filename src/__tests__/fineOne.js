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


var node = matrix.findOne([11, 10])

var time = [Date.now()]
var body = node.getBody()


time[1] = Date.now()

console.log(body)
console.log(`用时: ${time[1]-time[0]}ms`)

time = [Date.now()]
node.getMatrix()
console.log(node.getMatrix().findOne([12, 10]))
time[1] = Date.now()
console.log(`${time[1] - time[0]}ms`)