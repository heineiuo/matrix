'use strict';

import Node from './Node'

/***
 *
 *     x:0   x:1   x:2
 * y:0 [ 1,   2,    3 ]
 * y:1 [ 32,  32,   32]
 * y:2 [              ]
 *
 */

class Matrix2d {

  state = {
    columns: 1,
    rows: 1,

    // 一维数据表示y, 即 row
    // 二维数据表示x, 即 column
    // 三维嘛, ┑(￣Д ￣)┍
    matrix: [
      [{body: {}}]
    ]
  }

  /**
   * 插入列
   * @param targetColumn
   * @param iterator
   */
  insertColumn = (targetColumn, iterator) =>{
    const {matrix} = this.state
    if (targetColumn > matrix[0].length-1) {
      targetColumn = matrix[0].length
    }
    matrix.forEach((row, index)=>{
      row.splice(targetColumn, 0, {body: iterator(index)})
    })
  }

  /**
   * 插入行
   * @param targetRow
   * @param iterator
   */
  insertRow = (targetRow, iterator) => {
    const {matrix} = this.state
    if (targetRow > matrix.length-1) {
      targetRow = matrix.length
    }
    matrix.splice(targetRow, 0, matrix[0].map((val, index)=>{
      return {body: iterator(index)}
    }))
  }

  /**
   * 删除行
   * @param targetColumn
   */
  deleteColumn = (targetColumn) => {
    const {matrix} = this.state
    if (targetColumn < 0) throw new Error('param targetColumn cannot smaller than 0.')
    if (targetColumn > matrix.length-1) throw new Error('param targetColumn bigger than biggest column.')

    matrix.forEach((row, index)=> {
      row.splice(targetColumn, 1)
    })
  }

  /**
   * get节点
   * @param point
   * @returns {*|null}
   */
  findOne = (point)=>{
    const matrix = this
    var body = matrix.state.matrix[point[1]][point[0]].body
    return new Node({
      body: body,
      matrix: matrix,
      meta: {
        type: '2d',
        point: point
      }
    })
  }

}

module.exports = module.exports.default = Matrix2d