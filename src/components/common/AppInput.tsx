import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
import GlobalStyles from '../../utils/GlobalStyles';

interface AppInputProps {
  value: string;
  hint: string;
  style: any;
  onChange: (value: string) => void;
}

const AppInput: FC<AppInputProps> = props => {
  const {value, onChange, hint, style, ...rest} = props;

  return (
    <View style={{...GlobalStyles.boxView, ...style}}>
      <TextInput
        value={value}
        onChangeText={v => onChange(v)}
        placeholder={hint}
        placeholderTextColor={Colors.grayTheme1}
        style={styles.textInput}
        autoCorrect={false}
        autoFocus={false}
        autoCapitalize="none"
        {...rest}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  textInput: {
    fontFamily: FONTS.Poppins400,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.mainTheme1,
  },
});
