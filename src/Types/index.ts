import { StackScreens } from '../Core/MainNavigationScreen';
import {OwnPhotoModel, PhotoModel} from './models';

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
  items: OwnPhotoModel[];
  isLoading: boolean;
  isError: boolean;
  favorites: OwnPhotoModel[];
};
