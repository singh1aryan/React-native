import { DrawerNavigator } from 'react-navigation';

const Navigation = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});