import React from 'react';
import Home from './Home'
import { Ionicons } from '@expo/vector-icons';


class OfficePlan extends React.Component {
  static navigationOptions = {
    title: 'View Office Map',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-map" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return <Home />;
  }
}

export default OfficePlan;
