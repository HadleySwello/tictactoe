'use strict'
const winConditions = require('./index.js')

const pads = [
  $('r1c1'),
  $('r1c2'),
  $('r1c3'),
  $('r2c1'),
  $('r2c2'),
  $('r2c3'),
  $('r3c1'),
  $('r3c2'),
  $('r3c3')
]

const makeMove = function () {
  console.log(this)
  this.setAttribute('src', pads[padId].frogImage)
  console.log(numberOfTurns);
  if (numberOfTurns.length >= 3) {
    winConditions()
  }
}

module.exports = {
  makeMove,
  pads
}
