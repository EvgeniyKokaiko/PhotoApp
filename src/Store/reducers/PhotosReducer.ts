import { createSlice } from '@reduxjs/toolkit';
import { PhotoModel } from '../../Types/models';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { photoInitialStateType } from '../../Types';

const photosInitialState: photoInitialStateType = {
  lastFetched: '',
  items: [],
  isLoading: false,
  favorites: [],
  isError: false,
};
/**
 * Main reducer of posts inside an application
 * Algorithm:
 * 1.When we enter an application, we are try to fetch data from api, then, if status equal 200 and no errors
 * we will start to filter posts payload and search items by id, which contains inside favorites array,
 * 2. If we are on Photos Screen, and press like button on specific post, we will remove this item from actual screen, and add it to favorites,
 * 3. If we are on Favorites Screen, and press dislike button on specific post, we will remove this item from actual screen, but don't push it inside photos array,
 * because if we will navigate to Photos Screen, we will catch a onFocus event, which will try to refetch all posts
 * 4.Array of favorite posts are store inside AsyncStorage by Redux-persist
 */
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
