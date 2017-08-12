const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordfailure)
}

// const onLoadGame = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.loadGame(data)
//     .then(ui.loadGameSuccess)
//     .catch(ui.loadGameFailure)
// }

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (index, val, over) {
  api.updateGame(index, val, over)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGetHistory = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getHistory(data)
    .then(ui.getHistorySuccess)
    .catch(ui.getHistoryFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame,
  onGetHistory
}
