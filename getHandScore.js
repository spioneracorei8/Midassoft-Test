/*
Symbol        Value
H             Heart
C             Dokjik
D             Dimond
S             Podum
J             10
Q             10
K             10
?J,?Q,?K      32.5
A             11
A-A-A         35



Problem find the sum of the cards in who hand

Solving
- convert type to array
- declare for of loop 
- get score of card
- get symbol if card
- if condition check if score of card 
- if condition to check calculate same symbol
- then check if there are three cards of the same rank
- comapre resukt to find largest result
- return result

Test
*/

function getHandScore(string) {
  const cards = string.split(" ");
  const suits = {};
  let maxScore = 0;
  const rankCounts = {};

  for (const card of cards) {
    const rank = card.slice(1);
    const suit = card[0];
    let cardValue = null;

    if (rank === "A") {
      cardValue = 11;
    } else if (rank === "J" || rank === "Q" || rank === "K") {
      cardValue = 10;
    } else {
      cardValue = Number(rank);
    }

    if (suits[suit]) {
      suits[suit] += cardValue;
    } else {
      suits[suit] = cardValue;
    }

    if (rankCounts[rank]) {
      rankCounts[rank]++;
    } else {
      rankCounts[rank] = 1;
    }

    if (rankCounts[rank] === 3) {
      if (rank === "A") {
        maxScore = 35;
      } else if (rank === "J" || rank === "Q" || rank === "K") {
        maxScore = 32.5;
      }
    }

    if (suits[suit] > maxScore) {
      maxScore = suits[suit];
    }
  }

  return maxScore;
}

console.log(getHandScore("S10 SA CK"));
