import { StyleSheet } from 'react-native';
import { mockupHeightToDP, mockupWidthToDP } from '../Utilities/Layouts';

export const Images = StyleSheet.create({
  bottomNavigationButtonIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  photoItemImage: {
    height: mockupHeightToDP(300),
    width: '100%',
    resizeMode: 'contain',
  },
  image20: {
    width: mockupWidthToDP(20),
    height: mockupWidthToDP(20),
    resizeMode: 'contain',
  },
});
