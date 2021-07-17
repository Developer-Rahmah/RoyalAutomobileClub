import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Share, StyleSheet, View} from 'react-native';
import Plus from 'RoyalAutomobileClub/assets/icons/plus.png';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import Title from 'RoyalAutomobileClub/src/components/Title';

import {IFacility} from '../screens/home/static/Data';
import {Button, ColumnCardContainer, ColumnCardImage} from './ComponentStyled';

const CoulmnCard = ({
  item,
  index,
  listing,
  type,
}: {
  item: IFacility | any;
  index: number;
  listing: IFacility[];
  type: string;
}) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    detailsContainer: {
      padding: 10,
      flex: 1,
      alignItems: 'flex-start',
      paddingVertical: 15,
      paddingStart: 20,
    },
    descrationTxt: {
      marginVertical: 10,
      textAlign: 'left',
      fontSize: 14,
    },
    buttonWidth: {
      width: '70%',
    },
  });
  return (
    <ColumnCardContainer>
      <ColumnCardImage source={{uri: item.image}} />
      <View style={styles.detailsContainer}>
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
          style={styles.descrationTxt}
          color={Colors.SEMI_BLACK}
          small
          fontFamily="Poppins-Regular"
          title={item.description}
          numberOfLines={3}
        />
        <Button
          onPress={() =>
            navigation.navigate('DetailsScreen', {
              type: type,
              items: item,
              title: item.title,
              description: item.description,
              image: item.image,
              listing: listing,
              date: item.date != undefined ? item.date : '',
            })
          }
          style={styles.buttonWidth}>
          <Title
            style={{marginHorizontal: 7}}
            color={Colors.WHITE}
            title="More"
          />
          <IconImage source={Plus} verySmall />
        </Button>
      </View>
    </ColumnCardContainer>
  );
};

export default CoulmnCard;
