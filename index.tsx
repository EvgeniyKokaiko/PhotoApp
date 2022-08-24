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
    <NavigationContainer ref={mNavigator.navigator}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={asyncPersistor}>
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

registerRootComponent(RegisterApplication);
