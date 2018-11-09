import { createStore, applyMiddleware } from 'redux'
import { getBundles } from 'react-loadable/webpack'
import { matchRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import serialize from 'serialize-javascript'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import thunk from 'redux-thunk'
import express from 'express'
import React from 'react'
import cors from 'cors'
import path from 'path'

import stats from '../../dist/react-loadable.json'
import reducers from './reduxReducers'
import routes from '../common/routes'
import App from '../common/App'

const app = express()
const port = 3000

app.use(cors())
app.use(express.static(path.resolve('./dist')))

const preloadData = (location, store) => {

    const branch = matchRoutes(routes, location)

    const promises = branch.map( ({ route, match }) => {
        if (route) {
            return route.loadData ?
                   route.loadData( store, match ) :
                   Promise.resolve()
        }
    })

    return Promise.all(promises)
}

app.get( '*' , (req, res) => {
    let modules = []
    const context = {}
    const store = createStore(reducers, applyMiddleware(thunk))

    preloadData(req.url, store).then(() => {

            const html = renderToString(
                <Loadable.Capture report={moduleName => modules.push(moduleName)}>
                    <Provider store={store}>
                        <StaticRouter location={req.url} context={context}>
                            <App/>
                        </StaticRouter>
                    </Provider>
                </Loadable.Capture>
            )

            let bundles = getBundles(stats, modules)

            res.send(`
                <!doctype html>
                <html lang="en"> 
                                               
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title> My App </title>                                                       
                    
                    <script>
                        window.__PRELOADED_STATE__ = ${serialize( store.getState() )} 
                    </script>  
                                                         
                  </head>
                
                  <body>
                    <div id="app"> ${html} </div>
                    ${
                        bundles.map(bundle => {
                            return `<script src="/${bundle.file}"></script>`
                        }).join('\\n')
                     }                   
                    <script src="/main.js"></script>                                              
                  </body> 
                                   
                </html>
            `)
        }
    )
})


Loadable.preloadAll().then(() => {
    app.listen( port, () => {
        console.log(`Server is listening on port: ${port}`)
    })
}).catch( err => {
    console.log(err)
})