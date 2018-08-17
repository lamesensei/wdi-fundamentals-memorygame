var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
  };
};

var flipCard = function(cardId) {
  console.log('User Flipped ' + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
};

flipCard(0);
flipCard(2);
checkForMatch();
