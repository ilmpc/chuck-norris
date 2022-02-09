import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Pages } from 'pages'
import { useFavoritesObserver } from 'services/favoriteJokes'

import { store } from './store'

export const App: React.VFC = () => {
  useFavoritesObserver(store.dispatch)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Provider>
  )
}
