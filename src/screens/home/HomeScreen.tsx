import React, {useEffect} from 'react';
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
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
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
import {Client} from 'RoyalAutomobileClub/src/services/config/clients';
import {GET} from 'RoyalAutomobileClub/src/services/config/api';
export default function HomeScreen() {
  const [sliderActiveSlide, setSliderActiveSlide] = useState(1);
  const [sliderImgs, setSliderImgs] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [news, setNews] = useState([]);

  const navigation = useNavigation();
  const _renderItem = ({item}) => {
    return <ImageCarousel source={{uri: item.img}} />;
  };
  const styles = StyleSheet.create({
    marginEnd: {
      marginEnd: 3,
    },
  });
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
  useEffect(() => {
    getSlider();
    getFacilities();
    getNews();
  }, []);
  const getSlider = () => {
    Client.get(`${GET.SLIDER}`).then((res) => {
      if (res.data.status == '200') {
        setSliderImgs(res.data.data);
      } else {
        // setSuccess(false);
      }
    });
  };

  const getFacilities = () => {
    Client.get(`${GET.FACILITES}`).then((res) => {
      if (res.data.status == '200') {
        setFacilities(res.data.data);
      } else {
        // setSuccess(false);
      }
    });
  };
  const getNews = () => {
    Client.get(`${GET.NEWS}`).then((res) => {
      if (res.data.status == '200') {
        setNews(res.data.data);
      } else {
        // setSuccess(false);
      }
    });
  };
  return (
    <>
      <Header title="Home" showMenu showBell />

      <ScrollView>
        <ContainerView>
          <ImageAndTextContainer>
            <CarouselContainer>
              <Carousel
                data={sliderImgs}
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

          <>
            <SectionHeader>
              <Title color={Colors.ORANGE} title={'Our Facilities'} />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListingScreen', {
                    type: 'Facilities',
                    title: 'Our Facilities',
                    listing: facilities,
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
              data={facilities}
              renderItem={({item}) => {
                return (
                  <GridCard
                    title={'Our Facilities'}
                    item={item}
                    index={0}
                    listing={facilities}
                  />
                );
              }}
            />

            <SectionHeader>
              <Title color={Colors.ORANGE} title={'News and Events'} />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListingScreen', {
                    type: 'News',
                    title: 'News and Events',
                    listing: news,
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
              data={news}
              renderItem={({item}) => {
                return (
                  <GridCard
                    title={'News and Events'}
                    item={item}
                    index={1}
                    listing={news}
                  />
                );
              }}
            />
          </>

          <View style={Elements.loginFieldsContainer} />
        </ContainerView>
      </ScrollView>
    </>
  );
}
