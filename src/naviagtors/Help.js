import * as React from 'react';
import { Text, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import PT from 'prop-types';
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
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TitleBar />
        <Text
          style={styles.paragraph}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          Go back home
        </Text>
      </View>
    );
  }
}

Help.propTypes = {
  navigation: PT.shape({ navigate: PT.func.isRequired }).isRequired,
};

export default Help;
