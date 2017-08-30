import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

//Screen Imports
import Home from './components/home';
import Browse from './components/browse';
import Settings from './components/settings';

const Router = TabNavigator(
  {
    Home: {
      screen: Home,
      path: '',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon
              name='home'
              type="material-community"
              size={28}
              color={tintColor} />
        ),
      }
    },
    Browse: {
      screen: Browse,
      path: '',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='magnify'
            type="material-community"
            size={28}
            color={tintColor} />
        )
      }
    },
    Settings: {
      screen: Settings,
      path: '',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="settings"
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
      showLabel: false,
      activeTintColor: '#2c3e50',
    },
  }
);

export default Router;
