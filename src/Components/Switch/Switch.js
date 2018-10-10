import React, { Component } from 'react';
import Card from "../Card.js";

export default class Deal extends Component {

  getResult() {
    const { chosen } = this.props;
    const { deck } = this.props;
    const newCards = this.props.calculateResult(deck, chosen);
    this.props.replaceCards(newCards.deck, newCards.chosen);
    this.props.gameStage('result');
  }

  render() {
    const { chosen } = this.props;
    const { stage } = this.props;
    const { toggleCard } = this.props;
    return (
      <div className="container center mt3 flex flex-column">
        <span className="h2 bold">Click on card to toggle hold / discard</span>
        <div className="row justify-around mt4">
          { chosen.map((each, i) =>
             <Card key={i} each={each} toggle={toggleCard} stage={stage}/>
          )}
        </div>
        <button
          className="btn self-center mt4"
          onClick={() => this.getResult()}
        >
          Go
        </button>
      </div>
    );
  }
}
