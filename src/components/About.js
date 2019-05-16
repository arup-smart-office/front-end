import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

// eslint-disable-next-line react/prefer-stateless-function
class About extends Component {
  render() {
    return (
        <Text>
          Hi there! Welcome to the Arup SMART Office App!
          
          {"\n\n"}

          This app has been produced by a group of gifted developers from the Arup NWY Devs Team!

          {"\n\n"}

          We have developed this app to provide a dynamic user experience to those who use and visit any of our office spaces.

          {"\n\n"}

          If you find something that isn't to your liking, or feel you have some ideas that could help us to develop to app further, please visit our Contact page and leave us some feedback.
        </Text>
    );
  }
}

export default About;
