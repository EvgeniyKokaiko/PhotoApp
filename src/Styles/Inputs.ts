import { StyleSheet } from 'react-native';
import { mockupHeightToDP } from '../Utilities/Layouts';
import { Colors } from '../Utilities/Colors';

export const Inputs = StyleSheet.create({
  searchInputContainer: {
    width: '100%',
    height: mockupHeightToDP(50),
    borderColor: Colors.darkBlack,
    borderWidth: 1,
    marginVertical: mockupHeightToDP(15),
    borderRadius: 10,
  },
});
