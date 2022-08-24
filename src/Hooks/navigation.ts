import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

/***
 *
 * This hooks needs to catch onFocus and onBlur Events of screen
 *
 */
export function useOnFocus(callback: Function, deps: Array<any> = []) {
  return useFocusEffect(
    React.useCallback(() => {
      callback();
    }, [...deps])
  );
}

export function useOnBlur(callback: Function, deps: Array<any> = []) {
  return useFocusEffect(
    React.useCallback(() => {
      return () => callback();
    }, [...deps])
  );
}
