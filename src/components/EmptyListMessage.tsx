import React from 'react';
import {View} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import Title from './Title';

const EmptyListMessage = ({}) => {
  return (
    <View
      style={[
        Layout.flexCenter,
        Elements.noItemsMessageContainer,
        Layout.fullWidth,
      ]}>
      <Title
        color={Colors.GRAY}
        numberOfLines={0}
        title="You do not have any products.
Press the green button below to
add new ones"
      />
    </View>
  );
};

export default EmptyListMessage;
