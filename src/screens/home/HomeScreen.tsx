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
} from 'RoyalAutomobileClub/src/screens/home/HomeScreenStyled';
import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import Carousel from 'react-native-snap-carousel';
import {SCREEN_WIDTH} from 'RoyalAutomobileClub/src/services/helper/Constant';
import {useState} from 'react';
import {Data} from './static/Data';
import Rows from 'RoyalAutomobileClub/src/components/Rows';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import More from 'RoyalAutomobileClub/assets/icons/more.png';
import {DataSlider} from './static/DataSlider';
import GridCard from 'RoyalAutomobileClub/src/components/GridCard';
import {useNavigation} from '@react-navigation/native';
export default function HomeScreen() {
  const [sliderActiveSlide, setSliderActiveSlide] = useState(1);
  const navigation = useNavigation();
  const _renderItem = ({item}) => {
    return <ImageCarousel source={{uri: item.image}} />;
  };
  const styles = StyleSheet.create({
    marginEnd: {
      marginEnd: 3,
    },
  });
  return (
    <>
      <Header title="Home" showMenu showBell />

      <ScrollView>
        <ContainerView>
          <ImageAndTextContainer>
            <CarouselContainer>
              <Carousel
                data={DataSlider}
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

              <GrayIndicator>
                <OrangeIndicator
                  width={sliderActiveSlide * DataSlider.length * 9 + '%'}
                />
              </GrayIndicator>
            </CarouselContainer>
          </ImageAndTextContainer>
          {Data.map((list, index) => {
            return (
              <>
                <SectionHeader>
                  <Title color={Colors.ORANGE} title={list.sectionHeader} />
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ListingScreen', {
                        type: index === 0 ? 'Facilities' : 'News',
                        title: list.sectionHeader,
                        listing: list.dataList,
                      })
                    }>
                    <MoreTxtContainer>
                      <Title
                        style={styles.marginEnd}
                        small
                        color={Colors.BLACK}
                        title={'More'}
                      />
                      <IconImage source={More} verySmall />
                    </MoreTxtContainer>
                  </TouchableOpacity>
                </SectionHeader>

                <Rows
                  numColumns={2}
                  isSectionList={false}
                  data={list.dataList}
                  renderItem={({item}) => {
                    return <GridCard item={item} />;
                  }}
                />
              </>
            );
          })}
          <View style={Elements.loginFieldsContainer} />
        </ContainerView>
      </ScrollView>
    </>
  );
}
