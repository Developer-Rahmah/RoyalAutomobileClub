import React from 'react';
import {View} from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';

export default function RadioButton(props: {isSelected?: boolean}) {
  return (
    <View style={Elements.unselectedRadio}>
      {props.isSelected ? <View style={Elements.selectedRadio} /> : null}
    </View>
  );
}
