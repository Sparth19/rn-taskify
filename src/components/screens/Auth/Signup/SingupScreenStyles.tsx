import {StyleSheet} from 'react-native';
import {Colors, FONTS, FONT_SIZE} from '../../../../themes/AppTheme';
import {size} from '../../../../themes/Metrics';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  largeText: {
    fontFamily: FONTS.Poppins600,
    fontSize: FONT_SIZE.large,
    color: Colors.mainTheme1,
    marginTop: size(40),
  },
  descText: {
    fontFamily: FONTS.Poppins400,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.grayTheme2,
    marginVertical: size(15),
  },
});
