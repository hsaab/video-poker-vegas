import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    const { View } = this.props;
    return (
      <div>
        <div className="flex row items-center">
          <img className="poker-icon" src={require("../Assets/video-poker-icon.png")} alt=""/>
          <span className="h1 bold ml2 white">Video Poker Vegas</span>
        </div>
        <View {...this.props}/>
      </div>
    );
  }
}
