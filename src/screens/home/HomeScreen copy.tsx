import React from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import {
  ContainerView,
  GrayIndicator,
  ImageAndTextContainer,
  ImageContainer,
  OrangeIndicator,
} from './styled';
import {ScrollView, View, Image, Text, FlatList} from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import {useTranslation} from 'RoyalAutomobileClub/src/services/hooks';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import {SCREEN_WIDTH} from 'RoyalAutomobileClub/src/services/helper/Constant';
import {useState} from 'react';
import {Data} from './static/Data';
import Rows from 'RoyalAutomobileClub/src/components/Rows';

export default function HomeScreen() {
  const SLIDER_1_FIRST_ITEM = 1;
  const [sliderActiveSlide, setSliderActiveSlide] =
    useState(SLIDER_1_FIRST_ITEM);
  const navigation = useNavigation();
  const t = useTranslation();

  const ENTRIES1 = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFwr2LyFzvZdtAKD49q6e2pUe1qDEFCR_XA&usqp=CAU',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIu1ehwEFL1DaFlZI8c5yfkpuhpiCQRlXXA&usqp=CAU',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://racj.com/sites/all/themes/royal/images/logo.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration:
        'https://racj.com/sites/default/files//styles/rotating/public/mainimg_1.jpg?itok=SjTKu4_K',
    },
  ];
  const _renderItemWithParallax = ({item}) => {
    return (
      <Image
        style={{
          width: '100%',
          height: 200,
          backgroundColor: 'red',
          marginHorizontal: 0,
          borderRadius: 20,
          // resizeMode:'contain'
        }}
        source={{uri: item.illustration}}
        // even={(index + 1) % 2 === 0}
        // parallax={true}
        // parallaxProps={parallaxProps}
      />
    );
  };
  const renderItem = ({item}) => (
    <View
      // image={require('./assets/beach.png')}
      // imageStyle={{height: 50}}
      style={{
        width: 300,
        margin: 20,
        height: 30,
      }}>
      <Text style={{margin: 10}}>{'item.ttle'}</Text>
    </View>
  );

  return (
    <>
      <Header title="Login" showBack />

      <ScrollView>
        <ContainerView>
          <ImageAndTextContainer>
            <ImageContainer
              style={{
                flex: 1,
                padding: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Carousel
                data={ENTRIES1}
                renderItem={_renderItemWithParallax}
                sliderWidth={SCREEN_WIDTH / 1.1}
                itemWidth={SCREEN_WIDTH / 1.1}
                hasParallaxImages={true}
                firstItem={SLIDER_1_FIRST_ITEM}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                // inactiveSlideShift={20}
                containerCustomStyle={{
                  margin: 0,
                  width: '100%',

                  overflow: 'visible',
                }}
                contentContainerCustomStyle={{
                  marginHorizontal: 0,
                  justifyContent: 'center',
                  flex: 0,
                  alignItems: 'center',
                }}
                loop={true}
                loopClonesPerSide={1}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
                onSnapToItem={(index) => setSliderActiveSlide(index)}
              />
              {/* <View style={{width: 120, height: 30, backgroundColor: 'red'}}>
                <View
                  style={{
                    width: `${ sliderActiveSlide*(ENTRIES1.length)*1.8}%`,backgroundColor:'green',height:30
                  }}
                />
              </View> */}
              <GrayIndicator>
                <OrangeIndicator
                  width={sliderActiveSlide * ENTRIES1.length * 9 + '%'}
                />
              </GrayIndicator>
            </ImageContainer>
          </ImageAndTextContainer>

          <Rows
            data={Data}
            renderItem={renderItem}
            // keyExtractor={this.keyExtractor}
            style={{
              flex: 1,
              paddingTop: 30,
              flexDirection: 'column',
            }}
            // contentContainerStyle={{justifyContent: 'space-around'}}
            // numColumns={2}
            // columnWrapperStyle={{flexShrink: 1}}
          />
          <View style={Elements.loginFieldsContainer} />
        </ContainerView>
      </ScrollView>
    </>
  );
}
