import React from 'react';
import { useState } from 'react';
import FavoritesComponent, { favoritesComponentProps } from '../Screens/FavoritesComponent';
import { FormTextBoxProps } from '../View/TextBox';
import { STYLES } from '../Styles';
import { useAppSelector } from '../Hooks/redux';
import { OwnPhotoModel } from '../Types/models';

type favoritesContainerState = {
  filteredItems: Array<OwnPhotoModel>;
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
    placeholder: 'Search...',
    style: {
      container: [STYLES.Inputs.searchInputContainer],
      input: [STYLES.Inputs.searchInput],
    },
    leftIcon: true,
  };

  /**
   * Search method of component, which make a substitution of state from redux store to component state in moment when input value is not empty
   */
  function onSearch(inputValue: string) {
    if (inputValue.trim() === '') {
      setState({ ...getState, isSearch: false, filteredItems: [] });
    } else {
      const normalizedInput = inputValue.trim().toLowerCase();
      const filteredItems = favorites.filter((model: OwnPhotoModel) => model.title.startsWith(normalizedInput, 0));
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
