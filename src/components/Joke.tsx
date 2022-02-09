/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { useGetJokeQuery } from 'services/api'
import { Id } from 'types'
import { Like } from 'components/Like'
import { favoriteJokes } from 'services/favoriteJokes'

import { Column } from './Column'

interface JokeProps {
  id?: Id
}

export const Joke: React.VFC<JokeProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const { data: joke, isLoading } = useGetJokeQuery(id)
  const liked = useAppSelector((state) =>
    state.favoriteJokes.some((favoriteId) => joke != null && favoriteId === joke.id)
  )

  return (
    <Column gap="0.5rem">
      {isLoading && 'Loading...'}
      {joke != null && (
        <>
          {joke.value}
          <div
            css={css`
              display: flex;
              justify-content: end;
            `}
          >
            <Like liked={liked} onClick={() => dispatch(favoriteJokes.actions.updateJoke(joke.id))} />
          </div>
        </>
      )}
    </Column>
  )
}
