import React from 'react';
import { Text, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import PT from 'prop-types';
import styles from './DrawerStyle';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';

// Drawer Admin Page Component
class AdminPage extends React.Component {
  static navigationOptions = {
    title: 'Analytics',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-stats" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  state = {
    currentDisplay: 'desks',
  };

  handleBottomBarClick = (newTab) => {
    this.setState({ currentDisplay: newTab.key });
  };

  render() {
    const { currentDisplay } = this.state;
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
        <BottomBar onClick={this.handleBottomBarClick} activeTab={currentDisplay} />
      </View>
    );
  }
}

AdminPage.propTypes = {
  navigation: PT.shape({ navigate: PT.func.isRequired }).isRequired,
};

export default AdminPage;
