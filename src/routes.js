import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

import Header from './components/Header';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: {
        header: ({ navigation }) => <Header navigation={navigation} />,
      },
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
