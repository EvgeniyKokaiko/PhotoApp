import { View, Text } from 'react-native';
import React from 'react';

type emptyViewProps = {
  message: string;
};

const EmptyView: React.FC<emptyViewProps> = ({ message }) => {
  return (
    <View>
      <Text>{message || 'No Items'}</Text>
    </View>
  );
};

export { EmptyView };
