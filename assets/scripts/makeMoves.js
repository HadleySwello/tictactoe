const pads = [
  $('r1c1'),
  $('r1c2'),
  $('r1c3'),
  $('r2c1'),
  $('r2c2'),
  $('r2c3'),
  $('r3c1'),
  $('r3c2'),
  $('r3c3')
]

const makeMove = function () {
  cardId = this.getAttribute('data-id')
  console.log(this)
  this.setAttribute('src', cards[cardId].cardImage)
  cardsInPlay.push(cards[cardId].rank);
  console.log(cardsInPlay);
  if (cardsInPlay.length==2){
    checkForMatch();
  }
}

module.exports = {
  makeMove,
  pads
}
