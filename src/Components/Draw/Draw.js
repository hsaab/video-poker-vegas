import React, { Component } from 'react';
import Table from '../Table.js';

export default class Draw extends Component {

  dealCards() {
    // creates shuffled deck, deals five cards (and removes from deck), replaces cards in Redux state
    // and lastly, moves the game on to the next stage, where the user can switch or discard cards
    const deck = this.props.createShuffledDeck();
    const chosen = this.props.dealFiveCards(deck);
    deck.splice(0, 5);
    this.props.replaceCards(deck, chosen);
    this.props.gameStage('switch');
  }

  render() {
    const { scores } = this.props;
    return (
      <div className="container center mt3 flex flex-column">
        <span className="h2 bold white">Press deal to start a new game</span>
        <span className="h2 mt3 mb1 special-shadow">Last Five Scores</span>
        <Table scores={scores}/>
        <button
          className="btn self-center mt4"
          onClick={() => this.dealCards()}
        >
          DEAL
        </button>
      </div>
    );
  }
}
