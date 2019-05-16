import React from 'react';
import { Text, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import PT from 'prop-types';
import styles from './DrawerStyle';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import Analytics from '../components/Analytics';
import Analytics2 from '../components/Analytics2';

// Drawer Admin Page Component
class AdminPage extends React.Component {
  static navigationOptions = {
    title: 'Analytics',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-stats" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  state = {
    CurrentDisplay: Analytics,
    selected: 'desks',
  };

  handleBottomBarClick = (newTab) => {
    if (newTab.key === 'temperature') {
      this.setState({ CurrentDisplay: Analytics2, selected: newTab.key });
    }
    if (newTab.key === 'desks') {
      this.setState({ CurrentDisplay: Analytics, selected: newTab.key });
    }
  };

  render() {
    const { CurrentDisplay, selected } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TitleBar />
        <CurrentDisplay />
        <BottomBar onClick={this.handleBottomBarClick} activeTab={selected} />
      </View>
    );
  }
}

AdminPage.propTypes = {
  navigation: PT.shape({ navigate: PT.func.isRequired }).isRequired,
};

export default AdminPage;
