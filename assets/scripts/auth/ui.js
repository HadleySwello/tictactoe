'use strict'
const app = require('../../../app.js')

// const gameplay = require('../clickHandler.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.log(error)
}

const signInSuccess = (data) => {
  $('#sign-out').prop('disabled', false)
  app.user = data.user
  console.log(app.user.token)
}

const signInFailure = (error) => {
  console.log(error)
}

const changePasswordSuccess = (data) => {
  console.log(data)
}

const changePasswordfailure = (error) => {
  console.log(error)
}

const logOutSuccess = (data) => {
  console.log(data)
  console.log('Succeded')
}

const logOutFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

// const loadGameSuccess = (data) => {
//   console.log(data)
//   console.log('Succeded')
// }
//
// const loadGameFailure = (error) => {
//   console.log(error)
//   console.log('Failed')
// }

const updateGameSuccess = (data) => {
  console.log(data)
  console.log('Succeded')
}

const updateGameFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const createGameSuccess = (data) => {
  app.game = data.game
  app.game.id = data.game.id
  console.log(data)
  console.log('Succeded')
}

const createGameFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const getHistorySuccess = (data) => {
  $('.oldGames').html('You have played games before user ' + data.game.id)
  console.log('look here')
  console.log(data.id)
  console.log('Succeded')
}

const getHistoryFailure = (error) => {
  $('.oldGames').html('You have not played games before')
  console.log(error)
  console.log('Failed')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordfailure,
  changePasswordSuccess,
  logOutFailure,
  logOutSuccess,
  updateGameFailure,
  updateGameSuccess,
  createGameFailure,
  createGameSuccess,
  getHistorySuccess,
  getHistoryFailure
}
