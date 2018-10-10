const _ = require('underscore');

function createShuffledDeck() {
  const types = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  const suites = ['C','S','H','D'];
  const unflattenedDeck = suites.map((eachSuite) => {
    let cards = [];
    types.map((eachType) => {
      cards.push(eachType + eachSuite);
    });
    return cards;
  });
  const shuffledDeck = _.shuffle(_.flatten(unflattenedDeck));
  return shuffledDeck;
}

function dealFiveCards(deck) {
  let chosen = [];
  for(let i = 0; i < 5; i++) {
    chosen.push({ card: deck[i], held: true })
  }
  return chosen;
}

function calculateResult(deck, chosen) {
   chosen.forEach((each) => {
     if(!each.held) {
       const temp = each.card;
       const newCard = deck.shift();
       each.card = newCard;
       each.held = true;
       deck.push(temp);
     }
     return each;
  });
  return { deck, chosen };
}

// function sortCards(chosen) {
//   for(let i = 0; i < chosen.length; i++) {
//     for(let j = 0; j < chosen.length - i - 1; j++) {
//       const largerFaceCard = chosen[i].card[0]
//       if(chosen[j] > chosen[j+1]) {
//         let temp = chosen[j+1];
//         chosen[j+1] = chosen[j];
//         chosen[j] = temp;
//       }
//     }
//   }
//   return chosen;
// }
//
// function getScore(chosen) {
//    for(let i = 0; i < chosen.length; i++) {
//
//    }
// }

export {
  createShuffledDeck,
  dealFiveCards,
  calculateResult
}
