import React from 'react';
import { useState } from 'react';
import FavoritesComponent, { favoritesComponentProps } from '../Screens/FavoritesComponent';
import { FormTextBoxProps } from '../View/TextBox';
import { STYLES } from '../Styles';
import {useAppSelector} from "../Hooks/redux";
import {PhotoModel} from "../Types/models";

type favoritesContainerState = {
  filteredItems: Array<PhotoModel>;
  isSearch: boolean;

};
type favoritesContainerProps = {};

const FavoritesContainer: React.FC<favoritesContainerProps> = () => {
  const [getState, setState] = useState<favoritesContainerState>({
    filteredItems: [],
    isSearch: false,
  });
  const { favorites } = useAppSelector((state) => state.photosReducer);
  const formBoxProperties: FormTextBoxProps = {
    debounced: true,
    onChange: onSearch,
    maxLength: 500,
    multiline: true,
    placeholder: 'Search...',
    style: {
      container: [STYLES.Inputs.searchInputContainer],
      input: [],
    },
    leftIcon: true,
  };

  function onSearch(inputValue: string) {
    if (inputValue.trim() === '') {
      setState({ ...getState, isSearch: false, filteredItems: [] });
    } else {
      const filteredItems = favorites.filter((model: PhotoModel) => model.title.startsWith(inputValue, 0));
      setState({ ...getState, isSearch: true, filteredItems: filteredItems });
    }
  }

  const STATE: favoritesComponentProps = {
    formBoxProperties,
    favorites,
    isSearch: getState.isSearch,
    filteredItems: getState.filteredItems,
  };

  return <FavoritesComponent {...STATE} />;
};

export { FavoritesContainer };
