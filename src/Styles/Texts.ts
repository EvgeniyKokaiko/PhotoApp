import { StyleSheet } from 'react-native';
import { fontSizeDP } from '../Utilities/Layouts';
import { Colors } from './../Utilities/Colors';

export const Texts = StyleSheet.create({
  PhotoItemCaption: {
    fontSize: fontSizeDP(16),
    color: Colors.black,
    fontWeight: '400',
  },
});
