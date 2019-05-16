import React, { Component } from 'react';
import PT from 'prop-types';
import { View } from 'react-native';
import BottomNavigation, { ShiftingTab } from 'react-native-material-bottom-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class HelpNav extends Component {
  tabs = [
    {
      key: 'About',
      icon: 'information-variant',
      label: 'About',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'User Guide',
      icon: 'newspaper',
      label: 'User Guide',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'FAQs',
      icon: 'comment-question-outline',
      label: 'FAQs',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'Contact',
      icon: 'email',
      label: 'Contact',
      barColor: '#ffffff',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'Credits',
      icon: 'thumb-up-outline',
      label: 'Credits',
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
    <MaterialCommunityIcons name={iconName} size={32} color={isActive ? '#007baf' : 'grey'} />
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

HelpNav.propTypes = {
  activeTab: PT.string.isRequired,
  onClick: PT.func.isRequired,
};

export default HelpNav;
