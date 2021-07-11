import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Title from '../Title';

export default function MenuItem({
  children,
  title,
}: {
  children: any;
  screenName?: string;
  title: string;
}) {
  return (
    <View>
      {/* The parent menu item */}
      <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 13}}>
        {/* <View style={{flexDirection: 'row', paddingVertical: 5}}> */}
        {children}
        <Title style={{marginHorizontal: 13}} title={title} />
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
}
