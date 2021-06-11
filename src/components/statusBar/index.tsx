import React from 'react';
import {Platform, StatusBar as ReactStatusBar, View} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';

const index = ({}) => (
  <View>
    {Platform.OS == 'android' ? (
      <ReactStatusBar backgroundColor={Colors.LIGHT_BLUE} />
    ) : (
      <View style={[Layout.fullWidth, Layout.statusBarHight]} />
    )}
  </View>
);

export default index;
