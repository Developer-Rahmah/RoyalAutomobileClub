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
import {StyleSheet, View} from 'react-native';

export default function CongratsScreen() {
  const navigation = useNavigation();
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
          // onClick={() => navigation.navigate('LoginScreen')}
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
