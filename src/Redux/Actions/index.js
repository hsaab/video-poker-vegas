function gameStage(stage) {
  return {
    type: 'STAGE',
    stage
  }
}

function addScore(score) {
  return {
    type: 'SCORE',
    score
  }
}

function replaceCards(deck, chosen) {
  return {
    type: 'REPLACE',
    deck,
    chosen
  }
}

function toggleCard(card) {
  return {
    type: 'TOGGLE',
    card
  }
}

export {
  gameStage,
  replaceCards,
  toggleCard,
  addScore
};
