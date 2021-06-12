import * as Font from 'expo-font';

export const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Bold': require('../fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../fonts/Poppins-Medium.ttf'),
  });
};
