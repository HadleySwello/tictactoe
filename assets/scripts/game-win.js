'use strict'
const message = function (msg) {
  $('#message').text(msg)
}

const winConditions = function (id, player) {
  if ($('#1').html() === 'X' && $('#2').html() === 'X' && $('#3').html() === 'X') {
    message('Player One Wins!')
  } else if ($('#1').html() === 'O' && $('#2').html() === 'O' && $('#3').html() === 'O') {
    message('Player Two Wins!')
  } else if ($('#1').html() === 'X' && $('#4').html() === 'X' && $('#7').html() === 'X') {
    message('Player One Wins!')
  } else if ($('#1').html() === 'O' && $('#4').html() === 'O' && $('#7').html() === 'O') {
    message('Player Two Wins!')
  } else if ($('#1').html() === 'X' && $('#5').html() === 'X' && $('#9').html() === 'X') {
    message('Player One Wins!')
  } else if ($('#1').html() === 'O' && $('#5').html() === 'O' && $('#9').html() === 'O') {
    message('Player Two Wins!')
  } else if ($('#2').html() === 'X' && $('#5').html() === 'X' && $('#8').html() === 'X') {
    message('Player One Wins!')
  } else if ($('#2').html() === 'O' && $('#5').html() === 'O' && $('#8').html() === 'O') {
    message('Player Two Wins!')
  } else if ($('#3').html() === 'X' && $('#6').html() === 'X' && $('#9').html() === 'X') {
    message('Player One Wins!')
  } else if ($('#3').html() === 'O' && $('#6').html() === 'O' && $('#9').html() === 'O') {
    message('Player Two Wins!')
  } else if ($('#4').html() === 'X' && $('#5').html() === 'X' && $('#6').html() === 'X') {
    message('Player One Wins!')
  } else if ($('#4').html() === 'O' && $('#5').html() === 'O' && $('#6').html() === 'O') {
    message('Player Two Wins!')
  } else if ($('#7').html() === 'X' && $('#8').html() === 'X' && $('#9').html() === 'X') {
    message('Player One Wins!')
  } else if ($('#7').html() === 'O' && $('#8').html() === 'O' && $('#9').html() === 'O') {
    message('Player Two Wins!')
  } else if ($('#3').html() === 'X' && $('#5').html() === 'X' && $('#7').html() === 'X') {
    message('Player One Wins!')
  } else if ($('#3').html() === 'O' && $('#5').html() === 'O' && $('#7').html() === 'O') {
    message('Player Two Wins!')
  }
  // } else if (count === 9){
  //   message('Cats Game')
  // }
}

module.exports = {
  winConditions
}
