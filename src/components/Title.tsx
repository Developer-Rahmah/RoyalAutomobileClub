import React from 'react';
import {Text} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';

export default function Title({
  title,
  color = Colors.BLACK,
  numberOfLines = 1,
  style = {},
  bold = false,
}: {
  title?: string;
  color?: string;
  numberOfLines?: number;
  style?: object;
  bold?: boolean;
}) {
  return (
    <Text
      style={[
        Elements.title,
        {color, fontWeight: bold ? 'bold' : '300'},
        style,
      ]}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
}
