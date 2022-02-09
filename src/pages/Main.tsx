import { useCallback, useState } from 'react'

import { Button, ButtonLink } from 'components/Button'
import { Column } from 'components/Column'
import { Joke } from 'components/Joke'
import { api } from 'services/api'
import { Container } from 'components/Container'

export const Main: React.VFC = () => {
  const [auto, setAuto] = useState<Boolean>(false)
  const [refetch, { isFetching }] = api.endpoints.getJoke.useLazyQuery({
    pollingInterval: auto ? 3000 : 0,
  })
  const handleAutoFetchSwitch = useCallback(() => {
    setAuto((auto) => {
      if (!auto) {
        // query should be fired at least once to start autofetching
        refetch()
      }
      return !auto
    })
  }, [refetch, setAuto])

  return (
    <Container maxWidth="30rem">
      <Column>
        <Joke />
        <Column gap="0.5rem">
          <Button onClick={() => refetch()} disabled={isFetching} variant="primary">
            Next joke
          </Button>
          <Button onClick={handleAutoFetchSwitch}>{auto ? 'Disable' : 'Enable'} auto next</Button>
          <ButtonLink to="/favorites">Favorites</ButtonLink>
        </Column>
      </Column>
    </Container>
  )
}
