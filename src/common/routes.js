import { fetchPopularRepos, fetchUser } from './api'
import Loading from './components/Loading'
import Loadable from 'react-loadable'

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
        path: '/languages/:id',
        component: Loadable({
            loader: () => import('./components/RepoGrid'),
            loading: Loading
        }),
        loadData: (path = '') => fetchPopularRepos(
                path.split('/').pop()
            )
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
        path: '*',
        component: Loadable({
            loader: () => import('./components/NoMatch'),
            loading: Loading
        })
    }
]

export default routes