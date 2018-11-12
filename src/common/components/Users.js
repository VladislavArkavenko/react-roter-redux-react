import {NavLink} from 'react-router-dom'
import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";

export default function Users() {

    const users = [
            {
                name: 'Me',
                param: 'VladislavArkavenko'
            },
            {
                name: 'Igor',
                param: 'polkpolio1',
            },
            {
                name: 'Someone',
                param: 'someone',
            }
    ]

    return (
        <Fragment>

            <Helmet>
                <title> Users </title>
                <meta name="description" content="Server side rendering and code-splitting(user page)" />
            </Helmet>

            <div>
                <h2> This is Users page. </h2>
                <ul>
                    { users.map( ({name, param}) => (
                        <li key={param}>
                            <NavLink activeStyle={{fontWeight: 'bold'}} to={`/users/${param}`}>
                                {name}
                            </NavLink>
                        </li>
                    ) ) }
                </ul>
            </div>
        </Fragment>
    )
}
