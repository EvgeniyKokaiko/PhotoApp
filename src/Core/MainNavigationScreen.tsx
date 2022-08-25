import { Screen } from '../Types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { PhotosContainer } from '../Controller/PhotosContainer';
import { FavoritesContainer } from '../Controller/FavoritesContainer';
import { BottomNavigation } from './BottomNavigation';
import { RootStackParamList } from './INavigation';
import { BaseHeaderView } from '../View/BaseHeaderView';

export enum StackScreens {
  favoritesScreen = 'FavoritesContainer',
  photosScreen = 'PhotosContainer',
}

/***
 *
 * Root navigation component with comfortable construction
 *
 */

const MainNavigationScreen = () => {
  const defaultRouteName = StackScreens.photosScreen;
  const withoutBottomNavigationScreens: Array<StackScreens> = [];
  const Tab = createBottomTabNavigator<RootStackParamList>();
  const Screens: Array<Screen> = [
    {
      name: StackScreens.photosScreen,
      component: PhotosContainer,
      options: {
        headerShown: true,
        header: () => <BaseHeaderView label="Photos" />,
      },
    },
    {
      name: StackScreens.favoritesScreen,
      component: FavoritesContainer,
      options: {
        headerShown: true,
        header: () => <BaseHeaderView label="Favorites" />,
      },
    },
  ];
  /**
   * Here instead of Tab.Navigator we can use Stack Navigator or Drawer Navigation
   */
  return (
    <Tab.Navigator
      initialRouteName={defaultRouteName}
      tabBar={({ navigation }) => {
        /***
         *
         * Here is a conditional, where we can specify inside withoutBottomNavigationScreens array, screens which does not use bottom navigation
         *
         */
        const { index, routeNames } = navigation.getState();
        const currentScreen = routeNames[index];
        if (withoutBottomNavigationScreens.includes(currentScreen as StackScreens)) {
          return null;
        }
        return <BottomNavigation />;
      }}
    >
      {Screens.map((screen) => {
        return <Tab.Screen name={screen.name} options={screen.options} component={screen.component} key={screen.name} />;
      })}
    </Tab.Navigator>
  );
};

export { MainNavigationScreen };
