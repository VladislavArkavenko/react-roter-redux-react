import { NavLink } from 'react-router-dom'
import React from 'react'

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
    )
}
