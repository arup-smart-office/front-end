import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import {
  View,
} from 'react-native';
import styles from './DrawerStyle';

import Maps from '../components/Maps';
import TitleBar from '../components/TitleBar';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Arup Smart Office',
    // drawerIcon: ({ focused }) => (
    //   <Ionicons name="md-home" size={24} color={focused ? 'blue' : 'black'} />
    // ),
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
