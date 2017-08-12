'use strict'

const updateGame = require('./auth/events.js')
console.log(updateGame)
const squares = $('.item')
let val
let index
let cells

const pushCells = function () {
  cells = ($(squares).text()
    .toLowerCase()
    .split('')

  )
  return cells
}

const message = function (msg) {
  $('#message').text(msg)
}
let over

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
      winConditions()
      console.log(over)
      index = 0
      val = $('#1').html()
      // console.log(updateGame)
      // console.log('hit')
      updateGame.onUpdateGame(index, val, over)
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
      winConditions()
      // console.log(over)
      index = 1
      val = $('#2').html()
      updateGame.onUpdateGame(index, val, over)
      pushCells()
      // console.log(cells)
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
      winConditions()
      // console.log(over)
      index = 2
      val = $('#3').html()
      updateGame.onUpdateGame(index, val, over)
      pushCells()
      // console.log(cells)
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
      winConditions()
      // console.log(over)
      index = 3
      val = $('#4').html()
      updateGame.onUpdateGame(index, val, over)
      pushCells()
      // console.log(cells)
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
      winConditions()
      // console.log(over)
      index = 4
      val = $('#5').html()
      updateGame.onUpdateGame(index, val, over)
      pushCells()
      // console.log(cells)
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
      winConditions()
      // console.log(over)
      index = 5
      val = $('#6').html()
      updateGame.onUpdateGame(index, val, over)
      pushCells()
      // console.log(cells)
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
      winConditions()
      // console.log(over)
      index = 6
      val = $('#7').html()
      updateGame.onUpdateGame(index, val, over)
      pushCells()
      // console.log(cells)
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
      winConditions()
      // console.log(over)
      index = 7
      val = $('#8').html()
      updateGame.onUpdateGame(index, val, over)
      pushCells()
      // console.log(cells)
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
      winConditions()
      // console.log(over)
      index = 8
      val = $('#9').html()
      updateGame.onUpdateGame(index, val, over)
      pushCells()
      // console.log(cells)
    })
  })
  const winConditions = function (id, player) {
    if ($('#1').html() === 'X' && $('#2').html() === 'X' && $('#3').html() === 'X') {
      message('Player One Wins!')
      over = true
    } else if ($('#1').html() === 'O' && $('#2').html() === 'O' && $('#3').html() === 'O') {
      message('Player Two Wins!')
      over = true
    } else if ($('#1').html() === 'X' && $('#4').html() === 'X' && $('#7').html() === 'X') {
      message('Player One Wins!')
      over = true
    } else if ($('#1').html() === 'O' && $('#4').html() === 'O' && $('#7').html() === 'O') {
      message('Player Two Wins!')
      over = true
    } else if ($('#1').html() === 'X' && $('#5').html() === 'X' && $('#9').html() === 'X') {
      message('Player One Wins!')
      over = true
    } else if ($('#1').html() === 'O' && $('#5').html() === 'O' && $('#9').html() === 'O') {
      message('Player Two Wins!')
      over = true
    } else if ($('#2').html() === 'X' && $('#5').html() === 'X' && $('#8').html() === 'X') {
      message('Player One Wins!')
      over = true
    } else if ($('#2').html() === 'O' && $('#5').html() === 'O' && $('#8').html() === 'O') {
      message('Player Two Wins!')
      over = true
    } else if ($('#3').html() === 'X' && $('#6').html() === 'X' && $('#9').html() === 'X') {
      message('Player One Wins!')
      over = true
    } else if ($('#3').html() === 'O' && $('#6').html() === 'O' && $('#9').html() === 'O') {
      message('Player Two Wins!')
      over = true
    } else if ($('#4').html() === 'X' && $('#5').html() === 'X' && $('#6').html() === 'X') {
      message('Player One Wins!')
      over = true
    } else if ($('#4').html() === 'O' && $('#5').html() === 'O' && $('#6').html() === 'O') {
      message('Player Two Wins!')
      over = true
    } else if ($('#7').html() === 'X' && $('#8').html() === 'X' && $('#9').html() === 'X') {
      message('Player One Wins!')
      over = true
    } else if ($('#7').html() === 'O' && $('#8').html() === 'O' && $('#9').html() === 'O') {
      message('Player Two Wins!')
      over = true
    } else if ($('#3').html() === 'X' && $('#5').html() === 'X' && $('#7').html() === 'X') {
      message('Player One Wins!')
      over = true
    } else if ($('#3').html() === 'O' && $('#5').html() === 'O' && $('#7').html() === 'O') {
      message('Player Two Wins!')
      over = true
    } else if (count === 9) {
      message('Cats Game')
      over = true
    }
    return over
  }
}

$(function newGame () {
  $('#reset').on('click', function (event) {
    createBoard()
    $('.item').html(' ')
    cells = []
  })
})

module.exports = {
  createBoard
}
