import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import Plus from 'RoyalAutomobileClub/assets/icons/plus.png';
import {
  GridCardContainer,
  GridCardImage,
  Button,
} from 'RoyalAutomobileClub/src/components/ComponentStyled';
import {useNavigation} from '@react-navigation/native';
import {IServices} from '../static/Services';

const ServiceCard = ({
  item,
  index,
  title,
  listing,
  disabled = false,
}: {
  item: IServices | any;
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
    <TouchableOpacity onPress={() => navigation.navigate('ServiceListingScreen')}>
      <GridCardContainer
        style={{
          backgroundColor: Colors.LIGHT_GRAY_6,
          paddingVertical: 10,
          paddingTop: 20,
        }}>
        <GridCardImage
          source={item.image}
          style={{resizeMode: 'contain', width: '50%', height: 100}}
        />
        <View style={styles.padding}>
          <Title title={item.title} />
        </View>
      </GridCardContainer>
    </TouchableOpacity>
  );
};

export default ServiceCard;
