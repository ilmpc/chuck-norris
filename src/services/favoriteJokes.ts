import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Id } from 'types'

type JokeAction = PayloadAction<Id>

export const favoriteJokes = createSlice({
  name: 'favoriteJokes',
  initialState: [] as Id[],
  reducers: {
    updateJoke(state, { payload }: JokeAction) {
      if (state.includes(payload)) {
        return state.filter((id) => id !== payload)
      }
      if (state.length === 10) {
        state.splice(0, 1)
      }
      state.push(payload)
    },
    purgeList() {
      return []
    },
  },
})
