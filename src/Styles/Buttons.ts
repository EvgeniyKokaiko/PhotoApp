import { StyleSheet } from 'react-native';
import { mockupHeightToDP, mockupWidthToDP } from '../Utilities/Layouts';
import { Colors } from '../Utilities/Colors';

export const Buttons = StyleSheet.create({
  bottomNavigationButton: {
    width: mockupWidthToDP(40),
    height: mockupHeightToDP(40),
  },
  photoItemLikeButton: {
    width: mockupWidthToDP(40),
    height: mockupHeightToDP(30),
  },
  horizontalLine: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.dark,
  },
});
