'use strict'

const winConditions = function (id, player) {
  let won = 0
  if ($('#1').html() && $('#2').html() && $('#3').html() === 'X') {
    won = 1
    console.log('Player One Wins!')
  } else if ($('#1').html() && $('#2').html() && $('#3').html() === 'O') {
    won = 1
    console.log('Player Two Wins!')
  } else if ($('#1').html() && $('#4').html() && $('#7').html() === 'X') {
    won = 1
    console.log('Player One Wins!')
  } else if ($('#1').html() && $('#4').html() && $('#7').html() === 'O') {
    won = 1
    console.log('Player Two Wins!')
  } else if ($('#1').html() && $('#5').html() && $('#9').html() === 'X') {
    won = 1
    console.log('Player One Wins!')
  } else if ($('#1').html() && $('#5').html() && $('#9').html() === 'O') {
    won = 1
    console.log('Player Two Wins!')
  } else if ($('#2').html() && $('#5').html() && $('#8').html() === 'X') {
    won = 1
    console.log('Player One Wins!')
  } else if ($('#2').html() && $('#5').html() && $('#8').html() === 'O') {
    won = 1
    console.log('Player Two Wins!')
  } else if ($('#3').html() && $('#6').html() && $('#9').html() === 'X') {
    won = 1
    console.log('Player One Wins!')
  } else if ($('#3').html() && $('#6').html() && $('#9').html() === 'O') {
    won = 1
    console.log('Player Two Wins!')
  } else if ($('#4').html() && $('#5').html() && $('#6').html() === 'X') {
    won = 1
    console.log('Player One Wins!')
  } else if ($('#4').html() && $('#5').html() && $('#6').html() === 'O') {
    won = 1
    console.log('Player Two Wins!')
  } else if ($('#7').html() && $('#8').html() && $('#9').html() === 'X') {
    won = 1
    console.log('Player One Wins!')
  } else if ($('#7').html() && $('#8').html() && $('#9').html() === 'O') {
    won = 1
    console.log('Player Two Wins!')
  } else if ($('#3').html() && $('#5').html() && $('#7').html() === 'X') {
    won = 1
    console.log('Player One Wins!')
  } else if ($('#3').html() && $('#5').html() && $('#7').html() === 'O') {
    won = 1
    console.log('Player Two Wins!')
  }
}
module.exports = {
  winConditions
}
