import React, { Component } from 'react';
import { View, Text } from 'react-native';

class UserGuide extends Component {
  render() {
    return (
      <View >
        <Text >
          SMART Office User Guide

          {"\n\n"}

          Office Map View

          {"\n\n"}

          - Displays a map of the office with all desk spaces
          - Red chairs are occupied
          - Green chairs are available

          {"\n\n"}

          - Use the drop-down menu at the top to change offices

          {"\n\n"}

          Footer Bar

          {"\n\n"}

          - Desk Icon: Shows which desks are available
          - Temperature Icon: Shows the variation in temperature
          - Water Icon: Shows the variation in humidity
          - Sun Icon: Shows desks in bright light areas
          - Sound Icon: Shows desks in loud areas
        </Text>
      </View>
    );
  }
}

export default UserGuide;