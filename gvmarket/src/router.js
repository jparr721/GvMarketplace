import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Screen Imports
import Browse from './components/browse';
import Inbox from './components/inbox';
import Profile from './components/profile';
import Sell from './components/sell';

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
    Sell: {
      screen: Sell,
      path: '',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="plus-box-outline"
            type='material-community'
            size={28}
            color={tintColor} />
        )
      }
    },
    Inbox: {
      screen: Inbox,
      path: '',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="message-outline"
            type="material-community"
            size={28}
            color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      path: '',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="account-outline"
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
