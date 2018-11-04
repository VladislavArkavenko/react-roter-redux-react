import express from 'express'
import React from 'react'
import routes from '../shared/routes'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'
import serialize from "serialize-javascript"
import { StaticRouter, matchPath } from "react-router-dom"


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
        .then(data => {
            const context = { data }

            const markup = renderToString(
                <StaticRouter location={req.url}  context={context}>
                    <App data={data}/>
                </StaticRouter>
            )

            res.send(`
                <!doctype html>
                <html>
                
                  <head>
                    <title>SSR with RR</title>
                    <script src="/bundle.js" defer></script>
                    <script> window.__INITIAL_DATA__ = ${serialize(data)} </script>
                  </head>
                
                  <body>
                    <div id="app"> ${markup} </div>
                  </body>
                  
                </html>
            `)
        })
        .catch(next)
})


app.listen( port, () => {
    console.log(`Server is listening on port: ${port}`)
})