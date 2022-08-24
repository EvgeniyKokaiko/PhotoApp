import { StyleSheet } from 'react-native';
import { mockupHeightToDP, mockupWidthToDP } from '../Utilities/Layouts';

export const MP = StyleSheet.create({
  mb_bottomNavigation: {
    paddingBottom: '40%',
  },
  mb10: {
    marginBottom: mockupHeightToDP(10),
  },
  mb40: {
    marginBottom: mockupHeightToDP(40),
  },
  mb20: {
    marginBottom: mockupHeightToDP(20),
  },
  mt10: {
    marginTop: mockupHeightToDP(10),
  },
  mr20: {
    marginRight: mockupWidthToDP(20),
  },
  mr10: {
    marginRight: mockupWidthToDP(10),
  },
  mh10: {
    marginHorizontal: mockupWidthToDP(10),
  },
  ph15: {
    paddingHorizontal: mockupWidthToDP(15),
  },
  pr20: {
    paddingRight: mockupWidthToDP(30),
  },
});
