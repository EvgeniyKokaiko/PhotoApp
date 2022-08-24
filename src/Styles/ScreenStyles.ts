import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH, mockupHeightToDP, mockupWidthToDP } from '../Utilities/Layouts';
import { Colors } from '../Utilities/Colors';

export const ScreenStyles = StyleSheet.create({
  BottomNavigationContainer: {
    width: DEVICE_WIDTH,
    height: mockupHeightToDP(60),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  headerContainer: {
    width: DEVICE_WIDTH,
    height: mockupHeightToDP(54),
    borderWidth: 0.4,
    borderColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: mockupWidthToDP(15),
  },
  preloaderContainer: {
    position: 'absolute',
    top: mockupHeightToDP(104),
    width: DEVICE_WIDTH,
    height: '100%',
    backgroundColor: 'white',
  },
});
