import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

//Screen Imports
import Home from './components/home';

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
