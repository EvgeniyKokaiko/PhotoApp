import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import { MainNavigationScreen } from './src/Core/MainNavigationScreen';
import { STYLES } from './src/Styles';

export function App() {
  return (
    <SafeAreaView style={STYLES.Layout.container}>
      <StatusBar />
      <MainNavigationScreen />
    </SafeAreaView>
  );
}
