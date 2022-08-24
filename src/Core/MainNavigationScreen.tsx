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

  return (
    <Tab.Navigator
      initialRouteName={defaultRouteName}
      tabBar={({ navigation }) => {
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
