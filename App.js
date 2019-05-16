import React from 'react';
import {
  createDrawerNavigator,
  createAppContainer,
  SafeAreaView,
  DrawerItems,
} from 'react-navigation';
import { ScrollView, StyleSheet, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {
  AdminPage, Profile, OfficePlan, Help,
} from './src/naviagtors/Drawer';
import Logo from './src/assets/logo.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CustomDrawerContentComponent = props => (
  <View style={{ paddingTop: 60, paddingLeft: 10 }}>
    <SvgUri width="265" height="36.62383634" source={Logo} />
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  </View>
);

const navigator = createDrawerNavigator(
  {
    OfficePlan,
    Profile,
    AdminPage,
    Help,
  },
  {
    drawerType: 'slide',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
  },
);

export default createAppContainer(navigator);
