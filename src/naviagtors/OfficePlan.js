import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';


class OfficePlan extends React.Component {
  static navigationOptions = {
    title: 'Office Map',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-map" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return <Home />;
  }
}

export default OfficePlan;
