import React from 'react';
import { Text, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import PT from 'prop-types';
import styles from './DrawerStyle';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import OccupancyChart from '../components/OccupancyChart';
import TempChart from '../components/TempChart';
import HumidChart from '../components/HumidChart';
import LightChart from '../components/LightChart';
import NoiseChart from '../components/NoiseChart';

// Drawer Admin Page Component
class AdminPage extends React.Component {
  static navigationOptions = {
    title: 'Analytics',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-stats" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  state = {
    CurrentDisplay: OccupancyChart,
    selected: 'desks',
  };

  handleBottomBarClick = (newTab) => {
    if (newTab.key === 'temperature') {
      this.setState({ CurrentDisplay: TempChart, selected: newTab.key });
    }
    if (newTab.key === 'desks') {
      this.setState({ CurrentDisplay: OccupancyChart, selected: newTab.key });
    }
    if (newTab.key === 'humidity') {
      this.setState({ CurrentDisplay: HumidChart, selected: newTab.key });
    }
    if (newTab.key === 'light') {
      this.setState({ CurrentDisplay: LightChart, selected: newTab.key });
    }
    if (newTab.key === 'noise') {
      this.setState({ CurrentDisplay: NoiseChart, selected: newTab.key });
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
