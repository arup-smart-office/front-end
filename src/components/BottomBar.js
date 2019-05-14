import React, { Component } from 'react';
import PT from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';

class BottomBar extends Component {
  tabs = [
    {
      key: 'seats',
      icon: 'gamepad-variant',
      label: 'seats',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'temperature',
      icon: 'movie',
      label: 'temperature',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'humidity',
      icon: 'music-note',
      label: 'humidity',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'light',
      icon: 'gamepad-variant',
      label: 'light',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'noise',
      icon: 'movie',
      label: 'noise',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
  ];

  renderTab = ({ tab, isActive }) => (
    <FullTab
      key={tab.key}
      isActive={isActive}
      label={tab.label}
      renderIcon={this.renderIcon}
      labelStyle={{ color: 'grey' }}
    />
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
          style={{
            elevation: 25,
            shadowOffset: { width: 5, height: 5 },
            shadowColor: 'grey',
            shadowOpacity: 0.5,
            shadowRadius: 10,
            marginTop: 3,
          }}
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
