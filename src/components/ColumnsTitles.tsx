import React from 'react';
import {View} from 'react-native';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import Title from './Title';

export default function ColumnsTitles({
  firstTitle,
  secTitle,
  ThirdTitle,
}: {
  firstTitle: string;
  secTitle: string;
  ThirdTitle: string;
}) {
  return (
    <View
      style={[
        // Layout.justifyContentSpaceBetween,
        // Layout.mediumCardPadding,
        Layout.flexDirectionRow,
      ]}>
      <Title title={firstTitle} />
      <Title title={secTitle} />
      <Title title={ThirdTitle} />
    </View>
  );
}
