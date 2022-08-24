import { createSlice } from '@reduxjs/toolkit';
import { PhotoModel } from '../../Types/models';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type photoInitialStateType = { lastFetched: string; items: PhotoModel[]; isLoading: boolean; isError: boolean; favorites: PhotoModel[] };

const photosInitialState: photoInitialStateType = {
  lastFetched: '',
  items: [],
  isLoading: false,
  favorites: [],
  isError: false,
};

const PhotosReducer = createSlice({
  name: 'photosReducer',
  reducers: {
    fetchPhotos(state) {
      state.isLoading = true;
      state.items = [];
      state.lastFetched = new Date().toString();
    },
    fetchPhotos_success(state, action) {
      state.items = action.payload.filter((item: PhotoModel) => state.favorites.findIndex((favItem) => favItem.id === item.id) === -1);
      state.isLoading = false;
      state.isError = false;
    },
    fetchPhotos_error(state, action) {
      state.isLoading = false;
      state.isError = true;
      state.lastFetched = action.payload;
    },
    manage_favorites(state, action) {
      const isExistsFavorites = state.favorites.findIndex((item) => item.id === action.payload.id);
      if (isExistsFavorites !== -1) {
        state.favorites.splice(isExistsFavorites, 1);
      } else {
        const isExistsInAll = state.items.findIndex((item) => item.id === action.payload.id);
        state.items.splice(isExistsInAll, 1);
        state.favorites.push(action.payload);
      }
    },
  },
  initialState: photosInitialState,
});

const photosActions = PhotosReducer.actions;

const photoReducerPersistConfig = {
  key: 'photos',
  storage: AsyncStorage,
  whitelist: ['favorites', 'lastFetched'],
};

const photosReducer = persistReducer(photoReducerPersistConfig, PhotosReducer.reducer);

export { photosActions, photosReducer };
