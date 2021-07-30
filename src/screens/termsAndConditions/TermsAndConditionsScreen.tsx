import React from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import {
  ContainerView,
  ImageAndTextContainer,
} from 'RoyalAutomobileClub/src/screens/aboutUs/AboutUsScreenStyled';
import {ScrollView, View, StyleSheet} from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Terms from 'RoyalAutomobileClub/assets/images/terms.png';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';

export default function TermsAndConditionsScreen() {
  const styles = StyleSheet.create({
    marginEnd: {
      marginEnd: 3,
    },
    paginationContainer: {
      paddingVertical: 8,
    },
    paginationDot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      marginHorizontal: 0,
      marginVertical: 5,
    },
  });
  return (
    <>
      <Header title="Terms & Condition" showBack showBell />

      <ScrollView>
        <ContainerView>
          <ImageAndTextContainer>
            <IconImage
              source={Terms}
              style={[ImageStyles.teaserImage, {marginBottom: 30}]}
            />
          </ImageAndTextContainer>
          <Title
            color={Colors.SEMI_BLACK}
            style={{
              textAlign: 'left',
              fontSize: 13,
              lineHeight: 20,
              marginVertical: 10,
            }}
            numberOfLines={0}
            title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo"
          />

          <Title
            color={Colors.SEMI_BLACK}
            style={{
              textAlign: 'left',
              fontSize: 13,
              lineHeight: 20,
              marginVertical: 10,
            }}
            numberOfLines={0}
            title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo"
          />

          <Title
            color={Colors.SEMI_BLACK}
            style={{
              textAlign: 'left',
              fontSize: 13,
              lineHeight: 20,
              marginVertical: 10,
            }}
            numberOfLines={0}
            title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo"
          />

          <Title
            color={Colors.SEMI_BLACK}
            style={{
              textAlign: 'left',
              fontSize: 13,
              lineHeight: 20,
              marginVertical: 10,
            }}
            numberOfLines={0}
            title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo"
          />

          <View style={Elements.loginFieldsContainer} />
        </ContainerView>
      </ScrollView>
    </>
  );
}
