import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Screen Imports
import Browse from './components/browse';
import Settings from './components/settings';

/**
* This is the router class that handles all of the routing
* for the entire application.
*/

const Router = TabNavigator(
  {
    Browse: {
      screen: Browse,
      path: '',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="magnify"
            type="material-community"
            size={28}
            color={tintColor} />
        ),
      }
    },
    Settings: {
      screen: Settings,
      path: '',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="logout"
            type="material-community"
            size={28}
            color={tintColor} />
        )
      }
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#3498db',
    },
  }
);

export default Router;
