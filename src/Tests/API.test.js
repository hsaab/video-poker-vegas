import React from 'react';
import * as API from '../API/cardActions.js';
import _ from 'underscore';

const deck = API.createShuffledDeck();
const chosen = API.dealFiveCards(deck);
const chosenUser = [
  {card: '3H', held: true},
  {card: '5D', held: false},
  {card: '8C', held: false},
  {card: 'JS', held: false},
  {card: 'QD', held: true},
];
const sorted = API.sortCards(chosen);
const result = API.calculateResult(deck.slice(), chosenUser);
const pair = ['3D', '3S', '9D', '9S', 'QH'];
const straight = ['2H', '3H', '4D', '5H', '6S'];
const royalStraight = ['10H', 'JD', 'QH', 'KH', 'AC'];
const fail = ['2H', '10D', '8C', '9H', 'AS'];


describe('API tests', () => {
  it('createShuffledDeck() creates a deck with 52 cards', () => {
    expect(deck).toHaveLength(52);
  });

  it('createShuffledDeck() makes sure each card is unique', () => {
    function uniqueArray(array) {
      return array.length === new Set(array).size;
    }
    const deckIsUnique = uniqueArray(deck);
    expect(deckIsUnique).toEqual(true);
  });

  it('dealFiveCards() choses top 5 cards in the deck', () => {
    let checkTopFive = true;
    for(let i = 0; i < chosen.length; i++) {
      if(chosen[i].card !== deck[i]) {
        return checkTopFive = false;
      }
    }
    expect(checkTopFive).toEqual(true);
  });

  it('sortCards() returns a sorted hand of chosen cards', () => {
    let checkSort = true;
    for(let i = sorted.length - 1; i <= 0; i--) {
      if(i === 0) break;
      if(sorted[i] < sorted[i-1]) {
        return checkSort = false;
      }
    }
    expect(checkSort).toEqual(true);
  });

  it('getScore() returns highest pair of cards', () => {
    const score = API.getScore(pair);
    expect(score.hand).toEqual(`Pair 9`);
  });

  it('getScore() returns straight', () => {
    const score = API.getScore(straight);
    expect(score.hand).toEqual(`Straight 2 3 4 5 6`);
  });

  it('getScore() returns royal straight', () => {
    const score = API.getScore(royalStraight);
    expect(score.hand).toEqual(`Straight 10 J Q K A`);
  });

  it('getScore() returns failed hand', () => {
    const score = API.getScore(fail);
    expect(score.hand).toEqual(`None`);
  });

  it('calculateResult() replaces discarded cards with cards at top of deck', () => {
    const newCards = result.chosen;
    const oldCards = [
      {card: '3H', held: true},
      {card: '5D', held: false},
      {card: '8C', held: false},
      {card: 'JS', held: false},
      {card: 'QD', held: true},
    ];
    let diffHand = true;
    let dIndex = 0;
    for(let i = 0; i < oldCards.length; i++) {
      let discarded = !oldCards[i].held;
      let newCard = newCards[i].card;
      let topOfDeck = deck[dIndex];
      if(discarded && newCard !== topOfDeck) {
        return diffHand = false;
      }
      if(discarded && newCard === topOfDeck) {
        dIndex++;
      }
    }
    expect(diffHand).toEqual(true);
  });

  it('calculateResult() returns the updated deck, chosen cards and the score', () => {
    expect(result).toHaveProperty('deck');
    expect(result.deck).toHaveLength(52);
    expect(result).toHaveProperty('chosen');
    expect(result.chosen).toHaveLength(5);
    expect(result.score).toHaveProperty('dateTime');
    expect(result.score).toHaveProperty('type');
    expect(result.score).toHaveProperty('hand');
    expect(result.score).toHaveProperty('points');
  });
});
