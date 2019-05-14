import React, { Component } from 'react';
import PT from 'prop-types';
import { View } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';

class BottomBar extends Component {
  tabs = [
    {
      key: 'seats',
      icon: 'gamepad-variant',
      label: 'seats',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'temperature',
      icon: 'movie',
      label: 'temperature',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'humidity',
      icon: 'music-note',
      label: 'humidity',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'light',
      icon: 'gamepad-variant',
      label: 'light',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'noise',
      icon: 'movie',
      label: 'noise',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
  ];

  renderTab = ({ tab, isActive }) => (
    <FullTab key={tab.key} isActive={isActive} label={tab.label} renderIcon={this.renderIcon} />
  );

  renderIcon = ({ isActive }) => <View />;

  render() {
    const { activeTab, onClick } = this.props;
    return (
      <View>
        <BottomNavigation
          activeTab={activeTab}
          onTabPress={onClick}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }
}

BottomBar.propTypes = {
  activeTab: PT.string.isRequired,
  onClick: PT.func.isRequired,
};

export default BottomBar;
