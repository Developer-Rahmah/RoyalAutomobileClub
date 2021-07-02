import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import Plus from 'RoyalAutomobileClub/assets/icons/plus.png';
import {GridCardContainer, GridCardImage, Button} from './ComponentStyled';
import {IFacility} from '../screens/home/static/Data';

const GridCard = ({item}: {item: IFacility | any}) => {
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
        <Title
          style={styles.marginVertical}
          color={Colors.SEMI_BLACK}
          small
          fontFamily="Poppins-Regular"
          title={item.description}
          numberOfLines={2}
        />
        <Button>
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
