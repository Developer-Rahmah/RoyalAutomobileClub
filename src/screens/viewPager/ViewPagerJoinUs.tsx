import React from 'react'
import Header from 'RoyalAutomobileClub/src/components/Header'
import Title from 'RoyalAutomobileClub/src/components/Title'
import IconImage from 'RoyalAutomobileClub/IconImage'
import JoinUs from 'RoyalAutomobileClub/assets/images/join-us.png'
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles'
import { Colors } from 'RoyalAutomobileClub/assets/styles/Colors'
import { ContainerView, ImageAndTextContainer, ImageContainer, SliderTitleContainer, BtnIndicatorAndSkipContainer, GrayIndicator, OrangeIndicator, SkipContainer } from './styled'
import General from 'RoyalAutomobileClub/assets/styles/General'
import Button from 'RoyalAutomobileClub/src/components/Button'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

export default function ViewPagerJoinUs() {
  const navigation = useNavigation();
  return (
    <>
      <Header title='Onboard' showBack />
      <ContainerView>
        <ImageAndTextContainer
        >
          <ImageContainer
          >
            <IconImage source={JoinUs} style={ImageStyles.mediumImage} />
          </ImageContainer>
          <SliderTitleContainer
          >
            <Title title='Join Us' fontFamily='Poppins-Medium' large />
          </SliderTitleContainer>

          <View style={General.horizontalPadding}>
            <Title title='Join Us now as a new member in our family and get many Privileges' numberOfLines={2} small />
          </View>
        </ImageAndTextContainer>
        <BtnIndicatorAndSkipContainer>
          <GrayIndicator>
            <OrangeIndicator width='100%' />
          </GrayIndicator>

          <Button onClick={() => navigation.navigate('ViewPagerOffer')} txtColor={Colors.WHITE} title='Let’s Start' />

        </BtnIndicatorAndSkipContainer>
      </ContainerView>
    </>
  )
}
