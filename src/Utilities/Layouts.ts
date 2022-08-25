import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

/***
 *
 * Useful constants, functions for markup
 *
 */
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const MOCKUP_WIDTH = 375;
export const MOCKUP_HEIGHT = 812;

export function fontSizeDP(fontSize: number, standardScreenHeight = 812) {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight = isIphoneX() || Platform.OS === 'android' ? standardLength - offset! : standardLength;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

export const mockupWidthToDP = (mockupWidth: number) => {
  if (MOCKUP_WIDTH > DEVICE_WIDTH) {
    return PixelRatio.roundToNearestPixel(mockupWidth * (Math.round((DEVICE_WIDTH / MOCKUP_WIDTH) * 1000) / 1000));
  } else {
    return PixelRatio.roundToNearestPixel(mockupWidth * (DEVICE_WIDTH / MOCKUP_WIDTH));
  }
};
export const mockupHeightToDP = (mockupHeight: number) => {
  if (MOCKUP_HEIGHT > DEVICE_HEIGHT) {
    return PixelRatio.roundToNearestPixel(mockupHeight * (Math.round((DEVICE_HEIGHT / MOCKUP_HEIGHT) * 1000) / 1000));
  } else {
    return PixelRatio.roundToNearestPixel(mockupHeight * (DEVICE_HEIGHT / MOCKUP_HEIGHT));
  }
};
