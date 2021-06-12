import React from 'react';
import {Dimensions, Image, ImageSourcePropType} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';

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
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  return (
    <Image
      resizeMode="contain"
      source={source}
      style={[
        small
          ? {
              width: WIDTH / 17,
              height: WIDTH / 17,
            }
          : Elements.icon,
        {tintColor: color},
        style,
      ]}
    />
  );
}
