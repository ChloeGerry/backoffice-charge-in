import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import reducers from '../features/usersReducers';

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
