import React, { Component } from 'react';
import PT from 'prop-types';
import { View } from 'react-native';
import BottomNavigation, { ShiftingTab } from 'react-native-material-bottom-navigation';
import { FontAwesome } from '@expo/vector-icons';

class BottomBar extends Component {
  tabs = [
    {
      key: 'desks',
      icon: 'laptop',
      label: 'desks',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'temperature',
      icon: 'thermometer-half',
      label: 'temperature',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'humidity',
      icon: 'tint',
      label: 'humidity',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'light',
      icon: 'sun-o',
      label: 'light',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'noise',
      icon: 'volume-down',
      label: 'noise',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
  ];

  renderTab = ({ tab, isActive }) => (
    <ShiftingTab
      key={tab.key}
      isActive={isActive}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
      labelStyle={{ color: '#007baf' }}
    />
  );

  renderIcon = iconName => ({ isActive }) => (
    <FontAwesome name={iconName} size={32} color={isActive ? '#007baf' : 'grey'} />
  );

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
            paddingLeft: 5,
            paddingRight: 5,
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
