import {StyleSheet, Dimensions} from 'react-native';
const ImageStyles = StyleSheet.create({
  teaserImage: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
  },
  smallTeaserImage: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').width / 5,
    resizeMode: 'contain',
  },

  posterImage: {
    width: '100%',
    height: Dimensions.get('window').height / 2.5,
  },

  iconImage: {
    width: Dimensions.get('window').width / 17,
    height: Dimensions.get('window').width / 17,
  },
  mediumIcon: {
    width: Dimensions.get('window').width / 15,
    height: Dimensions.get('window').width / 15,
  },
});
export default ImageStyles;
