import {AppRegistry} from 'react-native';
import t from 'RoyalAutomobileClub/base64Polyfill';
import App from 'RoyalAutomobileClub/App';
import {name as appName} from 'RoyalAutomobileClub/app.json';
import {Provider} from 'react-redux';
import store from 'RoyalAutomobileClub/src/services/redux/store';
import React from 'react';

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Application, t);
