import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ZoomableSvg from 'zoomable-svg';
import SvgRoot from './SvgRoot';
import InfoCard from './InfoCard';
import BottomBar from './BottomBar';

export default class Maps extends Component {
  state = { map: { width: 0, height: 0 }, currentDesk: null, currentDisplay: 'desks' };

  mapSize = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ map: { width, height } });
  };

  updatedSelectedDesk = (currentDesk) => {
    if (currentDesk !== undefined) this.setState({ currentDesk });
  };

  handleBottomBarClick = (newTab) => {
    this.setState({ currentDisplay: newTab.key });
  };

  render() {
    const { currentDesk } = this.state;

    const {
      map: { width, height },
      map,
      currentDisplay,
    } = this.state;

    const constraints = {
      // combine: 'dynamic',
      scaleExtent: [width / height, 5],
      translateExtent: [[0, 0], [155, 405]],
    };

    return (
      <View
        onLayout={this.svgSize}
        style={{
          flex: 1,
          alignSelf: 'stretch',
          marginBottom: 0,
        }}
      >
        <View
          onLayout={this.mapSize}
          style={{
            flex: 1,
            alignSelf: 'stretch',
            margin: 0,
            marginBottom: 0,
            paddingBottom: 0,
          }}
        >
          {/* <ScrollView>
            <SvgRoot updatedSelectedDesk={this.updatedSelectedDesk} map={map} currentDesk={currentDesk} currentDisplay={currentDisplay} />
          </ScrollView> */}
          <ZoomableSvg
            align="xMid"
            vbWidth="155"
            vbHeight="405"
            width={width}
            height={height}
            meetOrSlice="meet"
            svgRoot={SvgRoot}
            constrain={constraints}
            childProps={
              {
                updatedSelectedDesk: this.updatedSelectedDesk, map, currentDesk, currentDisplay,
              }}
          />
        </View>

        {currentDesk ? (
          <InfoCard currentDesk={currentDesk} />
        ) : (
            <BottomBar onClick={this.handleBottomBarClick} activeTab={currentDisplay} />
          )}
      </View>
    );
  }
}
