import React from 'react';
import {ImageBackground} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import Title from 'RoyalAutomobileClub/src/components/Title';
import HeaderImg from 'RoyalAutomobileClub/assets/images/header.png';
import IconImage from 'RoyalAutomobileClub/IconImage';
import BackIcon from 'RoyalAutomobileClub/assets/icons/left-arrow.png';
import Menu from 'RoyalAutomobileClub/assets/icons/menu.png';
import Bell from 'RoyalAutomobileClub/assets/icons/bell.png';
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';
const Header = ({
  titleColor,
  title = 'Items',
  showBack = false,
  showMenu = false,
  showBell = false,
}: {
  titleColor?: Colors;
  title?: string;
  showBack?: boolean;
  showMenu?: boolean;
  showBell?: boolean;
}) => {
  return (
    <ImageBackground source={HeaderImg} style={[Layout.header]}>
      {/* back icon */}
      <IconImage
        source={showBack ? BackIcon : showMenu ? Menu : null}
        color={Colors.WHITE}
        small
      />
      {/* screen title */}
      <Title
        title={title}
        medium
        fontFamily="Poppins-Medium"
        color={titleColor ? titleColor : Colors.WHITE}
      />
      {/* notifications icon */}
      <IconImage
        source={showBell ? Bell : null}
        color={Colors.WHITE}
        style={ImageStyles.iconHeight}
      />
    </ImageBackground>
  );
};

export default Header;
