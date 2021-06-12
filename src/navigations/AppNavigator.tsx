import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from 'RoyalAutomobileClub/src/screens/welcome/WelcomeScreen';
import {useDispatch} from 'react-redux';
import {setLanguageAction} from '../services/redux/actions';
import LocalStorage from '../services/helper/LocalStorage';
import {I18nManager} from 'react-native';

const AppNavigator = () => {
  const dispatch = useDispatch();

  const getLang = async () => {
    const lang = await LocalStorage.get('lang');

    dispatch(setLanguageAction(lang));
    if (lang == 'ar') {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  };
  useEffect(() => {
    getLang();
  }, []);

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
