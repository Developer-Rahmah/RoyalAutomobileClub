import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import Arrow from 'RoyalAutomobileClub/assets/icons/arrow.png';

const SettingSection = ({
  text,
  onPress,
}: {
  text?: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <Title color={Colors.LIGHT_GRAY_7} title={text} />
      <IconImage verySmall source={Arrow} />
    </TouchableOpacity>
  );
};

export default SettingSection;
const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 0.3,
    borderColor: Colors.LIGHT_GRAY_7,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
  },
});
