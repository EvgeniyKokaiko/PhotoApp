import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = {
  lastFetched: '',
  items: [],
};

const FavoritesReducer = createSlice({
  name: 'favoritesReducer',
  reducers: {

  },
  initialState: favoritesInitialState,
});
