import React from 'react';
import * as actions from '../Redux/Actions/index.js';
import * as API from '../API/cardActions.js';
import reducer from '../Redux/Reducer/index.js';
import store from '../Redux/store.js';

// ----            ---- \\
// ---- DUMMY DATA ---- \\
// ----            ---- \\

const stage = 'result'
const gameStage = {
  type: 'STAGE',
  stage
}

const score = { type:
  'straight',
  points: 500,
  hand: 'Straight 10 J Q K A',
  dateTime: 'Oct 10, 9:35:35 pm'
};
const addScore = {
  type: 'SCORE',
  score
}

const deck = API.createShuffledDeck();
const chosen = [
  {card: '3H', held: true},
  {card: '5D', held: false},
  {card: '8C', held: false},
  {card: 'JS', held: false},
  {card: 'QD', held: true},
];
const replaceCards = {
  type: 'REPLACE',
  deck,
  chosen
}

const card = '5D';
const toggleCard = {
  type: 'TOGGLE',
  card
}

// ----            ---- \\
// ----   TESTS    ---- \\
// ----            ---- \\

describe('Redux store', () => {
  it('should always be truthy', () => {
    expect(store).toBeTruthy();
  });
});

describe('Redux actions', () => {
  it('gameStage() should change stage of the game', () => {
    expect(actions.gameStage(stage)).toEqual(gameStage);
  });

  it('addScore() should add score to table', () => {
    expect(actions.addScore(score)).toEqual(addScore);
  });

  it('replaceCards() should add new deck and chosen', () => {
    expect(actions.replaceCards(deck, chosen)).toEqual(replaceCards);
  });

  it('toggleCard() should toggle held prop', () => {
    expect(actions.toggleCard(card)).toEqual(toggleCard);
  });
});

describe('Redux reducer', () => {
  it('returns default', () => {
    expect(reducer({}, { type: 'DEFAULT' })).toEqual({ });
  });

  it('handles gameStage()', () => {
    expect(reducer({}, gameStage)).toEqual({ stage });
  });

  it('handles addScore()', () => {
    let scores = [];
    expect(reducer({}, addScore)).toEqual({ scores: [score, ...scores] });
  });

  it('handles replaceCards()', () => {
    let scores = [];
    expect(reducer({}, replaceCards)).toEqual({ deck, chosen });
  });

  it('handles toggleCard()', () => {
    const state = {};
    state.chosen = chosen;
    const toggled = chosen.map((each) => {
      if(each.card === card) {
        each.held = !each.held;
      }
      return each;
    });
    expect(reducer(state, toggleCard)).toEqual({ chosen: toggled });
  });
});
