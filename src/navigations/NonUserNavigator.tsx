import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from 'RoyalAutomobileClub/src/screens/welcome/WelcomeScreen';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguageAction} from '../services/redux/actions';
import LocalStorage from '../services/helper/LocalStorage';
import {I18nManager} from 'react-native';
import ViewPagerDiscover from '../screens/viewPager/ViewPagerDiscover';
import ViewPagerOffer from '../screens/viewPager/ViewPagerOffer';
import ViewPagerJoinUs from '../screens/viewPager/ViewPagerJoinUs';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import CongratsScreen from '../screens/register/CongratsScreen';
import ForgotPasswordEmail from '../screens/forgotPassowrd/ForgotPasswordEmail';
import ForgotPasswordCode from '../screens/forgotPassowrd/ForgotPasswordCode';
import ForgotPasswordReset from '../screens/forgotPassowrd/ForgotPasswordReset';

const NonUserNavigator = () => {
  interface RootState {
    langCode: string;
  }

  const selectLangCode = (state: RootState) => state.langCode;
  const langCode = useSelector(selectLangCode);
  const dispatch = useDispatch();
  const getLang = async () => {
    const lang = await LocalStorage.get('lang');

    dispatch(setLanguageAction(lang));
    // if (lang == 'ar') {
    //   I18nManager.forceRTL(true);
    // } else {
    //   I18nManager.forceRTL(false);
    // }
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
            <Stack.Screen
              name="ViewPagerDiscover"
              component={ViewPagerDiscover}
            />
            <Stack.Screen name="ViewPagerOffer" component={ViewPagerOffer} />
            <Stack.Screen name="ViewPagerJoinUs" component={ViewPagerJoinUs} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
              name="ForgotPasswordEmail"
              component={ForgotPasswordEmail}
            />
            <Stack.Screen
              name="ForgotPasswordCode"
              component={ForgotPasswordCode}
            />
            <Stack.Screen
              name="ForgotPasswordReset"
              component={ForgotPasswordReset}
            />

            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="CongratsScreen" component={CongratsScreen} />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};

export default NonUserNavigator;
