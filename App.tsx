import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from 'RoyalAutomobileClub/src/navigations/AppNavigator';
import StatusBar from 'RoyalAutomobileClub/src/components/statusBar/index';
import {Root} from 'native-base';
import {isIphoneX} from 'react-native-iphone-x-helper';
import AppLoading from 'expo-app-loading';
import {fetchFonts} from './assets/styles/Fonts';
import {Provider} from 'react-redux';
import store from './src/services/redux/store';

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <Root>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Root>
    </Provider>
  );
};

export default App;
