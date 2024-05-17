import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Metrics, {size} from '../../themes/Metrics';
import AppIcon from './AppIcon';
import {Icons} from '../../utils/Constants';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';

interface Props {}

const AppHeader: FC<Props> = props => {
  return (
    <View style={styles.main}>
      <View style={styles.iconView}>
        <AppIcon type={Icons.IONICONS} name={'chevron-back'} />
      </View>
      <Text style={styles.centerText}>Sign up</Text>
      <View style={styles.iconView}>
        <AppIcon type={Icons.IONICONS} name={'checkmark-circle-outline'} />
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: size(15),
    marginBottom: size(10),
    marginTop: Metrics.isIphoneNotch ? size(10) : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconView: {
    borderWidth: size(1),
    padding: size(5),
    borderRadius: size(50),
    borderColor: Colors.mainTheme3,
  },
  centerText: {
    fontFamily: FONTS.Poppins500,
    color: Colors.mainTheme1,
    fontSize: FONT_SIZE.small_medium,
  },
});
