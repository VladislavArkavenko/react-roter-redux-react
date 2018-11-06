import { StaticRouter, matchPath } from "react-router-dom"
import { getBundles } from 'react-loadable/webpack'
import stats from '../../dist/react-loadable.json'
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
const port = 3000

app.use(cors())
app.use(express.static('../../dist'))

app.get( '*' , (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

    const promise = activeRoute.loadData
        ? activeRoute.loadData(req.path)
        : Promise.resolve()


    promise
        .then( data => {
            const modules = []
            const store = createStore(reducers)
            const preloadedState = store.getState()

            const context = { data }

            const markup = renderToString(
                <Loadable.Capture report={ moduleName => modules.push(moduleName) }>
                    <Provider store={store}>
                        <StaticRouter location={req.url}  context={context}>
                            <App data={data}/>
                        </StaticRouter>
                    </Provider>
                </Loadable.Capture>
            )

            const bundles = getBundles(stats, modules)

            res.send(`
                <!doctype html>
                <html lang="en"> 
                                               
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title> My App </title> 
                                                         
                    <script> window.__INITIAL_DATA__ = ${serialize(data)} </script>
                    <script> window.__PRELOADED_STATE__ = ${serialize(preloadedState)} </script>                                       
                  </head>
                
                  <body>
                    <div id="app">${markup}</div>
                    <script src="/manifest.js" type="javascript"></script>
                    <script src="/main.js" type="javascript"></script>
                    ${
                        bundles.map( bundle => {
                            return `<script src="${bundle.file}" type="javascript"></script>`
                        }).join('\n')
                     }                     
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
}).catch( err => {
    console.log(err)
})