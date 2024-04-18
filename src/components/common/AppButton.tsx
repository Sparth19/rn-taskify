import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
import {size} from '../../themes/Metrics';
import GlobalStyles from '../../utils/GlobalStyles';

interface AppButtonProps {
  onPress: () => void;
  text: string;
  style: any;
}

const AppButton: FC<AppButtonProps> = ({onPress, text = '', style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...GlobalStyles.boxView,
        backgroundColor: Colors.mainTheme2,
        alignItems: 'center',
        padding: size(10),
        ...style,
      }}>
      <Text
        style={{
          fontFamily: FONTS.Poppins500,
          color: Colors.white,
          fontSize: FONT_SIZE.medium,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
