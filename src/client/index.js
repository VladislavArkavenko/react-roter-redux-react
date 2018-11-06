import store from '../common/redux-moduls/createStore'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import { hydrate } from 'react-dom'
import App from '../common/App'
import React from 'react'

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


