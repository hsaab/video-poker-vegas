import React, { Component } from 'react';
import Card from "../Card.js";

export default class Result extends Component {
  render() {
    const { chosen } = this.props;
    const { stage } = this.props;
    return (
      <div className="container center mt3 flex flex-column">
        <span className="h2 bold">Press Deal to start a new game!</span>
        <div className="row justify-around mt4">
          { chosen.map((each, i) =>
             <Card key={i} each={each} stage={stage}/>
          )}
        </div>
        <button
          className="btn self-center mt4"
          onClick={() => this.props.gameStage('draw')}
        >
          Deal
        </button>
      </div>
    );
  }
}
