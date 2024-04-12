import { size  } from './Metrics';

export const Colors: {[key: string]: string} = {
  white: '#FFFFFF',
  black: '#000000',
  mainTheme1: '#002055',
  mainTheme2: '#3580FF',
  mainTheme3: '#E9F1FF',
  grayTheme1: '#848A94',
  darkTheme1: '#191D30',
};
 
export const FONTS: {[key: string]: string} = { 
  Poppins100: 'Poppins-Thin',
  Poppins300: 'Poppins-Light',
  Poppins400: 'Poppins-Regular',
  Poppins500: 'Poppins-Medium',
  Poppins600: 'Poppins-SemiBold',
  Poppins700: 'Poppins-Bold',
  Poppins900: 'Poppins-Black',
};      

export const FONT_SIZE: {[key: string]: number} = {
  very_tiny: size(6),
  tiny: size(8),
  small_tiny: size(10),
  small: size(12),
  small_medium: size(14),
  medium: size(16),
  medium_extra: size(18),
  regular: size(20),
  regular_extra: size(22),
  large: size(24),
  extra_large: size(48),
};
