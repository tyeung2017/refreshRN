import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import Style from './style';

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 },
    }).start();
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()} >
        <View style={Style.ball} />
      </Animated.View>
    );
  }
}

export default Ball;
