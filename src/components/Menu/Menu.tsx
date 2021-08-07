import {NavigationContext, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AsyncStorage, ImageBackground, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import IconImage from '../IconImage';
import John from 'RoyalAutomobileClub/assets/images/john.png';
import MenuBackground from 'RoyalAutomobileClub/assets/images/menu-background.png';
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';
import Title from '../Title';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Home from 'RoyalAutomobileClub/assets/svg/Home.svg';
import AboutUs from 'RoyalAutomobileClub/assets/svg/AboutUs.svg';
import Facilities from 'RoyalAutomobileClub/assets/svg/Facilities.svg';
import Football from 'RoyalAutomobileClub/assets/svg/Football.svg';
import Wallet from 'RoyalAutomobileClub/assets/svg/Wallet.svg';
import Calendar from 'RoyalAutomobileClub/assets/svg/Calendar.svg';
import News from 'RoyalAutomobileClub/assets/svg/News.svg';
import Settings from 'RoyalAutomobileClub/assets/svg/Settings.svg';
import ContactUs from 'RoyalAutomobileClub/assets/svg/ContactUs.svg';
import Logout from 'RoyalAutomobileClub/assets/svg/Logout.svg';
import Img from 'RoyalAutomobileClub/assets/images/img.png';

import MenuItem from './MenuItem';

const Menu = () => {
  const [image, setImage] = useState(null);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState();
  const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
      if (value !== null) {
        // We have data!!
        setUser(JSON.parse(value));
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={MenuBackground}
      style={[Layout.flexDirectionRow, Layout.cardPadding, {flex: 1}]}>
      <ScrollView>
        <NavigationContext.Provider value={navigation}>
          <View style={styles.container}>
            {user.image ? (
              <IconImage
                source={{uri: user.image}}
                style={[ImageStyles.teaserImage, {borderRadius: 100}]}
              />
            ) : (
              <IconImage source={Img} style={[ImageStyles.teaserImage]} />
            )}
            {/* <IconImage source={John} style={ImageStyles.teaserImage} /> */}
            <Title
              title={user.first_name + ' ' + user.last_name}
              color={Colors.ORANGE}
            />
          </View>
          <View>
            <MenuItem screenName="HomeScreen" title="Home">
              <Home height={27} width={27} />
            </MenuItem>
            <MenuItem screenName="AboutUsScreen" title="About Us">
              <AboutUs height={27} width={27} />
            </MenuItem>

            <MenuItem title="Facilities">
              <Facilities height={27} width={27} />
            </MenuItem>

            <MenuItem screenName="AllServicesScreen" title="Services">
              <Football height={27} width={27} />
            </MenuItem>

            {/* <MenuItem title="Wallet">
              <Wallet height={27} width={27} />
            </MenuItem> */}

            <MenuItem title="Reservation">
              <Calendar height={27} width={27} />
            </MenuItem>

            <MenuItem title="News & Events">
              <News height={27} width={27} />
            </MenuItem>

            <MenuItem screenName="SettingsScreen" title="Settings">
              <Settings height={27} width={27} />
            </MenuItem>

            <MenuItem screenName="ContactUsScreen" title="Contact Us">
              <ContactUs height={27} width={27} />
            </MenuItem>
            <View style={{paddingTop: '17%'}}>
              <MenuItem title="Logout">
                <Logout height={27} width={27} />
              </MenuItem>
            </View>
          </View>
        </NavigationContext.Provider>
      </ScrollView>
    </ImageBackground>
  );
};

export default Menu;
const styles = StyleSheet.create({
  container: {
    paddingVertical: '13%',
    paddingBottom: '6%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
