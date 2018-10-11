const _ = require('underscore');
const moment = require('moment');

// ----                ---- \\
// ---- MAIN FUNCTIONS ---- \\
// ----                ---- \\

function createShuffledDeck() {
  // Map through each suite and create each unique type of card, then shuffle deck
  const types = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  const suites = ['C','S','H','D'];
  const unflattenedDeck = suites.map((eachSuite) => {
    let cards = [];
    types.map((eachType) => {
      return cards.push(eachType + eachSuite);
    });
    return cards;
  });
  const shuffledDeck = _.shuffle(_.flatten(unflattenedDeck));
  return shuffledDeck;
}

function dealFiveCards(deck) {
  // Take deck as an arg and return top five cards from deck as chosen cards
  let chosen = [];
  for(let i = 0; i < 5; i++) {
    chosen.push({ card: deck[i], held: true });
  }
  return chosen;
}

function calculateResult(deck, chosen) {
   // First replace cards user wants to discard, second sort chosen cards, third get score from new hand
   // Lastly return deck, chosen and score to update our redux state and display in app
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
  const sorted = sortCards(chosen);
  const score = getScore(sorted);
  return { deck, chosen, score };
}

// ----                  ---- \\
// ---- HELPER FUNCTIONS ---- \\
// ----                  ---- \\

function sortCards(chosen) {
  // Pull lowest card from chosen hand and push into new sortedArray and return sortedArray
  let unSorted = chosen.slice();
  let sorted = [];
  while(unSorted.length > 0) {
    let minRank = Number.POSITIVE_INFINITY;
    let minCard;
    let minIndex = 0;
    for(let i = 0; i < unSorted.length; i++) {
      const card = unSorted[i].card;
      if(minRank > cardRank(card)) {
        minRank = cardRank(card);
        minCard = card;
        minIndex = i;
      }
    }
    sorted.push(minCard);
    unSorted.splice(minIndex, 1);
  }
  return sorted;
}

function getScore(chosen) {
   // First assess hand for highest pair or straight (number of consecutive cards)
   // Based on type of hand, return score object to update our score table and Redux scores state
   const dateTime = moment().format("MMM D, h:mm:ss a");
   let pairRank = 0;
   let pairCard = 0;
   let straight = 0;
   for(let i = 0; i < chosen.length; i++) {
     if(i === chosen.length - 1) break;
     const firstRank = cardRank(chosen[i]);
     const secondRank = cardRank(chosen[i+1]);

     // First check for highest pair
     if(firstRank === secondRank && firstRank > pairRank) {
         pairRank = cardRank(chosen[i]);
         pairCard = pairRank > 10 ? chosen[i][0] : parseInt(chosen[i]);
     }

     // Second check how many consecutive cards we have
     if(secondRank === firstRank + 1) {
       straight++;
     }
   }

   if(straight === 4) { // Four consecutive cards needed to form a straight
     const hand = `Straight ${chosen.map((each) =>  {
       return cardRank(each) > 10 ? each[0] : parseInt(each);
     }).join(" ")}`;
     return { type: 'straight', hand, points: 500, dateTime };

   } else if(pairRank > 0 && straight < 4) { // Only choose pair if straight not available
     const hand = `Pair ${pairCard}`
     return { type: 'pair', hand, points: 100, dateTime };

   } else { // Failed hand if no pair or straight
     const hand = `None`
     return { type: 'none', hand, points: 0, dateTime };
   }
}

function cardRank(card) {
  // Translate card abbreviation to number rank i.e. '9D' --> 9 OR 'AS' --> 14
  if(card[0] === 'J') {
    return 11;
  } else if(card[0] === 'Q') {
    return 12;
  } else if(card[0] === 'K') {
    return 13;
  } else if(card[0] === 'A') {
    return 14;
  } else {
    return parseInt(card);
  }
}

export {
  createShuffledDeck,
  dealFiveCards,
  calculateResult,
  cardRank,
  getScore,
  sortCards
}
