import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Joke } from "types";

export const api = createApi({
  reducerPath: "chuckNorrisApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.chucknorris.io/jokes/",
  }),
  endpoints: (build) => ({
    getRandomJoke: build.query<Joke, void>({
      query: () => "random",
    }),
    getJokeById: build.query<Joke, string>({
      query: (id) => id,
    }),
  }),
});

export const { useGetRandomJokeQuery, useGetJokeByIdQuery } = api;
