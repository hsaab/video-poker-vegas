import React, { Component } from 'react';
import { connect } from "react-redux";
import Layout from "../Components/Layout.js";
import Draw from "../Components/Draw/Draw.js";
import Switch from "../Components/Switch/Switch.js";
import Result from "../Components/Result/Result.js";
import * as actions from "../Redux/Actions/index.js";
import * as API from "../API/cardActions.js";

class Game extends Component {
  componentDidMount() {
    this.props.gameStage('draw');
  }

  render() {
    const { stage } = this.props;
    let View = Draw;
    if(stage === 'switch') View = Switch;
    if(stage === 'result') View = Result;
    const cProps = {
      View,
      createShuffledDeck: API.createShuffledDeck,
      dealFiveCards: API.dealFiveCards,
      calculateResult: API.calculateResult,
      ...this.props
    };
    return (
      <Layout {...cProps}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    stage: state.stage,
    deck: state.deck,
    chosen: state.chosen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gameStage: (stage) => {
      dispatch(actions.gameStage(stage));
    },
    toggleCard: (card) => {
      dispatch(actions.toggleCard(card));
    },
    replaceCards: (deck, chosen) => {
      dispatch(actions.replaceCards(deck, chosen))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
