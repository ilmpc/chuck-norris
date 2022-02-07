import { useState } from 'react'

import { Button, ButtonLink } from 'components/Button'
import { Column } from 'components/Column'
import { Joke } from 'components/Joke'
import { api } from 'services/api'

export const Main: React.VFC = () => {
  const [auto, setAuto] = useState<Boolean>(false)
  const [refetch, { isFetching }] = api.endpoints.getJoke.useLazyQuery({
    pollingInterval: auto ? 3000 : 0,
  })
  return (
    <Column>
      <Joke />
      <Column gap="0.5rem">
        <Button onClick={() => refetch()} disabled={isFetching} variant="primary">
          Next joke
        </Button>
        <Button onClick={() => setAuto((e) => !e)}>{auto ? 'Disable' : 'Enable'} auto next</Button>
        <ButtonLink to="/favorites">Favorites</ButtonLink>
      </Column>
    </Column>
  )
}
