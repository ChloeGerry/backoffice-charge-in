import { configureStore } from '@reduxjs/toolkit';
// import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import additionalMiddleware from 'additional-middleware';
// import logger from 'redux-logger';

import reducers from '../features/usersReducers';

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  // middleware: new MiddlewareArray().concat(additionalMiddleware, logger),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware()
  //     .prepend(additionalMiddleware)
  //     // prepend and concat calls can be chained
  //     .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
