import React, { Component } from 'react';

export default class Card extends Component {

  toggle(each) {
    const { stage } = this.props;
    if(stage === 'switch') {
      this.props.toggle(each.card);
    }
  }

  render() {
    const { each } = this.props;
    return (
      <div className="flex flex-column items-center justify-end card-container">
        { each.held ? null : <span className="bigger1 center">Discard</span> }
        <img
          className="card"
          onClick={() => this.toggle(each)}
          src={require(`../Assets/Cards/${each.card}.svg`)}
          alt=""
         />
      </div>
    );
  }
}
