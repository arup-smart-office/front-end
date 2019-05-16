import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Credits extends Component {
  render() {
    return (
      <View>
        <Text>
          Credits

          {"\n\n"}

          INSERT CREDIT USING THE FOLLOWING FORMAT
          - Name
          - What they are credited with
          - A link to them (website, social media, email)
          - An avatar
        </Text>
      </View>
    );
  }
}

export default Credits;