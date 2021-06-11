import React from 'react';
import {View} from 'react-native';
import General from 'RoyalAutomobileClub/assets/styles/General';

export default function Container({
  children,
  style = {},
  ...rest
}: {
  children?: JSX.Element;
  style?: object;
}) {
  return (
    <View
      style={[General.fullScreen, General.largePadding, General.paddingBottom]}
      {...rest}>
      {children}
    </View>
  );
}
