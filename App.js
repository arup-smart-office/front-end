import {
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import {
  Home, AdminPage, Profile, OfficePlan, Help,
} from './src/naviagtors/Drawer';


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
