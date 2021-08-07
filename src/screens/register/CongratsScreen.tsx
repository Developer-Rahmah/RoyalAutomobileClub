import React from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import Congrats from 'RoyalAutomobileClub/assets/images/congrats.png';
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import {
  ContainerView,
  ImageAndTextContainer,
  ImageContainer,
  SliderTitleContainer,
} from './styled';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Button from 'RoyalAutomobileClub/src/components/Button';
import {useNavigation} from '@react-navigation/native';
import {AsyncStorage, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAuthTokenAction} from 'RoyalAutomobileClub/src/services/redux/actions';
import {useEffect} from 'react';

export default function CongratsScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <>
      <Header title="Confirmation" showBack />
      <ContainerView
        style={{justifyContent: 'space-evenly', backgroundColor: 'white'}}>
        <ImageAndTextContainer>
          <ImageContainer>
            <IconImage
              transform={false}
              source={Congrats}
              style={ImageStyles.congratsImage}
            />
          </ImageContainer>
          <SliderTitleContainer>
            <Title title="Congrats !" fontFamily="Poppins-Medium" large />
          </SliderTitleContainer>

          <View style={[General.horizontalPadding]}>
            <Title
              title="The registration request has been successfully received. Your information will be verified to activate the account within 72 hours"
              numberOfLines={3}
              style={styles.description}
              color={Colors.LIGHT_GRAY_4}
              fontFamily={'Poppins-Regular'}
              small
            />
          </View>
        </ImageAndTextContainer>

        <Button
          onClick={() => navigation.navigate('LoginScreen')}
          txtColor={Colors.WHITE}
          title="Continue to Home"
        />
      </ContainerView>
    </>
  );
}

const styles = StyleSheet.create({
  description: {
    lineHeight: 23,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
