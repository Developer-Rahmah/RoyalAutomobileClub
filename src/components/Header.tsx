import React from 'react';
import {View} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import Title from './Title';

const Header = ({
  titleColor,
  greenHeader = true,
  title = 'Items',
}: {
  titleColor?: Colors;
  greenHeader?: boolean;
  title?: string;
}) => {
  return (
    <View style={[greenHeader ? Layout.header : null]}>
      {/* screen title */}
      <View style={Layout.cardPadding}>
        <Title
          title={title}
          bold
          color={titleColor ? titleColor : Colors.WHITE}
        />
      </View>
    </View>
  );
};

export default Header;
