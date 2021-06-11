import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Title from './Title';

export default function Button(props: {
  name: Icon;
  onClick: () => void;
  locked?: boolean;
  title: string;
  withBorder?: boolean;
  backgroundColor: Colors;
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
        Layout.radius,
        General.greenBackground,
        Layout.flexDirectionRow,
        Layout.flexCenter,
        Layout.smallCardPadding,

        {
          backgroundColor: props.backgroundColor,
          opacity: props.locked ? 0.3 : 1,
        },
      ]}>
      <Title title={props.title} color={props.txtColor} />
      <Entypo color={Colors.WHITE} name={props.name} size={30} />
    </TouchableOpacity>
  );
}
