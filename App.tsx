import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from 'RoyalAutomobileClub/src/navigations/AppNavigator';
import StatusBar from 'RoyalAutomobileClub/src/components/statusBar/index';
import {Root} from 'native-base';
import {isIphoneX} from 'react-native-iphone-x-helper';

const App = () => {
  return (
    <Root>
      <NavigationContainer>
        {isIphoneX() ? null : <StatusBar />}
        <AppNavigator />
      </NavigationContainer>
    </Root>
  );
};

export default App;
