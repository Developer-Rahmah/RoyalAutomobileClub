import React, {useEffect} from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import {ContainerView} from 'RoyalAutomobileClub/src/screens/settings/SettingsScreenStyled';
import {
  ScrollView,
  StyleSheet,
  View,
  Switch,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import LocalStorage from 'RoyalAutomobileClub/src/services/helper/LocalStorage';
import {useDispatch} from 'react-redux';
import * as Updates from 'expo-updates';
import {setLanguageAction} from 'RoyalAutomobileClub/src/services/redux/actions';
import Title from 'RoyalAutomobileClub/src/components/Title';
import Arrow from 'RoyalAutomobileClub/assets/icons/arrow.png';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import SettingSection from './SettingSection';
import {useNavigation} from '@react-navigation/native';

export default function SettingsScreen() {
  const [lang, setLang] = useState('');
  const getLang = async () => {
    const language = await LocalStorage.get('lang');

    setLang(language);
    setIsEN(language === 'ar');
    // return language;
  };
  useEffect(() => {
    getLang();
  }, []);
  console.log('language', lang);

  const dispatch = useDispatch();
  const [isNotificationsOn, setIsNotificationsOn] = useState(false);
  const [isEN, setIsEN] = useState(lang === 'en');
  const toggleSwitchNotification = () =>
    setIsNotificationsOn((previousState) => !previousState);
  const toggleSwitchLang = async () => {
    setIsEN((previousState) => !previousState);
    // await LocalStorage.set('lang', lang === 'ar' ? 'en' : 'ar');
    // console.log(object)
    //t;
    dispatch(setLanguageAction(lang === 'ar' ? 'en' : 'ar'));
    LocalStorage.set('lang', lang === 'ar' ? 'en' : 'ar');
    I18nManager.forceRTL(lang === 'en');
    Updates.reloadAsync(); // alert(isEN)
  };

  const styles = StyleSheet.create({
    marginEnd: {
      marginEnd: 3,
    },
  });
  const navigation = useNavigation();

  return (
    <>
      <Header title="Settings" showMenu showBell />

      <ScrollView>
        <ContainerView style={{justifyContent: 'space-evenly'}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginBottom: 20,
              justifyContent: 'space-between',
            }}>
            <Title color={Colors.LIGHT_GRAY_7} title="Notifications" />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Title color={Colors.LIGHT_GRAY_7} title="OFF" />
              <Switch
                style={{marginHorizontal: 10}}
                trackColor={{
                  false: Colors.LIGHT_GRAY_5,
                  true: Colors.LIGHT_GRAY_5,
                }}
                thumbColor={Colors.GREEN_2}
                ios_backgroundColor={Colors.LIGHT_GRAY_5}
                onValueChange={toggleSwitchNotification}
                value={isNotificationsOn}
              />
              <Title color={Colors.LIGHT_GRAY_7} title="ON" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',

              justifyContent: 'space-between',
            }}>
            <Title color={Colors.LIGHT_GRAY_7} title="Language" />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Title color={Colors.LIGHT_GRAY_7} title="EN" />
              <Switch
                style={{marginHorizontal: 10}}
                trackColor={{
                  false: Colors.LIGHT_GRAY_5,
                  true: Colors.LIGHT_GRAY_5,
                }}
                thumbColor={Colors.ORANGE}
                ios_backgroundColor={Colors.LIGHT_GRAY_5}
                onValueChange={toggleSwitchLang}
                value={isEN}
              />
              <Title color={Colors.LIGHT_GRAY_7} title="AR" />
            </View>
          </View>
          <SettingSection
            onPress={() => {
              navigation.navigate('UpdateScreen');
            }}
            text="Profile"
          />
          <SettingSection text="Notifications" />
          <SettingSection
            onPress={() => {
              navigation.navigate('AboutAppScreen');
            }}
            text="About App"
          />
          <SettingSection text="Privacy Policy" />
          <SettingSection text="Terms & Conditions" />
        </ContainerView>
      </ScrollView>
    </>
  );
}
