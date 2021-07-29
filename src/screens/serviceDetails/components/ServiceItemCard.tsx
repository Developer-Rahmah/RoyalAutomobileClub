import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Share, StyleSheet, View} from 'react-native';
import More from 'RoyalAutomobileClub/assets/icons/more.png';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import Title from 'RoyalAutomobileClub/src/components/Title';
import {IServiceListing} from '../static/ServiceListing';

import {
  Button,
  ColumnCardContainer,
  ColumnCardImage,
} from 'RoyalAutomobileClub/src/components/ComponentStyled';

const ServiceItemCard = ({
  item,
  index,
  listing,
  type,
}: {
  item: IServiceListing | any;
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
    <ColumnCardContainer
      style={{borderWidth: 0, borderBottomWidth: 1, flexDirection: 'row'}}>
      <ColumnCardImage
        source={{uri: item.image}}
        style={{
          height: 150,
          borderRadius: 20,
          borderTopRightRadius: 20,
          marginVertical: 10,
        }}
      />
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
          title={item.size}
          numberOfLines={3}
        />
      </View>
      <IconImage small color={Colors.GRAY} source={More} />
    </ColumnCardContainer>
  );
};

export default ServiceItemCard;
