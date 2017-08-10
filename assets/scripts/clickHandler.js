'use strict'

const checkForWin = require('./game-win.js')

const squares = $('.item')

let cells

const pushCells = function () {
  cells = ($(squares).text()
    .toLowerCase()
    .split('')

  )
  return cells
}

const createBoard = function () {
  $('#message').text('I Give You Game Information!')
  let count = 0
  $(function counter () {
    console.log('im counting')
    $('.item').on('click', function () {
      count += 1
      console.log(count)
    })
  })
  $(function onClick () {
    $('#1').on('click', function (event) {
      if (count % 2 === 0) {
        $('#1').html('O').off()
      }
      if (count % 2 !== 0) {
        $('#1').html('X').off()
      }
      checkForWin.winConditions()
      pushCells()
      console.log(cells)
    })
  })
  $(function onClick () {
    $('#2').on('click', function (event) {
      if (count % 2 === 0) {
        $('#2').html('O').off()
      }
      if (count % 2 !== 0) {
        $('#2').html('X').off()
      }
      checkForWin.winConditions()
      pushCells()
      console.log(cells)
    })
  })
  $(function onClick () {
    $('#3').on('click', function (event) {
      if (count % 2 === 0) {
        $('#3').html('O').off()
      }
      if (count % 2 !== 0) {
        $('#3').html('X').off()
      }
      checkForWin.winConditions()
      pushCells()
      console.log(cells)
    })
  })
  $(function onClick () {
    $('#4').on('click', function (event) {
      if (count % 2 === 0) {
        $('#4').html('O').off()
      }
      if (count % 2 !== 0) {
        $('#4').html('X').off()
      }
      checkForWin.winConditions()
      pushCells()
      console.log(cells)
    })
  })
  $(function onClick () {
    $('#5').on('click', function (event) {
      if (count % 2 === 0) {
        $('#5').html('O').off()
      }
      if (count % 2 !== 0) {
        $('#5').html('X').off()
      }
      checkForWin.winConditions()
      pushCells()
      console.log(cells)
    })
  })
  $(function onClick () {
    $('#6').on('click', function (event) {
      if (count % 2 === 0) {
        $('#6').html('O').off()
      }
      if (count % 2 !== 0) {
        $('#6').html('X').off()
      }
      checkForWin.winConditions()
      pushCells()
      console.log(cells)
    })
  })
  $(function onClick () {
    $('#7').on('click', function (event) {
      if (count % 2 === 0) {
        $('#7').html('O').off()
      }
      if (count % 2 !== 0) {
        $('#7').html('X').off()
      }
      checkForWin.winConditions()
      pushCells()
      console.log(cells)
    })
  })
  $(function onClick () {
    $('#8').on('click', function (event) {
      if (count % 2 === 0) {
        $('#8').html('O').off()
      }
      if (count % 2 !== 0) {
        $('#8').html('X').off()
      }
      checkForWin.winConditions()
      pushCells()
      console.log(cells)
    })
  })
  $(function onClick () {
    $('#9').on('click', function (event) {
      if (count % 2 === 0) {
        $('#9').html('O').off()
      }
      if (count % 2 !== 0) {
        $('#9').html('X').off()
      }
      checkForWin.winConditions()
      pushCells()
      console.log(cells)
    })
  })
}

$(function newGame () {
  $('#reset').on('click', function (event) {
    createBoard()
    $('.item').html(' ')
    cells = []
  })
})
