import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import {
  Text, View, Image, ScrollView, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './DrawerStyle';
import TitleBar from '../components/TitleBar';

// Drawer Admin Page Component
class AdminPage extends React.Component {
  static navigationOptions = {
    title: 'Admin Page',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-stats" size={24} color={focused ? 'blue' : 'black'} />
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

export default AdminPage;
