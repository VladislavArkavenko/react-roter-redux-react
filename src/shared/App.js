import React, { Component } from 'react'
import routes from './routes'
import { renderRoutes } from 'react-router-config'


class App extends Component {
    render() {
        return (
            <div>
                <h1>This is App root page.</h1>
                <hr/>
                 { renderRoutes(routes) }
            </div>
        )
    }
}

export default App
