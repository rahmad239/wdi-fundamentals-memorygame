var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
} 
  
};


var flipCard = function(cardID) {

if (cardsInPlay.length === 2);
	console.log("User Flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);

	checkForMatch();
};


/*if (cardsInPlay.length === 2); */
 
flipCard(0);
flipCard(1);
