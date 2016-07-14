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


var startTime = Date.now()

var initCount = 100
var count = 100

var insert = ()=> {
  if (count > 0){

    matrix.insertColumn(matrix.state.matrix[0].length-1, (index)=> {
      return Math.random()
    })
    matrix.insertRow(matrix.state.matrix.length-1, (index)=> {
      return Math.random()
    })

    count --
    insert()
  }

}


insert()


// matrix.deleteColumn(0)

var endTime = Date.now()

fs.writeFileSync('./example.test.js', `var matrix = ${JSON.stringify(matrix.state.matrix)}`, 'utf-8')

console.log(`插入${initCount}x${initCount}行数据用时: ${endTime-startTime}ms`)

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


// console.log(matrix.state.matrix[10][10])

// matrix.insertRow(0, (index)=> {
//   return index
// })
