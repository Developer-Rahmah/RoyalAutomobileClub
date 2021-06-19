import React from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import LoginImg from 'RoyalAutomobileClub/assets/images/login.png';
import Lock from 'RoyalAutomobileClub/assets/icons/lock.png';
import User from 'RoyalAutomobileClub/assets/icons/user.png';
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import {ContainerView, ImageAndTextContainer, ImageContainer} from './styled';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Button from 'RoyalAutomobileClub/src/components/Button';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <>
      <Header title="Onboard" />
      <ContainerView>
        <ImageAndTextContainer>
          <ImageContainer>
            <IconImage source={LoginImg} style={ImageStyles.mediumImage} />
          </ImageContainer>
        </ImageAndTextContainer>
        <View style={Elements.loginFieldsContainer}>
          <Title title="Welcome back ," color={Colors.ORANGE} />
          <View style={Elements.inputContainer}>
            <IconImage source={User} style={General.smallEndMargin} small />
            <TextInput placeholder="Email" />
          </View>
          <View style={Elements.inputContainer}>
            <IconImage source={Lock} style={General.smallEndMargin} small />
            <TextInput placeholder="Password" />
          </View>

          <Title
            title="Forget Password?"
            style={General.smallTopMargin}
            color={Colors.ORANGE}
          />
        </View>
        <View style={Elements.btnContainer}>
          <Button title="Login" txtColor={Colors.WHITE} />
          <Title title="Create an account" color={Colors.ORANGE} />
        </View>
      </ContainerView>
    </>
  );
}
