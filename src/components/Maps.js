import React, { Component } from 'react';
import { Card } from 'react-native-elements'
import { View, Text } from 'react-native';
import ZoomableSvg from 'zoomable-svg';
import SvgRoot from './SvgRoot';

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
          childProps={{ updatedSelectedDesk: this.updatedSelectedDesk }}
        />
        <Card title={currentDesk ? `Desk ${currentDesk.id}` : null} containerStyle={{ position: 'absolute' }}>
          {currentDesk ? (
            <Text>
              <Text>The desk is currently</Text>
              <Text style={{ fontWeight: 'bold' }}>{currentDesk.isOccupied ? ' occupied' : ' vacant'}</Text>
            </Text>
          ) : null}
        </Card>
      </View>
    );
  }
}
