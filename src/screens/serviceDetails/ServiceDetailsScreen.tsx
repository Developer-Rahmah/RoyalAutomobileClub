import React, {useState} from 'react';
import {ScrollView, Share, StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Header from 'RoyalAutomobileClub/src/components/Header';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import Title from 'RoyalAutomobileClub/src/components/Title';
import {ContainerView} from 'RoyalAutomobileClub/src/screens/serviceDetails/ServiceDetailsScreenStyled';
import {SCREEN_WIDTH} from 'RoyalAutomobileClub/src/services/helper/Constant';
import {CarouselContainer, ImageCarousel} from '../home/HomeScreenStyled';
import {ImageAndTextContainer} from '../viewPager/styled';
import {ServiceImages} from './static/ServiceImages';
import Path from 'RoyalAutomobileClub/assets/icons/path.png';
import Halls from 'RoyalAutomobileClub/assets/images/halls.png';
import Calendar from 'RoyalAutomobileClub/assets/icons/calendar.png';
import Clock from 'RoyalAutomobileClub/assets/icons/clock.png';
import Button from 'RoyalAutomobileClub/src/components/Button';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';

export default function ServiceDetailsScreen() {
  const [sliderActiveSlide, setSliderActiveSlide] = useState(1);

  const _renderItem = ({item}) => {
    return (
      <ImageCarousel
        style={{borderRadius: 30, height: '100%'}}
        source={item.image}
        // resizeMode="contain"
        borderRadius={30}
      />
    );
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'test message',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Header title="Services" showBack />
      <ImageAndTextContainer style={{backgroundColor: Colors.WHITE}}>
        <CarouselContainer
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
          }}>
          <Carousel
            data={ServiceImages}
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
          <View>
            <Pagination
              dotsLength={ServiceImages.length}
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
      <ScrollView style={{backgroundColor: Colors.WHITE, flex: 0.6}}>
        <ContainerView>
          <View style={[styles.titleContainer]}>
            <Title style={styles.titleTxt} title="7 Sky Hall" />
            <Title style={[styles.dateTxt]} title="1000 JOD" />
          </View>
          <View style={[styles.descriptionContainer]}>
            <Title
              title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
              numberOfLines={0}
              style={[styles.textAlignLeft, styles.descriptionTxt]}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingVertical: 30,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <IconImage small source={Path} />
                  <Title
                    style={{marginStart: 3, fontSize: 10}}
                    title="Bathroom : 2"
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <IconImage small source={Halls} />
                  <Title
                    style={{marginStart: 3, fontSize: 10}}
                    title="Hall Size : 200 Persons"
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingTop: 0,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <IconImage small source={Calendar} />
                  <Title
                    style={{marginStart: 3, fontSize: 10}}
                    title="booking available"
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <IconImage small source={Clock} />
                  <Title
                    style={{marginStart: 3, fontSize: 10}}
                    title="Morning and Evening"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={Elements.btnContainer}>
            <Button
            onClick={onShare}
              title="Share"
              txtColor={Colors.ORANGE}
              style={{
                backgroundColor: Colors.WHITE,
                borderColor: Colors.ORANGE,
                borderWidth: 1,
              }}
            />
            <Button
              title="Book"
              txtColor={Colors.WHITE}
              style={{
                marginTop: -20,
              }}
            />
          </View>
        </ContainerView>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'flex-start',
    flex: 1,
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
  },
  descriptionContainer: {
    alignItems: 'flex-start',
    flex: 1,
    width: '100%',
    paddingBottom: 10,
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  descriptionTxt: {
    color: Colors.SEMI_BLACK,
    fontSize: 11,
    lineHeight: 15,
  },
  dateTxt: {
    color: Colors.ORANGE,
    fontSize: 11,
  },
  titleTxt: {
    flex: 1,
    textAlign: 'left',
  },
  listingContainer: {
    width: '100%',
    // marginLeft: -15,
  },
  cardContainer: {
    width: 190,
  },
  shareSection: {
    flex: 0.9,
    marginBottom: '8.5%',
    width: '100%',
  },
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
