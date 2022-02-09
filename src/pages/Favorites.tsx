import styled from '@emotion/styled'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { Button, ButtonLink } from 'components/Button'
import { Column } from 'components/Column'
import { Container } from 'components/Container'
import { Joke } from 'components/Joke'
import { favoriteJokes } from 'services/favoriteJokes'

const ResponsiveContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  align-items: center;
  gap: 3rem;
`

export const Favorites: React.VFC = () => {
  const jokes = useAppSelector((state) => state.favoriteJokes)
  const dispatch = useAppDispatch()
  const isListEmpty = jokes.length === 0
  return (
    <Container>
      <ResponsiveContainer>
        {isListEmpty && 'Now your list is empty.\nLike jokes to complete your collection!'}
        {jokes.map((id) => (
          <Joke id={id} key={id} />
        ))}
      </ResponsiveContainer>
      <Column gap="0.5rem" maxWidth="30rem" fullWidth center>
        <Button variant="warning" disabled={isListEmpty} onClick={() => dispatch(favoriteJokes.actions.purgeList())}>
          Clear list
        </Button>
        <ButtonLink to="/">Back</ButtonLink>
      </Column>
    </Container>
  )
}
