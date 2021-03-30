import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducers from './reducers'

import { createStore,applyMiddleware,compose} from 'redux'

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancer(applyMiddleware(thunk)))





export default ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root')
)

