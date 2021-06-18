import React from 'react';
import {I18nManager} from 'react-native';
import {Image, ImageSourcePropType} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import {SCREEN_WIDTH} from './src/services/helper/Constant';

export default function IconImage({
  source,
  color,
  small,
  style,
}: {
  source: ImageSourcePropType;
  color?: Colors;
  small?: boolean;
  style?: {};
}) {
  return (
    <Image
      resizeMode="contain"
      source={source}
      style={[
        small
          ? {
              width: SCREEN_WIDTH / 17,
              height: SCREEN_WIDTH / 17,
            }
          : Elements.icon,
        {
          tintColor: color,
          transform: [{rotateY: I18nManager.isRTL ? '180deg' : '0deg'}],
        },
        style,
      ]}
    />
  );
}
