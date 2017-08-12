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
  console.log(data)
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
  // gameplay.createBoard()
  console.log(data)
  console.log('Succeded')
}

const createGameFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const getHistorySuccess = (data) => {
  console.log(data)
  console.log('Succeded')
}

const getHistoryFailure = (error) => {
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
