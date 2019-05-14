import * as React from 'react';
import {
  Text, View, Image, ScrollView, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './DrawerStyle';
import TitleBar from '../components/TitleBar';

class Help extends React.Component {
  static navigationOptions = {
    title: 'Help',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-help-circle-outline" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <TitleBar />
        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        >
          Go back home
        </Text>
      </View>
    );
  }
}

export default Help;
