import React from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/IconImage';
import RightArrow from 'RoyalAutomobileClub/assets/icons/right-arrow.png';
import LoginImg from 'RoyalAutomobileClub/assets/images/login.png';
import Lock from 'RoyalAutomobileClub/assets/icons/lock.png';
import User from 'RoyalAutomobileClub/assets/icons/user.png';
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';
import { Colors } from 'RoyalAutomobileClub/assets/styles/Colors';
import {
  ContainerView,
  ImageAndTextContainer,
  ImageContainer,
  SliderTitleContainer,
  BtnIndicatorAndSkipContainer,
  GrayIndicator,
  OrangeIndicator,
  SkipContainer,
} from './styled';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Button from 'RoyalAutomobileClub/src/components/Button';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

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
        <View style={{ flex: 0.5, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Title title='Welcome back ,' color={Colors.ORANGE} />
          <View style={{
            flex: 0.27, width: '100%', alignItems: 'center', borderWidth: 1, borderRadius: 5,
            borderColor: Colors.ORANGE, marginVertical: 10, flexDirection: 'row', padding: 5, paddingHorizontal: 15, justifyContent: 'flex-start'

          }}>
            <IconImage source={User} style={{ marginEnd: 10 }} small />
            <TextInput placeholder='Email'></TextInput>
          </View>
          <View style={{
            flex: 0.27, width: '100%', alignItems: 'center', borderWidth: 1, borderRadius: 5,
            borderColor: Colors.ORANGE, marginVertical: 10, flexDirection: 'row', padding: 5, paddingHorizontal: 15, justifyContent: 'flex-start'

          }}>
            <IconImage source={Lock} style={{ marginEnd: 10 }} small />
            <TextInput placeholder='Password'></TextInput>
          </View>

          <Title title='fff' style={{ marginTop: 15 }} />


        </View>
        <View style={{ flex: 0.5, width: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>

          <Button title='Login' txtColor={Colors.WHITE} />
          <Title title='Create an account' color={Colors.ORANGE} />
        </View>


      </ContainerView>
    </>
  );
}
