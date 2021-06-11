import React from 'react';
import {View} from 'react-native';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';

export default function ProductCard({
  ProductName,
  ProductType,
  ProductPrice,
  onClick,
}: {
  ProductName: string;
  ProductType: string;
  ProductPrice: string;
  onClick: () => void;
}) {
  return <View style={Layout.smallCardPadding} />;
}
