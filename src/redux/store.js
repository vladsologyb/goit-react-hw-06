import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist"
import contactsReducer from "./contactsSlice"
import filterReducer from './filtersSlice'
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
}

const filtersPersistConfig = {
    key: 'searchKey',
    storage,
    whitelist: ['name'],
}

const pContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

const pFilterReducer = persistReducer(filtersPersistConfig, filterReducer)

export const store = configureStore({
    reducer:{
        contacts : pContactsReducer,
        filter : pFilterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)