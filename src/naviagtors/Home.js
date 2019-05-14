import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import {
  Text, View, Image, ScrollView, StyleSheet,
} from 'react-native';
import { Constants } from 'expo';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
import styles from './DrawerStyle';

import { Ionicons } from '@expo/vector-icons';
import Maps from '../components/Maps';
import TitleBar from '../components/TitleBar';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Arup Smart Office',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-home" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <ThemeProvider>
          <TitleBar />
          <Maps />
        </ThemeProvider>
      </View>
    );
  }
}

export default Home;
