import Home from './Home'
import Languages from './Languages'
import Users from './Users'
import Grid from './Grid'
import { fetchPopularRepos } from './api'

const routes =  [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/languages',
        exact: true,
        component: Languages
    },
    {
        path: '/languages/:id',
        component: Grid,
        fetchInitialData: (path = '') => fetchPopularRepos(
            path.split('/').pop()
        )
    },
    {
        path: '/users',
        exact: true,
        component: Users
    },
    {
        path: '/users/:id',
        component: Grid,
        fetchInitialData: (path = '') => fetchPopularRepos(
            path.split('/').pop()
        )
    }
]

export default routes