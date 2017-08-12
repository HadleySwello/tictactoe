'use strict'
const app = require('../../../app.js')

const signUp = (data) => {
  return $.ajax({
    // url: 'https://aqueous-atoll-85096.herokuapp.com/sign-up',
    url: 'http://localhost:4741/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const signIn = (data) => {
  return $.ajax({
    // url: 'https://aqueous-atoll-85096.herokuapp.com/sign-in',
    url: 'http://localhost:4741/sign-in',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = (data) => {
  console.log(data.credentials.old)
  console.log(data.credentials.new)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  })
}

const signOut = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createGame = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// const loadGame = (data) => {
//   console.log(data)
//   return $.ajax({
//     url: app.host + '/games/' + app.user.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     }
//   })
// }

const updateGame = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getHistory = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  changePassword,
  signOut,
  createGame,
  updateGame,
  getHistory
}
