import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Pages } from 'pages'

import { store } from './store'

export const App: React.VFC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </Provider>
)
