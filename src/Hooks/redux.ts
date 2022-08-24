import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store/store';

/***
 *
 * Typed hooks for redux.
 *
 */


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCombinedRedux = (key: keyof RootState) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state[key]);

  return { dispatch, selector };
};
