import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import Plus from 'RoyalAutomobileClub/assets/icons/plus.png';
import {GridCardContainer, GridCardImage, Button} from './ComponentStyled';
import {IFacility} from '../screens/home/static/Data';
import {useNavigation} from '@react-navigation/native';

const GridCard = ({
  item,
  index,
  title,
  listing,
  disabled = false,
}: {
  item: IFacility | any;
  index?: number;
  title?: string;
  listing?: IFacility[];
  disabled: boolean;
}) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    padding: {padding: 10},
    marginVertical: {
      marginVertical: 10,
    },
  });

  return (
    <GridCardContainer>
      <GridCardImage source={{uri: item.image}} />
      <View style={styles.padding}>
        <Title title={item.title} />
        {item.date != undefined ? (
          <Title
            color={Colors.ORANGE}
            small
            fontFamily="Poppins-Regular"
            title={item.date}
          />
        ) : null}

        <Title
          style={styles.marginVertical}
          color={Colors.SEMI_BLACK}
          small
          fontFamily="Poppins-Regular"
          title={item.description}
          numberOfLines={2}
        />
        <Button
          onPress={() =>
            disabled
              ? console.log('to do set item')
              : navigation.navigate('DetailsScreen', {
                  type: index === 0 ? 'Facilities' : 'News',
                  items: item,
                  title: item.title,
                  description: item.description,
                  image: item.image,
                  listing: listing,
                  date: item.date != undefined ? item.date : '',
                })
          }>
          <Title
            style={{marginHorizontal: 7}}
            color={Colors.WHITE}
            title="More"
          />
          <IconImage source={Plus} verySmall />
        </Button>
      </View>
    </GridCardContainer>
  );
};

export default GridCard;
