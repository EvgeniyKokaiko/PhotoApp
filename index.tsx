import React from 'react';
import { App } from './App';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { setupStore } from './src/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { mNavigator } from './src/Core/INavigation';

export default function RegisterApplication() {
  const store = setupStore();
  const asyncPersistor = persistStore(store);

  return (
    <Provider store={store}>
      <NavigationContainer ref={mNavigator.navigator}>
        <PersistGate loading={null} persistor={asyncPersistor}>
          <App />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}

/**
 * Root registration of component was changed from expo to this component
 */

registerRootComponent(RegisterApplication);
