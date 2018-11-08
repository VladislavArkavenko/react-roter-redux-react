import store from './configureStore'
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
                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('app')
    )
})


