import React from 'react';
import {I18nManager} from 'react-native';
import {Image, ImageSourcePropType} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import {SCREEN_WIDTH} from '../services/helper/Constant';

export default function IconImage({
  source,
  color,
  small,
  style,
  transform = true,
  verySmall = false,
}: {
  source: ImageSourcePropType;
  color?: Colors;
  small?: boolean;
  style?: {};
  transform?: boolean;
  verySmall?: boolean;
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
          : verySmall
          ? {width: SCREEN_WIDTH / 33, height: SCREEN_WIDTH / 33}
          : Elements.icon,
        {
          tintColor: color,
          transform: [
            {
              rotateY: transform
                ? I18nManager.isRTL
                  ? '180deg'
                  : '0deg'
                : '0deg',
            },
          ],
        },
        style,
      ]}
    />
  );
}
