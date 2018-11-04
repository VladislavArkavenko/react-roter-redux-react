import React from 'react';
import {NavLink} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h2>This is Home page.</h2>
            <NavLink activeStyle={{fontWeight: 'bold'}} to={`/languages`}>
                Languages
            </NavLink>
            < br />
            <NavLink activeStyle={{fontWeight: 'bold'}} to={`/users`}>
                Users
            </NavLink>
        </div>
    )
}
