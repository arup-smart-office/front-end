import React, { Component } from 'react';
import { View } from 'react-native';
import ZoomableSvg from 'zoomable-svg';
import SvgRoot from './SvgRoot';
import InfoCard from './InfoCard';

export default class Maps extends Component {
  state = { map: { width: 0, height: 0 }, currentDesk: null };

  mapSize = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ map: { width, height } });
  };

  updatedSelectedDesk = (currentDesk) => {
    if (currentDesk !== undefined) this.setState({ currentDesk });
  };

  render() {
    const { currentDesk } = this.state;

    const {
      map: { width, height }, map,
    } = this.state;

    const constraints = {
      combine: 'dynamic',
      scaleExtent: [width / height, 5],
      translateExtent: [[0, 0], [100, 100]],
    };

    return (
      <View
        onLayout={this.svgSize}
        style={
          {
            flex: 1, alignSelf: 'stretch', marginBottom: 0,
          }}
      >
        <View
          onLayout={this.mapSize}
          style={
            {
              flex: 1, alignSelf: 'stretch', margin: 0, marginBottom: 0, paddingBottom: 0,
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
            childProps={{ updatedSelectedDesk: this.updatedSelectedDesk, map }}
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
