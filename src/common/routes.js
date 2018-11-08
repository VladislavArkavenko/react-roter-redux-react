import { requestRepos } from './redux-modules/reposModule'
import { Redirect } from 'react-router-dom'
import Loading from './components/Loading'
import Loadable from 'react-loadable'
import React from 'react'

import { fetchUser } from './api'

const routes =  [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import('./components/Home'),
            loading: Loading
        })
    },
    {
        path: '/languages',
        exact: true,
        component: Loadable({
            loader: () => import('./components/Languages'),
            loading: Loading
        })
    },
    {
        path: '/languages/:language',
        component: Loadable({
            loader: () => import('./components/RepoGrid'),
            loading: Loading
        }),
        loadData: (store, match) => {
            return store.dispatch( requestRepos( match.params.language) )
        }
    },
    {
        path: '/users',
        exact: true,
        component: Loadable({
            loader: () => import('./components/Users'),
            loading: Loading
        })
    },
    {
        path: '/users/:id',
        component: Loadable({
            loader: () => import('./components/UserGrid'),
            loading: Loading
        }),
        loadData: (path = '') => fetchUser(
                path.split('/').pop()
            )
    },
    {
        path: '/404',
        exact: true,
        component: Loadable({
            loader: () => import('./components/PageNotFound'),
            loading: Loading
        })
    },
    {
        path: "/",
        component: () => <Redirect to="/404" />
    }
]

export default routes