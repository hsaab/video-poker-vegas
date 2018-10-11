import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    const { scores } = this.props;
    let message;
    if(scores[0].type === 'none') {
      message = `Sorry, try again next time!`;
    } else {
      message = `Congratulations you won ${scores[0].points} points with ${scores[0].hand}`;
    }
    return (
      <div className="container center mt3 flex flex-column">
        <span className="h1 bold special-shadow">{message}</span>
      </div>
    );
  }
}
