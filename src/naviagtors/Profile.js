import React from 'react';
import {
  Text, View, Image, ScrollView, StyleSheet,
} from 'react-native';
import styles from './DrawerStyle';
import { Ionicons } from '@expo/vector-icons';
import TitleBar from '../components/TitleBar';
class Profile extends React.Component {
  static navigationOptions = {
    title: 'User Profile',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
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

export default Profile;
