import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Data} from 'RoyalAutomobileClub/src/screens/home/static/Data';
import LocalStorage from 'RoyalAutomobileClub/src/services/helper/LocalStorage';
import {setAuthTokenAction} from 'RoyalAutomobileClub/src/services/redux/actions';
import Title from '../Title';

export default function MenuItem({
  children,
  title,
  screenName,
}: {
  children: any;
  screenName?: string;
  title: string;
}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleItemPress = () => {
    if (title === 'Logout') {
      dispatch(setAuthTokenAction(null));
      LocalStorage.set('authToken', null);
    }
    if (title === 'Facilities') {
      navigation.navigate('ListingScreen', {
        type: 'Facilities',
        title: 'Our Facilities',
        listing: Data[0].dataList,
      });
    }
    if (title === 'News & Events') {
      navigation.navigate('ListingScreen', {
        type: 'News',
        title: 'News & Events',
        listing: Data[1].dataList,
      });
    }
    if (screenName != undefined) {
      navigation.navigate(screenName);
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={handleItemPress} style={styles.container}>
        {children}
        <Title style={{marginHorizontal: 13}} title={title} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 13,
  },
});
