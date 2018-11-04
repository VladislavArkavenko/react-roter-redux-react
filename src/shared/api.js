import fetch from 'isomorphic-fetch'

export function fetchPopularRepos (language = 'all') {
    const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

    return fetch(encodedURI)
        .then(data => data.json() )
        .then(repos => repos.items)
        .catch(err => {
            console.warn(err)
            return null
        });
}
//
// export function fetchUsers(user = '') {
//     const encodedURI = encodeURI(`https://api.github.com/users/${user}`)
//
//     return fetch(encodedURI)
//         .then(data => data.json() )
//         .catch(err => {
//             console.warn(err)
//             return null
//         });
// }