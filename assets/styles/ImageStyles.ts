import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;

const ImageStyles = StyleSheet.create({
  teaserImage: {
    width: '100%',
    height: WIDTH / 2,
  },
  smallTeaserImage: {
    width: WIDTH / 5,
    height: WIDTH / 5,
    resizeMode: 'contain',
  },
  mediumImage: {
    width: WIDTH / 2.7,
    height: WIDTH / 2.7,
    resizeMode: 'contain',
  },
  posterImage: {
    width: '100%',
    height: Dimensions.get('window').height / 2.5,
  },
  iconHeight: {
    width: WIDTH / 15,
  },

  iconImage: {
    width: WIDTH / 17,
    height: WIDTH / 17,
  },
  mediumIcon: {
    width: WIDTH / 15,
    height: WIDTH / 15,
  },
});
export default ImageStyles;
