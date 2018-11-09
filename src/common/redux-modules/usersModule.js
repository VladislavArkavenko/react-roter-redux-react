import reducerRegistry from './reducerRegistry'
import fetch from 'isomorphic-fetch'

// Initial State
const initialState = {
    loading: false,
    error: null,
    data: {}
}

// Constants
export const USER_REQUEST = "USER_REQUEST"
export const USER_SUCCESS = "USER_SUCCESS"
export const USER_FAILURE = "USER_FAILURE"

// Actions
export const requestUser = name => dispatch => {
    const getURI = name => encodeURI(`https://api.github.com/users/${name}`)

    dispatch( { type: USER_REQUEST } );
    fetch(getURI(name))
        .then( res => res.json() )
        .then( user => dispatch(successRepos(user, name)) )
        .catch( err => dispatch(failureRepos(err)) )
}

export const successRepos = (user, name) => ({
    type: USER_SUCCESS,
    payload: {
        user,
        name
    }
})

export const failureRepos =  err => ({
    type: USER_FAILURE,
    payload: err
});

// Reducer Name
const reducerName = 'users';

// Reducer
export default function reducer (state = initialState, action) {
    switch(action.type){
        case USER_REQUEST:
            return Object.assign( {}, state, {
                loading: true,
                error: null
            })
        case USER_SUCCESS:
            return Object.assign( {}, state, {
                loading: false,
                data : Object.assign( {}, state.data, { [action.payload.name]: action.payload.user })
            })
        case USER_FAILURE:
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