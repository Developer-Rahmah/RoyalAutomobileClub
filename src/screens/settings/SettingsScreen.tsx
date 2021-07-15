import React, {useEffect} from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import {ContainerView} from 'RoyalAutomobileClub/src/screens/settings/SettingsScreenStyled';
import {ScrollView, StyleSheet, View, Switch, I18nManager} from 'react-native';
import {useState} from 'react';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import LocalStorage from 'RoyalAutomobileClub/src/services/helper/LocalStorage';
import {useDispatch} from 'react-redux';
import * as Updates from 'expo-updates';
import {setLanguageAction} from 'RoyalAutomobileClub/src/services/redux/actions';
import Title from 'RoyalAutomobileClub/src/components/Title';
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

  return (
    <>
      <Header title="Settings" showMenu showBell />

      <ScrollView>
        <ContainerView>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginBottom: 20,
              justifyContent: 'space-between',
            }}>
            <Title title="Notifications" />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Title title="OFF" />
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
              <Title title="ON" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',

              justifyContent: 'space-between',
            }}>
            <Title title="Language" />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Title title="EN" />
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
              <Title title="AR" />
            </View>
          </View>
        </ContainerView>
      </ScrollView>
    </>
  );
}
