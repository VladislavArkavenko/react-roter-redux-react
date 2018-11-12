import { NavLink } from 'react-router-dom'
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export default function Languages() {
    const languages = [
        {
            name: 'All',
            param: 'all'
        },
        {
            name: 'JavaScript',
            param: 'javascript'
        },
        {
            name: 'Ruby',
            param: 'ruby'
        },
        {
            name: 'Python',
            param: 'python'
        },
        {
            name: 'Java',
            param: 'java'
        }
    ]

    return (
        <Fragment>

            <Helmet>
                <title> Languages </title>
                <meta name="description" content="Server side rendering and code-splitting(language page)" />
            </Helmet>

            <div>
                <h2>This is Languages page.</h2>
                <ul>
                    { languages.map( ({name, param}) => (
                        <li key={param}>
                            <NavLink activeStyle={{fontWeight: 'bold'}} to={`/languages/${param}`}>
                                {name}
                            </NavLink>
                        </li>
                    ) ) }
                </ul>
            </div>
        </Fragment>
    )
}
