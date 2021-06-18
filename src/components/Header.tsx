import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Colors } from 'RoyalAutomobileClub/assets/styles/Colors';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import Title from 'RoyalAutomobileClub/src/components/Title';
import HeaderImg from 'RoyalAutomobileClub/assets/images/header.png';
import IconImage from 'RoyalAutomobileClub/IconImage';
import BackIcon from 'RoyalAutomobileClub/assets/icons/left-arrow.png';
import Menu from 'RoyalAutomobileClub/assets/icons/menu.png';
import Bell from 'RoyalAutomobileClub/assets/icons/bell.png';
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation()
  return (

    <ImageBackground source={HeaderImg} style={[Layout.header]}>
      {/* back icon */}

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconImage
          source={showBack ? BackIcon : showMenu ? Menu : null}
          color={Colors.WHITE}
          small
          style={ImageStyles.backIcon}
        />
      </TouchableOpacity>
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
