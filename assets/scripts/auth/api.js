'use strict'

const signUp = (data) => {
  return $.ajax({
    //url: 'https://tic-tac-toe.wdibos.com/sign-up',
    url: 'http://http://localhost:4741/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.Password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const signIn = (data) => {
  return $.ajax({
    //url: 'https://tic-tac-toe.wdibos.com/sign-in',
    url: 'http://http://localhost:4741/sign-in',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.Password
      }
    }
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: 'https://tic-tac-toe.wdibos.com/change-password',
    method: 'PATCH',
    data: {
      'passwords': {
        'old': data.Password.old,
        'new': data.password.new
      }
    }
  })
}

module.exports = {
  signIn,
  signUp,
  changePassword
}
