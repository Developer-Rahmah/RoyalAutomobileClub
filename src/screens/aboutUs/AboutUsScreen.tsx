import React from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import {
  ContainerView,
  GrayIndicator,
  ImageAndTextContainer,
  CarouselContainer,
  OrangeIndicator,
  ImageCarousel,
  SectionHeader,
  MoreTxtContainer,
} from 'RoyalAutomobileClub/src/screens/aboutUs/AboutUsScreenStyled';
import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SCREEN_WIDTH} from 'RoyalAutomobileClub/src/services/helper/Constant';
import {useState} from 'react';
import Rows from 'RoyalAutomobileClub/src/components/Rows';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import More from 'RoyalAutomobileClub/assets/icons/more.png';
import {Gallery} from './static/Gallery';
import GridCard from 'RoyalAutomobileClub/src/components/GridCard';
import {useNavigation} from '@react-navigation/native';
export default function AboutUsScreen() {
  const [sliderActiveSlide, setSliderActiveSlide] = useState(1);
  const navigation = useNavigation();
  const _renderItem = ({item}) => {
    return <ImageCarousel source={item.image} />;
  };
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
      <Header title="About Us" showMenu showBell />

      <ScrollView>
        <ContainerView>
          <ImageAndTextContainer>
            <CarouselContainer>
              <Carousel
                data={Gallery}
                renderItem={_renderItem}
                sliderWidth={SCREEN_WIDTH / 1.1}
                itemWidth={SCREEN_WIDTH / 1.1}
                hasParallaxImages={true}
                firstItem={1}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                // inactiveSlideShift={20}
                loop={false}
                loopClonesPerSide={1}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
                onSnapToItem={(index) => setSliderActiveSlide(index)}
              />
              <View style={{marginBottom: 20}}>
                <Pagination
                  dotsLength={Gallery.length}
                  activeDotIndex={sliderActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={Colors.ORANGE}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={Colors.BLACK}
                  inactiveDotOpacity={0.5}
                  inactiveDotScale={0.6}
                />
              </View>

              {/* <GrayIndicator>
                <OrangeIndicator
                  width={sliderActiveSlide * Gallery.length * 9 + '%'}
                />
              </GrayIndicator> */}
            </CarouselContainer>
          </ImageAndTextContainer>
          <Title
            color={Colors.SEMI_BLACK}
            style={{textAlign: 'left', fontSize: 13, lineHeight: 20}}
            numberOfLines={0}
            title="The Royal Automobile Club of JordanSince 1952 The past 60 years witnessed the rise of the Royal Automobile Club of Jordan. Once a small four-room building and a handful of members, the RACJ has successfully developed into a vibrant community with a wide range of indoor and outdoor amenities, driving center services and sporting facilities. Today the RACJ boasts over 4500 family members with a vision to continue a creative outlook towards improvement of the facilities, activities and member participation to maintain its position as the most progressive automobile club in the Middle East. Since its beginning and humble location through to its existing facilities, the RACJ’s mission is to promote motor sports, tourism, mobility and advocacy and to carry on bringing people together both culturally and socially in a family friendly environment and to fulfill the vision of its founders. The RACJ is privileged to receive Royal Patronage by His Majesty King Abdullah II."
          />
          <View style={Elements.loginFieldsContainer} />
        </ContainerView>
      </ScrollView>
    </>
  );
}
