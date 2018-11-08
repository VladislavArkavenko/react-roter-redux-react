import fetch from 'isomorphic-fetch'

export function fetchUser(user = ' ') {
    const encodedURI = encodeURI(`https://api.github.com/users/${user}`)

    return fetch(encodedURI)
        .then(data => data.json() )
        .catch(err => {
            console.warn(err)
            return null
        })
}