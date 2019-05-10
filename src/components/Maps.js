import React, { Component } from 'react';
import { View } from 'react-native';
import ZoomableSvg from 'zoomable-svg';
import SvgRoot from './SvgRoot';

export default class Maps extends Component {
  state = { dimensions: { width: 0, height: 0 } };

  onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ dimensions: { width, height } });
  };

  render() {
    const {
      dimensions: { width, height },
    } = this.state;

    const constraints = {
      combine: 'dynamic',
      scaleExtent: [width / height, 5],
      translateExtent: [[0, 0], [100, 100]],
    };

    return (
      <View
        onLayout={this.onLayout}
        style={
          {
            flex: 1, alignSelf: 'stretch', backgroundColour: 'red', margin: 20,
          }}
      >
        <ZoomableSvg
          align="xMid"
          vbWidth="145"
          vbHeight="230"
          width={width}
          height={height}
          meetOrSlice="meet"
          svgRoot={SvgRoot}
          constrain={constraints}
        />
      </View>
    );
  }
}
