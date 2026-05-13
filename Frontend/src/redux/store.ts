// Redux Store - Configurazione centrale dello state management

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './slices/authSlice';

// Creo storage adapter per localStorage
const storage = {
  getItem: (key: string): Promise<string | null> => {
    return Promise.resolve(localStorage.getItem(key));
  },
  setItem: (key: string, value: string): Promise<void> => {
    return Promise.resolve(localStorage.setItem(key, value));
  },
  removeItem: (key: string): Promise<void> => {
    return Promise.resolve(localStorage.removeItem(key));
  },
};

// Configurazione redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Solo auth viene persistito
};

// Wrappa il reducer auth con persist
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Creazione dello store Redux
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    // Qui aggiungerò altri slices in futuro:
    // notizie: notizieReducer,
    // eventi: eventiReducer,
    // salvati: salvatiReducer,
    // notifiche: notificheReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignoro queste azioni perché redux-persist usa valori non serializzabili
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Persistor - gestisce la persistenza dello state
export const persistor = persistStore(store);

// Export dei tipi TypeScript per usare lo store nei componenti
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
