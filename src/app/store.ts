import { configureStore } from '@reduxjs/toolkit'

import { api } from 'services/api'
import { favoriteJokes } from 'services/favoriteJokes'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [favoriteJokes.name]: favoriteJokes.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api.middleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
