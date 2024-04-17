import React, {FC} from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icons} from '../../utils/Constants';
import Metrics from '../../themes/Metrics';

interface IconProps {
  name: string;
  type:
    | Icons.FONT_AWESOME
    | Icons.IONICONS
    | Icons.MATERIAL
    | Icons.MATERIAL_COMM;
  size?: number;
  color?: string;
}

const AppIcon: FC<IconProps> = ({name, type, size = 24, color = 'black'}) => {
  let IconComponent;

  switch (type) {
    case Icons.FONT_AWESOME:
      IconComponent = FontAwesome;
      break;
    case Icons.IONICONS:
      IconComponent = Ionicons;
      break;
    case Icons.MATERIAL:
      IconComponent = MaterialIcons;
      break;
    case Icons.MATERIAL_COMM:
      IconComponent = MaterialCommunityIcons;
      break;
    default:
      IconComponent = MaterialIcons;
  }

  return (
    <View>
      <IconComponent name={name} size={Metrics.rfv(size)} color={color} />
    </View>
  );
};

export default AppIcon;
