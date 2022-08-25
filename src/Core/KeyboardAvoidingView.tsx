import React from 'react';
import { Platform, ScrollView, KeyboardAvoidingView  } from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

type keyboardAvoidingViewProps = {
  children: React.ReactNode;
};

const KeyboardAvoidView = (props: keyboardAvoidingViewProps) => {
  if (Platform.OS === 'android') {
    return <ScrollView>{props.children}</ScrollView>;
  }
  let verticalOffset = StaticSafeAreaInsets.safeAreaInsetsTop + StaticSafeAreaInsets.safeAreaInsetsBottom + 40;
  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={verticalOffset}>
      <ScrollView showsVerticalScrollIndicator={false} removeClippedSubviews={false} keyboardShouldPersistTaps={'always'}>
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export { KeyboardAvoidView };
