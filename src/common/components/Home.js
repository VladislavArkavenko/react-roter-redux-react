import { NavLink } from 'react-router-dom'
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export default function Home() {
    return (
        <Fragment>

            <Helmet>
                <title> Home </title>
                <meta name="description" content="Server side rendering and code-splitting(home page)" />
            </Helmet>

            <div>
                <NavLink activeStyle={ {fontWeight: 'bold'} } to={`/languages`}>
                    Languages
                </NavLink>
                < br />
                <NavLink activeStyle={ {fontWeight: 'bold'} } to={`/users`}>
                    Users
                </NavLink>
            </div>
        </Fragment>
    )
}
