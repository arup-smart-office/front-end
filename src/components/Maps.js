import React, { Component } from 'react';
import { Card } from 'react-native-elements';
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
            <Card
              title={currentDesk ? `Desk ${currentDesk.id}` : null}
              containerStyle={{
                position: 'relative',
                padding: 15,
                margin: 20,
              }}
            >
              {currentDesk ? (
                <View>
                  <Text>
                    <Text>The desk is currently</Text>
                    <Text style={{ fontWeight: 'bold' }}>{currentDesk.isOccupied ? ' occupied' : ' vacant'}</Text>
                  </Text>
                  <Text>
                    <Text>The temperature is</Text>
                    <Text style={{ fontWeight: 'bold' }}>{` ${currentDesk.temperature}°C`}</Text>
                  </Text>
                  <Text>
                    <Text>The light level is</Text>
                    <Text style={{ fontWeight: 'bold' }}>{` ${currentDesk.light} Lux`}</Text>
                  </Text>
                </View>
              ) : null}
            </Card>
          ) : null}
      </View>
    );
  }
}
