import React, { Component } from 'react';
import Table from '../Table.js';

export default class Draw extends Component {

  dealCards() {
    const deck = this.props.createShuffledDeck();
    const chosen = this.props.dealFiveCards(deck);
    deck.splice(0, 5);
    this.props.replaceCards(deck, chosen);
    this.props.gameStage('switch');
  }

  render() {
    return (
      <div className="container center mt3 flex flex-column">
        <span className="h2 bold">Press deal to start a new game</span>
        <span className="h3 mt3 mb1">Last Five Scores</span>
        <Table/>
        <button
          className="btn self-center mt4"
          onClick={() => this.dealCards()}
        >
          Deal
        </button>
      </div>
    );
  }
}
