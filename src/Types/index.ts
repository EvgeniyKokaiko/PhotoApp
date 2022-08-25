import { StackScreens } from '../Core/MainNavigationScreen';
import { PhotoModel } from './models';

export type Screen = {
  name: StackScreens;
  component: Component;
  options?: any;
};

export type Component = any;

export type DefaultFlatListType<T> = {
  item: T;
  index: number;
};

export type photoInitialStateType = {
  lastFetched: string;
  items: PhotoModel[];
  isLoading: boolean;
  isError: boolean;
  favorites: PhotoModel[];
};
