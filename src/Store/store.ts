import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { photosReducer } from './reducers/PhotosReducer';

const rootReducer = combineReducers({
  photosReducer,
});

export const setupStore = () => {
  return configureStore({
    middleware: [thunk],
    reducer: rootReducer,
    devTools: true,
  });
};

/**
 * Types for default redux parts
 */

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
