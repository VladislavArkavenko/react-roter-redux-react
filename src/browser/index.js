import { BrowserRouter } from 'react-router-dom'
import reducers from '../shared/reducers'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import { createStore } from 'redux'
import { hydrate } from 'react-dom'
import App from '../shared/App'
import React from 'react'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(
    reducers,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

Loadable.preloadReady().then( () => {
    hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <App data={ window.__INITIAL_DATA__ } />
            </BrowserRouter>
        </Provider>,
        document.getElementById('app')
    )
})
