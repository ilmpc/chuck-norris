import { useAppDispatch, useAppSelector } from 'app/hooks'
import { Button, ButtonLink } from 'components/Button'
import { Column } from 'components/Column'
import { Joke } from 'components/Joke'
import { favoriteJokes } from 'services/favoriteJokes'

export const Favorites: React.VFC = () => {
  const jokes = useAppSelector((state) => state.favoriteJokes)
  const dispatch = useAppDispatch()
  const isListEmpty = jokes.length === 0
  return (
    <Column>
      {isListEmpty && 'Now your list is empty.\nLike jokes to complete your collection!'}
      {jokes.map((id) => (
        <Joke id={id} key={id} />
      ))}
      <Column gap="0.5rem">
        <Button variant="warning" disabled={isListEmpty} onClick={() => dispatch(favoriteJokes.actions.purgeList())}>
          Clear list
        </Button>
        <ButtonLink to="/">Back</ButtonLink>
      </Column>
    </Column>
  )
}
