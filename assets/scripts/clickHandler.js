const checkForWin = require('./game-win.js')
let count = 0

$(function counter () {
  console.log('im counting')
  $('.item').on('click', function () {
    count += 1
    console.log(count)
  })
})

if ($('.item').html() === '.') {
  $(function onClick () {
    $('#1').on('click', function (event) {
      if (count % 2 === 0) {
        $('#1').html('O')
      } if (count % 2 !== 0) {
        $('#1').html('X')
      }
      checkForWin.winConditions()
    })
  })
  $(function onClick () {
    $('#2').on('click', function (event) {
      if (count % 2 === 0) {
        $('#2').html('O')
      } if (count % 2 !== 0) {
        $('#2').html('X')
      }
      checkForWin.winConditions()
    })
  })
  $(function onClick () {
    $('#3').on('click', function (event) {
      if (count % 2 === 0) {
        $('#3').html('O')
      } if (count % 2 !== 0) {
        $('#3').html('X')
      }
      checkForWin.winConditions()
    })
  })
  $(function onClick () {
    $('#4').on('click', function (event) {
      if (count % 2 === 0) {
        $('#4').html('O')
      } if (count % 2 !== 0) {
        $('#4').html('X')
      }
      checkForWin.winConditions()
    })
  })
  $(function onClick () {
    $('#5').on('click', function (event) {
      if (count % 2 === 0) {
        $('#5').html('O')
      } if (count % 2 !== 0) {
        $('#5').html('X')
      }
      checkForWin.winConditions()
    })
  })
  $(function onClick () {
    $('#6').on('click', function (event) {
      if (count % 2 === 0) {
        $('#6').html('O')
      } if (count % 2 !== 0) {
        $('#6').html('X')
      }
      checkForWin.winConditions()
    })
  })
  $(function onClick () {
    $('#7').on('click', function (event) {
      if (count % 2 === 0) {
        $('#7').html('O')
      } if (count % 2 !== 0) {
        $('#7').html('X')
      }
      checkForWin.winConditions()
    })
  })
  $(function onClick () {
    $('#8').on('click', function (event) {
      if (count % 2 === 0) {
        $('#8').html('O')
      } if (count % 2 !== 0) {
        $('#8').html('X')
      }
      checkForWin.winConditions()
    })
  })
  $(function onClick () {
    $('#9').on('click', function (event) {
      if (count % 2 === 0) {
        $('#9').html('O')
      } if (count % 2 !== 0) {
        $('#9').html('X')
      }
      checkForWin.winConditions()
    })
  })
}
