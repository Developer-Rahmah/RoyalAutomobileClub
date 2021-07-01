import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Loader = ({}) => {
  return <ActivityIndicator color={Colors.BLACK} size="large" />;
};

export default Loader;
