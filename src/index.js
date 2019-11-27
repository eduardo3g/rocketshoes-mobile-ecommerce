import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from './store';
import './config/ReactotronConfig';

import Routes from './routes';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Routes
        ref={navigationRef => NavigationService.setNavigator(navigationRef)}
      />
    </Provider>
  );
}
