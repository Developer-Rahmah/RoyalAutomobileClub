import React from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import RightArrow from 'RoyalAutomobileClub/assets/icons/right-arrow.png';
import Offer from 'RoyalAutomobileClub/assets/images/offer.png';
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
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
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';

export default function ViewPagerOffer() {
  const navigation = useNavigation();

  return (
    <>
      <Header title="Onboard" showBack />
      <ContainerView>
        <ImageAndTextContainer>
          <ImageContainer>
            <IconImage source={Offer} style={ImageStyles.mediumImage} />
          </ImageContainer>
          <SliderTitleContainer>
            <Title title="Offer" fontFamily="Poppins-Medium" large />
          </SliderTitleContainer>

          <View style={General.horizontalPadding}>
            <Title
              title="Discover Our Latest Offers and discounts in our Club"
              numberOfLines={2}
              small
            />
          </View>
        </ImageAndTextContainer>
        <BtnIndicatorAndSkipContainer>
          <GrayIndicator>
            <OrangeIndicator width="67%" />
          </GrayIndicator>

          <Button
            onClick={() => navigation.navigate('ViewPagerJoinUs')}
            txtColor={Colors.WHITE}
            title="Continue"
          />
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <SkipContainer>
              <Title
                title="Skip"
                color={Colors.ORANGE}
                style={{marginEnd: 3}}
              />

              <IconImage
                source={RightArrow}
                small
                style={{marginStart: 3, resizeMode: 'contain'}}
              />
            </SkipContainer>
          </TouchableOpacity>
        </BtnIndicatorAndSkipContainer>
      </ContainerView>
    </>
  );
}
