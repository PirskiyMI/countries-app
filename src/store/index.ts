import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { countryApi } from '../api/countryApi';
import selectReducer from './reducers/selectSlice';

const rootReducer = combineReducers({
   selectReducer,
   [countryApi.reducerPath]: countryApi.reducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countryApi.middleware),
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
