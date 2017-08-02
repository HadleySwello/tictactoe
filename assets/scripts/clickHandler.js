
$(function onClick () {
  $('#r1c1').on('click', function (event) {
    $('#r1c1').html('X')
  })
})
$(function onClick () {
  $('#r1c2').on('click', function (event) {
    $('#r1c2').html('X')
    console.log('you clicked me')
  })
})
$(function onClick () {
  $('#r1c3').on('click', function (event) {
    $('#r1c3').html('X')
    console.log('you clicked me')
  })
})
$(function onClick () {
  $('#r2c1').on('click', function (event) {
    $('#r2c1').html('X')
    console.log('you clicked me')
  })
})
$(function onClick () {
  $('#r2c2').on('click', function (event) {
    $('#r2c2').html('X')
    console.log('you clicked me')
  })
})
$(function onClick () {
  $('#r2c3').on('click', function (event) {
    $('#r2c3').html('X')
    console.log('you clicked me')
  })
})
$(function onClick () {
  $('#r3c1').on('click', function (event) {
    $('#r3c1').html('X')
    console.log('you clicked me')
  })
})
$(function onClick () {
  $('#r3c2').on('click', function (event) {
    $('#r3c2').html('X')
    console.log('you clicked me')
  })
})
$(function onClick () {
  $('#r3c3').on('click', function (event) {
    $('#r3c3').html('X')
    console.log('you clicked me')
  })
})

$(function counter () {
  let count = 0
  console.log('im counting')
  $('.item').on('click', function () {
    count += 1
    console.log(count)
  })
})
