function gameStage(stage) {
  return {
    type: 'STAGE',
    stage
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
  toggleCard
};
