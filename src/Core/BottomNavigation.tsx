import { TouchableOpacity, View, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { StackScreens } from './MainNavigationScreen';
import { mNavigator } from './INavigation';
import { STYLES } from '../Styles';
import { ICONS } from '../Assets/Icons/icons';

type bottomNavigationProps = {};

type bottomNavigationButtonType = {
  name: string;
  icon: ImageSourcePropType;
  props: any;
};

export const BottomNavigation: React.FC<bottomNavigationProps> = () => {
  const buttons: Array<bottomNavigationButtonType> = [
    {
      name: StackScreens.photosScreen,
      icon: ICONS.photos,
      props: {},
    },
    {
      name: StackScreens.favoritesScreen,
      icon: ICONS.favorites,
      props: {},
    },
  ];
  const onNavigationButtonPress = (path: string, props: any) => {
    return () => {
      mNavigator.navigate(path, props);
    };
  };

  const renderButton = () => {
    return buttons.map((button) => {
      return (
        <TouchableOpacity
          key={button.name}
          style={[STYLES.Buttons.bottomNavigationButton]}
          onPress={onNavigationButtonPress(button.name, button.props)}
        >
          <View>
            <Image source={button.icon} style={[STYLES.Images.bottomNavigationButtonIcon]} />
          </View>
        </TouchableOpacity>
      );
    });
  };

  return <View style={[STYLES.ScreenStyles.BottomNavigationContainer]}>{renderButton()}</View>;
};
