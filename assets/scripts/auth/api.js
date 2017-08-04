'use strict'

const signUp = (data) => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-up',
    // url: 'http://localhost:4741/sign-up',
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
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-in',
    // url: 'http://localhost:4741/sign-in',
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
  console.log(data)
  return $.ajax({
    // url: 'https://tic-tac-toe.wdibos.com/change-password',
    url: 'https://aqueous-atoll-85096.herokuapp.com/change-password',
    method: 'PATCH',
    data: {
      'passwords': {
        'old': data.password.old,
        'new': data.password.new
      }
    }})
}

module.exports = {
  signIn,
  signUp,
  changePassword
}
