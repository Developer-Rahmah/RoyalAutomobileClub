import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from 'RoyalAutomobileClub/src/screens/welcome/WelcomeScreen';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguageAction } from '../services/redux/actions';
import LocalStorage from '../services/helper/LocalStorage';
import { I18nManager } from 'react-native';
import ViewPagerDiscover from '../screens/viewPager/ViewPagerDiscover';
import ViewPagerOffer from '../screens/viewPager/ViewPagerOffer';
import ViewPagerJoinUs from '../screens/viewPager/ViewPagerJoinUs';
import LoginScreen from '../screens/login/LoginScreen';

const AppNavigator = () => {
  interface RootState {
    langCode: string;
  }
  const selectLangCode = (state: RootState) => state.langCode;
  const langCode = useSelector(selectLangCode);
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
    <>
      <Stack.Navigator headerMode="none">
        {langCode == null ? (
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        ) : (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />

            <Stack.Screen
              name="ViewPagerDiscover"
              component={ViewPagerDiscover}
            />
            <Stack.Screen name="ViewPagerOffer" component={ViewPagerOffer} />
            <Stack.Screen name="ViewPagerJoinUs" component={ViewPagerJoinUs} />


          </>
        )}
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
