import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HelpText extends Component {

  render() {
    const {page} = props;

    const About = <Text>This is the about page</Text>

    const FAQs = <Text>This is the FAQ page!</Text>
    return (
      <View>
        {About}
      </View>
    );
  }
}

export default HelpText;
