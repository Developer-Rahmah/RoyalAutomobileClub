import {Platform} from 'react-native';

export const InterRegularFont =
  Platform.OS == 'ios' ? 'Inter-Light' : 'Inter-Light';
export const InterMediumFont = 'Inter-Medium';
export const InterBoldFont = Platform.OS == 'ios' ? 'Inter-Bold' : 'Inter-Bold';
export const RubikMedium = 'Rubik-Medium';
