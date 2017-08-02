// TODO define class (frog)

const winConditions = function (id, frog) {
  let won = 0
  if ($('#r1c1').hasClass(frog) && $('#r1c2').hasClass(frog) && $('#r1c3').hasClass(frog)) {
    won = 1
  } else if ($('#r1c1').hasClass(frog) && $('#r2c1').hasClass(frog) && $('#r3c1').hasClass(frog)) {
    won = 1
  } else if ($('#r1c1').hasClass(frog) && $('#r2c2').hasClass(frog) && $('#r3c3').hasClass(frog)) {
    won = 1
  } else if ($('#r1c2').hasClass(frog) && $('#r2c2').hasClass(frog) && $('#r3c2').hasClass(frog)) {
    won = 1
  } else if ($('#r1c3').hasClass(frog) && $('#r2c3').hasClass(frog) && $('#r3c3').hasClass(frog)) {
    won = 1
  } else if ($('#r2c1').hasClass(frog) && $('#r2c2').hasClass(frog) && $('#r2c3').hasClass(frog)) {
    won = 1
  } else if ($('#r3c1').hasClass(frog) && $('#r3c2').hasClass(frog) && $('#r3c3').hasClass(frog)) {
    won = 1
  } else if ($('#r1c3').hasClass(frog) && $('#r2c2').hasClass(frog) && $('#r3c1').hasClass(frog)) {
    won = 1
  }
}

module.exports = {
  winConditions,
  addClassFrog
}
