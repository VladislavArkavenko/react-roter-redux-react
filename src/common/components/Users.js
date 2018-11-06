import {NavLink} from 'react-router-dom'
import React from 'react'

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
    )
}
