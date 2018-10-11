import React, { Component } from 'react';
import Card from "../Card.js";
import Banner from "../Banner.js";

export default class Result extends Component {
  render() {
    const { chosen } = this.props;
    const { stage } = this.props;
    const { scores } = this.props;
    return (
      <div className="container center mt3 flex flex-column">
        <Banner scores={scores}/>
        <span className="h2 bold mt2">Press the button below to start a new game!</span>
        <div className="row justify-around mt2">
          { chosen.map((each, i) => /* Map through our hand to render each Card component */
             <Card key={i} each={each} stage={stage}/>
          )}
        </div>
        <button
          className="btn self-center mt4"
          onClick={() => this.props.gameStage('draw')}
        > /* Start new game */
          New Game
        </button>
      </div>
    );
  }
}
