import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View, Share} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import GridCard from 'RoyalAutomobileClub/src/components/GridCard';
import Header from 'RoyalAutomobileClub/src/components/Header';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import Rows from 'RoyalAutomobileClub/src/components/Rows';
import Title from 'RoyalAutomobileClub/src/components/Title';
import {
  ContainerView,
  PosterImage,
  ShareButton,
} from 'RoyalAutomobileClub/src/screens/detailsScreen/DetailsScreenStyled';
import ShareIcon from 'RoyalAutomobileClub/assets/icons/share.png';
import {Data} from '../home/static/Data';
export default function DetailsScreen() {
  const route = useRoute() as any;
  const imgUri = route?.params?.image;
  const title = route.params.title;
  const description = route.params.description;
  const listing = route.params.listing;
  const date = route.params.date;
  const type = route.params.type;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: title,
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
      <Header title={title} showBack />
      <PosterImage
        source={{
          uri: imgUri,
        }}
      />
      <ContainerView>
        <ScrollView style={{flex: 1}}>
          <View style={[styles.titleContainer]}>
            <Title style={styles.titleTxt} title={title} />
            <Title style={[styles.dateTxt]} title={date} />
          </View>
          <View style={[styles.descriptionContainer]}>
            <Title
              title={
                description +
                description +
                description +
                description +
                description +
                description +
                description +
                description +
                description +
                description +
                description +
                description
              }
              numberOfLines={0}
              style={[styles.textAlignLeft, styles.descriptionTxt]}
            />
          </View>

          <View style={styles.titleContainer}>
            <Title
              color={Colors.ORANGE}
              title={
                type === 'Facilities' ? 'Related Facilities' : 'Related Events'
              }
              numberOfLines={0}
              style={{textAlign: 'left'}}
            />
          </View>

          <ScrollView horizontal={true}>
            <View style={{flex: 1}}>
              <Rows
                style={styles.listingContainer}
                horizontal={true}
                numColumns={1}
                isSectionList={false}
                data={
                  type === 'Facilities' ? Data[0].dataList : Data[1].dataList
                }
                renderItem={({item}) => {
                  return (
                    <View style={styles.cardContainer}>
                      <GridCard item={item} disabled />
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
        </ScrollView>
        <View style={styles.shareSection}>
          <ShareButton onPress={() => onShare()}>
            <IconImage source={ShareIcon} small style={{marginEnd: 10}} />
            <Title title="Share" color={Colors.WHITE} />
          </ShareButton>
        </View>
      </ContainerView>
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
});
