import { Route, Routes } from 'react-router'

import { Container } from 'components/Container'

import { Main } from './Main'
import { Favorites } from './Favorites'

export const Pages = () => (
  <Container>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </Container>
)
