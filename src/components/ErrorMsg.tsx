import React from 'react';
import { View } from 'react-native';
import { Colors } from 'RoyalAutomobileClub/assets/styles/Colors';
import Title from './Title';

export default function ErrorMsg({ errorMsg }: { errorMsg: string }) {
  return (
    <View>
      <Title title={errorMsg} color={Colors.RED} />
    </View>
  );
}
