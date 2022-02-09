import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Id } from 'types'
import { Storage, storageEventAction } from 'utils/localStorage'

type JokeAction = PayloadAction<Id>

const sliceName = 'favoriteJokes'

export const favoritesStorage = new Storage(sliceName, [] as Id[])
export const useFavoritesObserver = favoritesStorage.useObserver

export const favoriteJokes = createSlice({
  name: sliceName,
  initialState: favoritesStorage.get(),
  reducers: {
    updateJoke(state, { payload: newJokeId }: JokeAction) {
      let id = state.findIndex((id) => id === newJokeId)
      // Remove if joke persist
      if (id !== -1) {
        state.splice(id, 1)
      } else {
        if (state.length === 10) {
          state.splice(0, 1)
        }
        state.push(newJokeId)
      }
      favoritesStorage.save(state)
    },
    purgeList() {
      favoritesStorage.clear()
      return []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(storageEventAction, (state, { payload: storageKey }) => {
      if (storageKey !== sliceName) return
      return favoritesStorage.get()
    })
  },
})
