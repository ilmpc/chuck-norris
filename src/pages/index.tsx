import { Route, Routes } from 'react-router'

import { Main } from './Main'
import { Favorites } from './Favorites'

export const Pages = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/favorites" element={<Favorites />} />
  </Routes>
)
