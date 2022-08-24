import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { STYLES } from '../Styles';
import { Colors } from '../Utilities/Colors';
import { mockupWidthToDP } from '../Utilities/Layouts';

const PreloaderView = () => {
  return (
    <View style={[STYLES.ScreenStyles.preloaderContainer]}>
      <ActivityIndicator color={Colors.black} size={mockupWidthToDP(50)} />
    </View>
  );
};

export default PreloaderView;
