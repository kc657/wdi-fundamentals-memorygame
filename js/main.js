

var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

console.log(cardsInPlay);

if (cardsInPlay[0] === cardsInPlay[1] && cardsInPlay.length === 2) {
    alert("You found a match!")
} else {
    alert("Sorry, try again!")
} ;


// var cardThree =;
// var cardFour =;