import { renderRoutes } from 'react-router-config'
import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import routes from './routes'


export default class App extends Component {
    render() {
        return (
            <Fragment>

                <Helmet>
                    <title> My App </title>
                    <meta name="description" content="Server side rendering and code-splitting" />
                </Helmet>

                <div>
                    <h1>This is App root page.</h1>
                    <hr/>
                    {renderRoutes(routes)}
                </div>
            </Fragment>

        )
    }
}

