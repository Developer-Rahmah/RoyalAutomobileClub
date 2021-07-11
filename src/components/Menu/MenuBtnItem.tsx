import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Title from '../Title';

export default function MenuBtnItem({
  label,
  color,
}: {
  label: string;
  color: Colors;
}) {
  return (
    <TouchableOpacity
      style={[
        Layout.widthHalf,
        General.border,
        General.smallVerticalPadding,
        Layout.flexCenter,
        Layout.radius,
        {borderColor: color},
      ]}>
      <Title title={label} color={color} />
    </TouchableOpacity>
  );
}
