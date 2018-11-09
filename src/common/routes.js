import customLoadable from './components/customLoadable'
import { Redirect } from 'react-router-dom'
import React from 'react'

const routes =  [
    {
        path: '/',
        exact: true,
        component: customLoadable({
            loader: () => import('./components/Home')
        })
    },
    {
        path: '/languages',
        exact: true,
        component: customLoadable({
            loader: () => import('./components/Languages')
        })
    },
    {
        path: '/languages/:language',
        component: customLoadable({
            loader: () => import('./components/RepoGrid')
        }),
        loadData: (store, match) => {
            import('./redux-modules/reposModule')
                .then( module => {
                    return store.dispatch( module.default( match.params.language ) )
                })
                .catch( err => console.log(err) )
        }
    },
    {
        path: '/users',
        exact: true,
        component: customLoadable({
            loader: () => import('./components/Users')
        })
    },
    {
        path: '/users/:name',
        component: customLoadable({
            loader: () => import('./components/UserGrid')
        }),
        loadData: (store, match) => {
            import('./redux-modules/userModule')
                .then( module => {
                    return store.dispatch( module.default( match.params.language ) )
                })
                .catch( err => console.log(err) )
        }
    },
    {
        path: '/404',
        exact: true,
        component: customLoadable({
            loader: () => import('./components/PageNotFound')
        })
    },
    {
        path: "/",
        component: () => <Redirect to="/404" />
    }
]

export default routes