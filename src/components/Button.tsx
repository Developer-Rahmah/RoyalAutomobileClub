import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Title from './Title';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';

export default function Button(props: {
  onClick: () => void;
  locked?: boolean;
  title: string;
  withBorder?: boolean;
  backgroundColor?: Colors;
  txtColor: Colors;
  style?: StyleSheet;
}) {
  const handlePress = async () => {
    if (!props.locked) {
      await props.onClick();
      return;
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={props.locked}
      style={[
        Layout.flexCenter,
        Elements.primaryButton,
        General.largeMarginVertical,
      ]}>
      <Title title={props.title} color={props.txtColor} />
    </TouchableOpacity>
  );
}
