import { createNavigationContainerRef, NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type NavigationState = {
  path: string;
  props: any;
};

export type RootStackParamList = {
  FavoritesContainer: {};
  PhotosContainer: {};
};

/***
 *
 * Own navigation realization which get ref of navigation from NavigationContainer in root component.
 *  Can be customizable for different purposes
 */

class INavigation {
  private readonly _navigationStack: Array<NavigationState>;
  private _currentScreen: NavigationState;
  private readonly _navigator: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
  constructor() {
    this._navigationStack = [];
    this._currentScreen = { path: '', props: '' };
    this._navigator = createNavigationContainerRef<BottomTabNavigationProp<RootStackParamList>>();
  }

  public get navigationStack(): Array<NavigationState> {
    return this._navigationStack;
  }

  public get navigator(): NavigationContainerRefWithCurrent<ReactNavigation.RootParamList> {
    return this._navigator;
  }

  public navigate = (path: string, props: any = {}) => {
    if (this._navigator === void 0 || this._navigator === null || this._currentScreen.path === path) {
      return;
    }
    if (this._navigator.isReady()) {
      this._navigationStack.push({ path, props });
      this._currentScreen = { path, props };
      /***
       *
       * FIX TYPES HERE!
       *
       */
      this._navigator.navigate(path as never, props as never);
    }
  };

  public goBack = () => {
    try {
      if (this._navigationStack.length === 0) {
        return;
      }
      let lastPath = this._navigationStack[this._navigationStack.length - 2];
      /***
       *
       * FIX TYPES HERE!
       *
       */
      this._navigator.navigate(lastPath.path as never, lastPath.props as never);
      this._navigationStack.pop();
      this._currentScreen = lastPath;
    } catch (e) {
      console.log('INavigation.goBack ex', e);
    }
  };
}

export const mNavigator = new INavigation();
