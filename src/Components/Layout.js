import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    const { View } = this.props;
    return (
      <div>
        <span className="h1 bold ml2">Video Poker Vegas</span>
        <View {...this.props}/>
      </div>
    );
  }
}
