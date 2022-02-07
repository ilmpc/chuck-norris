import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Joke } from 'types'

export const api = createApi({
  reducerPath: 'chuckNorrisApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chucknorris.io/jokes/',
  }),
  endpoints: (build) => ({
    getJoke: build.query<Joke, string | void>({
      query: (id) => id ?? 'random',
    }),
  }),
})

export const { useGetJokeQuery } = api
