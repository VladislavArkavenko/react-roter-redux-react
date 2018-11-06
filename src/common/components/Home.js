import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Home() {
    return (
        <div>
            <NavLink activeStyle={ {fontWeight: 'bold'} } to={`/languages`}>
                Languages
            </NavLink>
            < br />
            <NavLink activeStyle={ {fontWeight: 'bold'} } to={`/users`}>
                Users
            </NavLink>
        </div>
    )
}
