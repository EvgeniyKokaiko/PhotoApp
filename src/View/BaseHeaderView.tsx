import React from 'react';
import { View, Text } from 'react-native';
import { STYLES } from '../Styles';

type baseHeaderViewProps = {
  label: string;
};

const BaseHeaderView: React.FC<baseHeaderViewProps> = ({ label }) => {
  return (
    <View style={[STYLES.ScreenStyles.headerContainer]}>
      <View />
      <View>
        <Text>{label}</Text>
      </View>
      <View />
    </View>
  );
};

export { BaseHeaderView };
