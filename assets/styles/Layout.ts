import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
//  const Layout = () => {

const Layout = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 20,
  },
  radius: {
    borderRadius: 5,
  },

  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },

  fullWidth: {
    width: '100%',
  },
  widthHalf: {
    width: '50%',
  },

  cardPadding: {
    padding: 20,
  },
  paddingEnd: {
    paddingEnd: 10,
  },
  paddingStart: {
    paddingStart: 10,
  },
  margin: {
    margin: 20,
  },
  smallCardPadding: {
    padding: 7,
  },

  bottomSpace: {
    paddingBottom: 7,
  },

  header: {
    top: 0,
    left: 0,
    width: '100%',
    height: Dimensions.get('window').height / 9,
    padding: 15,
    backgroundColor: Colors.DARK_BLUE,
    alignItems: 'center',
    flexDirection: 'row',
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  statusBarHight: {
    height: Dimensions.get('window').height / 40,
  },

  headerIcon: {
    width: '10%',
    tintColor: Colors.LIGHT_GREEN,
  },
  displayNone: {
    display: 'none',
  },
  displayFlex: {
    display: 'flex',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  largeCardPadding: {
    paddingVertical: Dimensions.get('window').width / 15,
    paddingHorizontal: Dimensions.get('window').width / 15,
  },
  largeHorizontalPadding: {
    paddingHorizontal: Dimensions.get('window').width / 15,
  },
});

export default Layout;
