import React, { Component } from 'react';
import Card from "../Card.js";

export default class Switch extends Component {

  getResult() {
    // First invoke calculateResult (API) which switches discarded and returns the new deck, hand and score
    // Then replace cards in Redux state, add our hand score and move game on to the last stage (result)
    const { chosen } = this.props;
    const { deck } = this.props;
    const newCards = this.props.calculateResult(deck, chosen);
    this.props.replaceCards(newCards.deck, newCards.chosen);
    this.props.addScore(newCards.score);
    this.props.gameStage('result');
  }

  render() {
    const { chosen } = this.props;
    const { stage } = this.props;
    const { toggleCard } = this.props; // toggleCard allows the user to toggle between hold / discard
    return (
      <div className="container center mt3 flex flex-column">
        <span className="h2 bold">Click on card to toggle hold / discard</span>
        <div className="row justify-around mt2">
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
