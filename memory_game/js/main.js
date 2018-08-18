var cards = [{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
}, {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
}, {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
}, {
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}];
var cardsInPlay = [];
var score = 0;

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

var resetGame = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.querySelector('img');
    cardElement.remove();
    console.log('removeboard' + i);
  }
}

var updateScore = function() {
  score++;
  console.log('Score is ' + score);
  document.getElementById('score').textContent = score;
}

var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      cardsInPlay.length = 0;
      updateScore();
    } else {
      alert("Sorry, try again.");
      cardsInPlay.length = 0;
    };
  };
};

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  console.log('User Flipped ' + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
};

document.getElementById('reset').addEventListener('click', resetGame);
createBoard();
