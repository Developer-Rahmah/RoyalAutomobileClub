import React from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import RightArrow from 'RoyalAutomobileClub/assets/icons/right-arrow.png';
import Discover from 'RoyalAutomobileClub/assets/images/discover.png';
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
import {View} from 'react-native';

export default function ViewPagerDiscover() {
  const navigation = useNavigation();
  return (
    <>
      <Header title="Onboard" />
      <ContainerView>
        <ImageAndTextContainer>
          <ImageContainer>
            <IconImage source={Discover} style={ImageStyles.mediumImage} />
          </ImageContainer>
          <SliderTitleContainer>
            <Title title="Discover" fontFamily="Poppins-Medium" large />
          </SliderTitleContainer>

          <View style={General.horizontalPadding}>
            <Title
              title="Discover our services and Facilities that we offer to our members"
              numberOfLines={2}
              small
            />
          </View>
        </ImageAndTextContainer>
        <BtnIndicatorAndSkipContainer>
          <GrayIndicator>
            <OrangeIndicator width="33%" />
          </GrayIndicator>

          <Button
            onClick={() => navigation.navigate('ViewPagerOffer')}
            txtColor={Colors.WHITE}
            title="Continue"
          />
          <SkipContainer>
            <Title title="Skip" color={Colors.ORANGE} style={{marginEnd: 3}} />
            <IconImage
              source={RightArrow}
              small
              style={{marginStart: 3, resizeMode: 'contain'}}
            />
          </SkipContainer>
        </BtnIndicatorAndSkipContainer>
      </ContainerView>
    </>
  );
}
