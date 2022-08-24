import { StyleSheet } from 'react-native';
import { mockupHeightToDP, mockupWidthToDP } from '../Utilities/Layouts';

export const Images = StyleSheet.create({
  bottomNavigationButtonIcon: {
    width: '90%',
    height: '90%',
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
