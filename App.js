import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
import styles from './src/naviagtors/DrawerStyle';
import {
  Home, AdminPage, Profile, OfficePlan, Help,
} from './src/naviagtors/Drawer';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
      <Image
        style={styles.image}
        source={{
          uri: 'https://appjs.co/wp-content/uploads/2015/09/brent3-458x458.png',
        }}
      />
    </SafeAreaView>
  </ScrollView>
);

const navigator = createDrawerNavigator(
  {
    Home,
    OfficePlan,
    Profile,
    AdminPage,
    Help,
  },
  {
    drawerType: 'slide',
    drawerPosition: 'left',
  },
);

export default createAppContainer(navigator);
