import React from 'react';
import { View } from 'react-native';

export default function Col({
  children,
  style = {},
}: {
  children: JSX.Element;
  style: object;
}) {
  return <View style={[style]}>{children}</View>;
}
