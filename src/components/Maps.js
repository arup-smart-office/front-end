import React, { Component } from 'react';
import { View } from 'react-native';
import ZoomableSvg from 'zoomable-svg';
import SvgRoot from './SvgRoot';
import InfoCard from './InfoCard';

export default class Maps extends Component {
  state = { dimensions: { width: 0, height: 0 }, currentDesk: null };

  onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ dimensions: { width, height } });
  };

  updatedSelectedDesk = (currentDesk) => {
    if (currentDesk !== undefined) this.setState({ currentDesk });
  };

  render() {
    const { currentDesk } = this.state;

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
            flex: 1, alignSelf: 'stretch', marginBottom: 20,
          }}
      >
        <View
          style={
            {
              flex: 1, alignSelf: 'stretch', margin: 20, marginBottom: 0, paddingBottom: 0,
            }}
        >
          <ZoomableSvg
            align="xMid"
            vbWidth="145"
            vbHeight="230"
            width={width - 40}
            height={height - 40}
            meetOrSlice="meet"
            svgRoot={SvgRoot}
            constrain={constraints}
            childProps={{ updatedSelectedDesk: this.updatedSelectedDesk }}
          />
        </View>
        {currentDesk
          ? (
            <InfoCard currentDesk={currentDesk} />
          ) : null}
      </View>
    );
  }
}
