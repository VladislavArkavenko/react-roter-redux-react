import Home from './Home'
import Languages from './Languages'
import Users from './Users'
import RepoGrid from './repoGrid'
import UserGrid from './userGrid'
import { fetchPopularRepos, fetchUser } from './api'

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
        component: RepoGrid,
        loadData: (path = '') => fetchPopularRepos(
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
        component: UserGrid,
        loadData: (path = '') => fetchUser(
                path.split('/').pop()
            )
    }
]

export default routes