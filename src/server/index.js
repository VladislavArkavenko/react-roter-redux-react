import { StaticRouter, matchPath } from "react-router-dom"
import { renderToString } from 'react-dom/server'
import serialize from "serialize-javascript"
import { Provider } from 'react-redux'
import reducers from './reduxReducers'
import routes from '../common/routes'
import Loadable from 'react-loadable'
import { createStore } from 'redux'
import App from '../common/App'
import express from 'express'
import React from 'react'
import cors from 'cors'

const app = express()
const port = 3000;

app.use(cors())

app.use(express.static('public'))

app.get( '*' , (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

    const promise = activeRoute.loadData
        ? activeRoute.loadData(req.path)
        : Promise.resolve()


    promise
        .then( data => {
            const store = createStore(reducers)
            const preloadedState = store.getState()
            const context = { data }

            const markup = renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.url}  context={context}>
                        <App data={data}/>
                    </StaticRouter>
                </Provider>
            )

            res.send(`
                <!doctype html>
                <html>
                
                  <head>
                    <title>My app</title>
                    <script src="/bundle.js" defer></script>
                    <script> window.__INITIAL_DATA__ = ${serialize(data)} </script>
                    <script> window.__PRELOADED_STATE__ = ${serialize(preloadedState)} </script> 
                  </head>
                
                  <body>
                    <div id="app"> ${markup} </div>
                  </body>
                  
                </html>
            `)
        })
        .catch(next)
})

Loadable.preloadAll().then(() => {
    app.listen( port, () => {
        console.log(`Server is listening on port: ${port}`)
    })
})