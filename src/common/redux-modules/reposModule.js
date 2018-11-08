import reducerRegistry from './reducerRegistry'
import fetch from 'isomorphic-fetch'

// Initial State
const initialState = {
    loading: false,
    error: null,
    data: {}
}

// Constants
export const REPOS_REQUEST = "REPOS_REQUEST"
export const REPOS_SUCCESS = "REPOS_SUCCESS"
export const REPOS_FAILURE = "REPOS_FAILURE"

// Actions
export const requestRepos = lang => dispatch => {
    const getURI = lang => encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`)

    dispatch( { type: REPOS_REQUEST } );
    fetch(getURI(lang))
        .then( res => res.json() )
        .then( repos => repos.items)
        .then( repos => dispatch(successRepos(repos, lang)) )
        .catch( err => dispatch(failureRepos(err)) )
}

export const successRepos = (repos, language) => ({
    type: REPOS_SUCCESS,
    payload: {
        repos,
        language
    }
})

export const failureRepos =  err => ({
    type: REPOS_FAILURE,
    payload: err
});

// Reducer Name
const reducerName = 'repos';

// Reducer
export default function reducer (state = initialState, action) {
    switch(action.type){
        case REPOS_REQUEST:
            return Object.assign( {}, state, {
                loading: true,
                error: null
            })
        case REPOS_SUCCESS:
            return Object.assign( {}, state, {
                loading: false,
                data : Object.assign( {}, state.data, { [action.payload.language]: action.payload.repos })
            })
        case REPOS_FAILURE:
            return Object.assign( {}, state, {
                loading: false,
                error: action.payload
            })
        default:
            return state
    }
}

//Register Reducer
reducerRegistry.register(reducerName, reducer);