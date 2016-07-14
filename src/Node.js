'use strict';

class Node {

  state = {}

  constructor(param) {
    this.state.matrix = param.matrix
    this.state.body = param.body
  }

  getBody = () => {
    return this.state.body
  }

  getMatrix = () => {
    return this.state.matrix
  }

}

export default Node