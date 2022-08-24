import { ImageSourcePropType } from 'react-native';

export const ICONS: { [key: string]: ImageSourcePropType } = {
  //bottom navigation
  favorites: require('./bottomNavigation/favoritesIcon.png'),
  photos: require('./bottomNavigation/photosIcon.png'),

  // photo card
  heartFilled: require('./photoCard/heartFillIcon.png'),
  heartOutline: require('./photoCard/heartOutlineIcon.png'),

  // components
  searchPane: require('./components/searchPaneIcon.png'),
};
