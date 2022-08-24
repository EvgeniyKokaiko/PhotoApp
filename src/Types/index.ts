import { StackScreens } from '../Core/MainNavigationScreen';

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
