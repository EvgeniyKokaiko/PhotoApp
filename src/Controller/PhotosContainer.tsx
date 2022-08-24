import React, { useCallback } from 'react';
import { useState } from 'react';
import PhotosComponent, { photosComponentProps } from '../Screens/PhotosComponent';
import { FormTextBoxProps } from '../View/TextBox';
import { STYLES } from '../Styles';
import { useOnFocus } from '../Hooks/navigation';
import { actionImpl } from '../Store/actions';
import { useCombinedRedux } from '../Hooks/redux';
import { PhotoModel } from '../Types/models';

type photosContainerState = {
  isRefresh: boolean;
  filteredItems: Array<PhotoModel>;
  isSearch: boolean;
};
type photosContainerProps = {};

const PhotosContainer: React.FC<photosContainerProps> = () => {
  const { selector, dispatch } = useCombinedRedux('photosReducer');
  const [getState, setState] = useState<photosContainerState>({
    isRefresh: false,
    filteredItems: [],
    isSearch: false,
  });
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

  function onSearch(inputValue: string) {
    if (inputValue.trim() === '') {
      setState({ ...getState, isSearch: false, filteredItems: [] });
    } else {
      const normalizedInput = inputValue.trim().toLowerCase();
      const filteredItems = selector.items.filter((model: PhotoModel) => model.title.startsWith(normalizedInput, 0));
      setState({ ...getState, isSearch: true, filteredItems: filteredItems });
    }
  }

  const onRefresh = useCallback(() => {
    dispatch(actionImpl.fetchPhotos());
  }, []);

  useOnFocus(() => {
    dispatch(actionImpl.fetchPhotos());
  }, []);

  const STATE: photosComponentProps = {
    formBoxProperties,
    data: selector,
    onRefresh,
    refreshing: getState.isRefresh,
    isSearch: getState.isSearch,
    filteredItems: getState.filteredItems,
  };

  return <PhotosComponent {...STATE} />;
};

export { PhotosContainer };
