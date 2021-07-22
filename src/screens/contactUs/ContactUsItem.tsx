import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Title from 'RoyalAutomobileClub/src/components/Title';

export default function ContactUsItem({
  children,
  title,
  onPress,
}: {
  children: any;
  title: string;
  onPress: () => void;
}) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {children}
        <Title style={{marginTop: 5}} title={title} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
