import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Copyright extends Component {
  render() {
    return (
      <View>
        <Text>
          Copyright Notice

          {"\n\n"}

          This application is the property of Ove Arup & Partners Ltd.

          {"\n\n"}

          Reproduction and distribution of this application without written permission is prohibited.

          --------------INSERT COPYRIGHT SYMBOL!!--------------------------

          {"\n\n"}

          --------------INSERT LOGO!!--------------------------
        </Text>
      </View>
    );
  }
}

export default Copyright;